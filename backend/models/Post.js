import mongoose from "mongoose";
import { type } from "os";
// import { type } from "os";

const commentSchema = new mongoose.Schema({
  content: {
    type: String,
    required: [true, "Comment content is required"],
    maxLength: [500, "Comment cannot exced 500 characters"],
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  flags: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
      reason: String,
      createdAt: Date,
    },
  ],
  status: {
    type: String,
    enum: ["active", "flagged", "hidden", "removed"],
    default: "active",
  },
});

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Post title is required"],
      trim: true,
      maxlength: [120, "Title cannot exceed 120 characters"],
    },
    content: {
      type: String,
      required: [true, "Post content is required"],
      maxlength: [2000, "Post cannnot exceed 200 characters"],
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: [
      {
        type: String,
        enum: ["anxiety", "depression", "self-care", "resources", "general"],
      },
    ],
    upvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    downvotes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    comments: [commentSchema],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    flags: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        reason: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
      },
    ],
    status: {
      type: String,
      enum: ["active", "flagged", "hidden", "removed"],
      default: "active",
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

postSchema.index({
  title: "text",
  content: "text",
  "comments.content": "text",
});

postSchema.virtual("voteScore").get(function () {
  return this.upvotes.length - this.downvotes.length;
});

postSchema.virtual("commentCount").get(function () {
  return this.comments.length;
});

export default mongoose.model("Post", postSchema);
