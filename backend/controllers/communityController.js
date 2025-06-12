import Post from "../models/Post.js";
import logger from "../utils/logger.js";

export const createPost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;

    const post = await Post.create({
      title,
      content,
      tags,
      author: req.user.id,
    });
    res.status(201).json(post);
  } catch (error) {
    logger.error("Post creation error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const { page = 1, limit = 20, sort = "-createdAt" } = req.query;
    const posts = await Post.find()
      .sort(sort)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .populate("author", "anonymousId createdAt")
      .lean();

    res.json({
      posts,
      totalPages: Math.ceil((await Post.countDocuments()) / limit),
      currentPage: page,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const votePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { voteType } = req.body;
    const userId = req.user.id;

    const update = {};
    const pull = {};

    if (voteType === "upvote") {
      update.$addToSet = { upvotes: userId };
      pull.$pull = { downvotes: userId };
    } else if (voteType === "downvote") {
      update.$addToSet = { downvotes: userId };
      pull.$pull = { upvotes: userId };
    } else {
      return res.status(400).json({ error: "Invalid vote type" });
    }

    const post = await Post.findByIdAndUpdate(
      postId,
      { ...update, ...pull },
      { new: true }
    );

    res.json(post);
  } catch (error) {
    logger.error("Voting error:", error);
    res.status(500).json({ message: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;

    const post = await Post.findByIdAndUpdate(
      postId,
      {
        $push: {
          comments: {
            content,
            author: req.user.id,
          },
        },
      },
      { new: true }
    );

    res.json(post.comments[post.comments.length - 1]);
  } catch (error) {
    res.status(500).json({ error: "Failed to add comment" });
  }
};

export const searchPosts = async (req, res) => {
  try {
    const { query } = req.query;
    const posts = await Post.find(
      { $text: { $search: query } },
      { score: { $meta: "textScore" } }
    )
      .sort({ score: { $meta: "textScore" } })
      .limit(20)
      .populate("author", "anonymousId");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Search Failed" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const post = await Post.findById(postId);

    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }

    if (
      !post.author.equals(req.user.id) &&
      req.user.role !== "admin" &&
      req.user.role !== "moderator"
    ) {
      return res.status(403).json({ error: "Not authorized" });
    }

    await Post.findByIdAndUpdate(postId, { status: "removed" });
    res.json({ message: "Post removed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Post deletion failed" });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const post = await Post.findById(postId);

    if (!post) return res.status(404).json({ error: "Post not found" });

    const comment = post.comments.id(commentId);
    if (!comment) return res.status(404).json({ error: "Comment not found" });

    if (
      !comment.author.equals(req.user.id) &&
      req.user.role !== "admin" &&
      req.user.role !== "moderator"
    ) {
      return res.status(403).json({ error: "Not authorized" });
    }

    comment.status = "removed";
    await post.save();
    res.json({ message: "Comment removed successfully" });
  } catch (error) {
    res.status(500).json({ error: "Comment deletion failed" });
  }
};

export const flagContent = async (req, res) => {
  try {
    const { postId, commentId } = req.params;
    const { reason } = req.body;
    const userId = req.user.id;

    const flagData = {
      user: userId,
      reason,
      createdAt: new Date()
    };

    if (commentId) {
      await Post.findByIdAndUpdate(
        postId,
        {
          $push: { 'comments.$[elem].flags': flagData },
          $set: { 'comments.$[elem].status': 'flagged' }
        },
        { arrayFilters: [{ 'elem._id': commentId }] }
      );
    } else {
      await Post.findByIdAndUpdate(
        postId,
        {
          $push: { flags: flagData },
          $set: { status: 'flagged' }
        }
      );
    }

    res.json({ message: 'Content flagged successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Flagging failed' });
  }
};
export const getFlaggedContent = async (req, res) => {
  try {
    const flaggedPosts = await Post.find({
      $or: [
        { status: 'flagged' },
        { 'comments.status': 'flagged' }
      ]
    })
    .populate('author flags.user', 'anonymousId email')
    .populate('comments.author comments.flags.user', 'anonymousId email');

    res.json(flaggedPosts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch flagged content' });
  }
};

export const moderatePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { action } = req.body;

    const validActions = ['remove', 'hide', 'dismiss'];
    if (!validActions.includes(action)) {
      return res.status(400).json({ error: 'Invalid moderation action' });
    }

    const update = {};
    switch(action) {
      case 'remove':
        update.status = 'removed';
        break;
      case 'hide':
        update.status = 'hidden';
        break;
      case 'dismiss':
        update.status = 'active';
        update.flags = [];
        break;
    }

    const post = await Post.findByIdAndUpdate(postId, update, { new: true });
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Moderation failed' });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { title, content, tags } = req.body;
    const post = await Post.findByIdAndUpdate(
      req.params.postId,
      { title, content, tags },
      { new: true, runValidators: true }
    ).populate('author', 'anonymousId');

    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to update post' });
  }
};