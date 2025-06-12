import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowAltCircleUp, FaArrowAltCircleDown } from "react-icons/fa";
const Community = ({ Successupdate, notify, Errorupdate }) => {
  const [postTitle, setPostTitle] = useState("");
  const [postContent, setPostContent] = useState("");
  const [commentContent, setCommentContent] = useState("");
  const [replyContent, setReplyContent] = useState("");
  const [postTags, setPostTags] = useState([]);
  const [post, setPost] = useState([]);
  const [commentsWindow, setCommentsWindow] = useState(false);
  const [openReplyId, setOpenReplyId] = useState(null);
  // const [openReplyCommentId, setOpenReplyCommentId] = useState(null);
  const [openInnerComment, setOpenInnerComment] = useState(null);

  const tags = ["anxiety", "depression", "self-care", "resources", "general"];
  const toggleTag = (tag) => {
    setPostTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };
  const sendPost = async (e) => {
    e.preventDefault();
    const newErrors = [];

    try {
      // setSessionId("");
      notify();
      const res = await axios.post(
        "/api/community/posts",
        {
          title: postTitle,
          content: postContent,
          tags: postTags,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        Successupdate(`Post has been ${res.statusText}`);
      }
    } catch (error) {
      Errorupdate("Post creation has failed");
      console.log(error);
    }
  };
  const sendComment = async (e, postID) => {
    e.preventDefault();
    const newErrors = [];

    try {
      notify();
      const res = await axios.post(
        `/api/community/posts/${postID}/comments`,
        {
          content: commentContent,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        setCommentContent("");
        setOpenInnerComment(null);
        Successupdate(`Comment has been sent`);
      }
    } catch (error) {
      Errorupdate("Post creation has failed");
      console.log(error);
    }
  };
  const sendReply = async (e, postID) => {
    e.preventDefault();
    const newErrors = [];

    try {
      // setSessionId("");
      notify();
      const res = await axios.post(
        `/api/community/posts/${postID}/comments`,
        {
          title: postTitle,
          content: postContent,
          tags: postTags,
        },
        {
          withCredentials: true,
        }
      );

      if (res.status === 201) {
        Successupdate(`Post has been ${res.statusText}`);
      }
    } catch (error) {
      Errorupdate("Post creation has failed");
      console.log(error);
    }
  };
  const votePost = async (postID, vote) => {
    const newErrors = [];

    try {
      // setSessionId("");
      notify();
      const res = await axios.post(
        `/api/community/posts/${postID}/vote`,
        {
          voteType: vote,
        },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      if (res.status === 200) {
        Successupdate(`Vote Successfull`);
      }
    } catch (error) {
      Errorupdate("Post creation has failed");
      // console.log(error);
    }
  };
  const toggleReply = (commentId) => {
    setOpenReplyId((prev) => (prev === commentId ? null : commentId));
  };
  // const toggleReplyForComment = (commentId) => {
  //   setOpenReplyCommentId((prev) => (prev === commentId ? null : commentId));
  // };
  const toggleReplyForInnerPostComment = (commentId) => {
    setOpenInnerComment((prev) => (prev === commentId ? null : commentId));
  };
  useEffect(() => {
    const getPost = async () => {
      // e.preventDefault();
      const newErrors = [];

      try {
        // setSessionId("");
        const res = await axios.get(
          "/api/community/posts",

          {
            withCredentials: true,
          }
        );
        // console.log(res)
        if (res.status === 200) {
          setPost(res?.data?.posts);
        }
      } catch (error) {
        Errorupdate("Post creation has failed");
        console.log(error);
      }
    };
    getPost();
    const intervalId = setInterval(getPost, 3000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);
  // console.log(comments)
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-3">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card  glassmorphism-card ">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-users h-5 w-5 text-purple-600"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                Share with Community
              </div>
            </div>
            <div className="p-6 pt-0 space-y-4">
              <form onSubmit={sendPost}>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm flex-1"
                  placeholder="Enter what topic's on your mind..."
                  type="text"
                  value={postTitle}
                  onChange={(e) => setPostTitle(e.target.value)}
                />
                <textarea
                  className="flex mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-24"
                  placeholder="Share your thoughts, ask for support, or offer encouragement..."
                  value={postContent}
                  onChange={(e) => setPostContent(e.target.value)}
                ></textarea>

                <div className="flex items-center gap-4">
                  <div>
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
                      Tags
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <button
                          type="button"
                          key={tag}
                          onClick={() => toggleTag(tag)}
                          className={`inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input  hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 ${
                            postTags.includes(tag)
                              ? " text-white theme-primary"
                              : "bg-background text-gray-700"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  className="mt-6 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0  text-primary-foreground h h-10 px-4 py-2 w-full"
                  disabled={!postContent | !postTitle | (postTags.length < 2)}
                  style={{ backgroundColor: "hsl(var(--theme-primary))" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-plus h-4 w-4 mr-1"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                  Share Post
                </button>
              </form>
            </div>
          </div>
          <div className="mt-4 space-y-4">
            {post.map((posts) => (
              <>
                {" "}
                <div
                  className="rounded-lg bg-card text-card-foreground glassmorphism-card border-0 shadow-none"
                  key={posts._id}
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-lg">
                            🌻
                          </span>
                        </span>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-gray-100">
                            {posts.author?._id}
                          </p>
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="lucide lucide-clock h-3 w-3"
                            >
                              <circle cx="12" cy="12" r="10"></circle>
                              <polyline points="12 6 12 12 16 14"></polyline>
                            </svg>
                            {new Date(posts.createdAt).toLocaleTimeString([], {
                              year: "numeric",
                              month: "short",
                              day: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </div>
                      </div>
                      <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-flag h-4 w-4"
                        >
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                          <line x1="4" x2="4" y1="22" y2="15"></line>
                        </svg>
                      </button>
                    </div>
                    <p className="text-gray-800 dark:text-gray-200 mb-4">
                      {posts.content}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {posts.tags.map((tag, index) => {
                        return (
                          <div
                            key={index}
                            style={{ textTransform: "capitalize" }}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                          >
                            {tag}
                          </div>
                        );
                      })}
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-4">
                        <button
                          className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                          style={{ color: "hsl(var(--theme-primary))" }}
                          onClick={() => votePost(posts._id, "upvote")}
                        >
                          <span>
                            <FaArrowAltCircleUp />
                          </span>
                          <span className="text-sm">
                            {posts.upvotes.length}
                          </span>
                        </button>
                        <button
                          className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                          style={{ color: "hsl(var(--theme-primary))" }}
                          onClick={() => votePost(posts._id, "downvote")}
                        >
                          <span>
                            <FaArrowAltCircleDown />
                          </span>
                          <span className="text-sm">
                            {posts.downvotes.length}
                          </span>
                        </button>
                        {/* <button
                          className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                          style={{ color: "hsl(var(--theme-primary))" }}
                        >
                          <span>💪</span>
                          <span className="text-sm">5</span>
                        </button>
                        <button
                          className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                          style={{ color: "hsl(var(--theme-primary))" }}
                        >
                          <span>☮️</span>
                          <span className="text-sm">0</span>
                        </button> */}
                      </div>

                      <button
                        //  onClick={()=>setOpenComemnts(!openComments)}
                        onClick={() => toggleReply(posts._id)}
                        className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-message-circle h-4 w-4"
                        >
                          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                        </svg>
                        {posts.comments.length} replies
                      </button>
                    </div>

                    {openReplyId === posts._id && (
                      <>
                        {posts.comments && posts.comments.length > 0 ? (
                          <div className="mt-4 space-y-3 border-t pt-4">
                            {posts.comments.map((comment, index) => {
                              return (
                                <>
                                  <div
                                    className="claymorphism-card p-3 rounded-lg"
                                    key={index}
                                  >
                                    <div className="flex items-start justify-between mb-2">
                                      <div className="flex items-center gap-2">
                                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                                          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm">
                                            🌸
                                          </span>
                                        </span>
                                        <div>
                                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                                            {comment.author}
                                          </p>
                                          <p className="text-xs text-gray-500">
                                            {new Date(
                                              comment.createdAt
                                            ).toLocaleTimeString([], {
                                              year: "numeric",
                                              month: "short",
                                              day: "2-digit",
                                              hour: "2-digit",
                                              minute: "2-digit",
                                            })}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                                      {comment.content}
                                    </p>
                                    {/* <button
                                      onClick={() =>
                                        {
                                        toggleReplyForComment(comment._id)
toggleReplyForInnerPostComment(null)
                                        }
                                      }
                                      className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md text-xs h-6 px-2"
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-reply h-3 w-3 mr-1"
                                      >
                                        <polyline points="9 17 4 12 9 7"></polyline>
                                        <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                                      </svg>
                                      Reply
                                    </button> */}
                                  </div>
                                </>
                              );
                            })}
                            {openInnerComment === posts._id ? (
                              <>
                                <form
                                  onSubmit={(e) => sendComment(e, posts._id)}
                                >
                                  <div className="claymorphism-card p-3 rounded-lg">
                                    <textarea
                                      className="flex w-full rounded-md border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input min-h-16 border-0 text-sm mb-2"
                                      placeholder="Write a supportive comment..."
                                      value={commentContent}
                                      onChange={(e) =>
                                        setCommentContent(e.target.value)
                                      }
                                    ></textarea>
                                    <div className="flex justify-between">
                                      <button
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                        style={{
                                          backgroundColor: "red",
                                          color: "white",
                                        }}
                                        onClick={() =>
                                          toggleReplyForInnerPostComment(
                                            posts._id
                                          )
                                        }
                                      >
                                        Cancel
                                      </button>
                                      <button
                                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                        style={{
                                          backgroundColor:
                                            "hsl(var(--theme-primary))",
                                          color: "white",
                                        }}
                                        type="submit"
                                        disabled={!commentContent}
                                      >
                                        Post Comment
                                      </button>
                                    </div>
                                  </div>
                                </form>
                              </>
                            ) : (
                              <>
                                <div className="flex justify-end">
                                  <button
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                    style={{
                                      backgroundColor:
                                        "hsl(var(--theme-primary))",
                                      color: "white",
                                    }}
                                    onClick={() =>
                                      toggleReplyForInnerPostComment(posts._id)
                                    }
                                  >
                                    Click to comment
                                  </button>
                                </div>{" "}
                              </>
                            )}
                          </div>
                        ) : (
                          <>
                            <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                              No replies yet, Be the first to reply
                            </p>
                            <div className="claymorphism-card p-3 rounded-lg">
                              <form onSubmit={(e) => sendComment(e, posts._id)}>
                                <textarea
                                  className="flex w-full rounded-md border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input min-h-16 border-0 text-sm mb-2"
                                  placeholder="Write a supportive comment..."
                                  value={commentContent}
                                  onChange={(e) =>
                                    setCommentContent(e.target.value)
                                  }
                                ></textarea>
                                <div className="flex justify-end">
                                  <button
                                    type="submit"
                                    className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                                    style={{
                                      backgroundColor:
                                        "hsl(var(--theme-primary))",
                                      color: "white",
                                    }}
                                    disabled={!commentContent}
                                  >
                                    Post Comment
                                  </button>
                                </div>
                              </form>
                            </div>
                          </>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </>
            ))}
            {/* <div className="rounded-lg bg-card text-card-foreground claymorphism-card border-0 shadow-none">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-lg">
                        🌻
                      </span>
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        SunnyDays
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock h-3 w-3"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        2 hours ago
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-flag h-4 w-4"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                  </button>
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  Just wanted to share that I completed my first week of daily
                  meditation. Small steps, but feeling proud!
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    meditation
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    progress
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    self-care
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>❤️</span>
                      <span className="text-sm">12</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>🤗</span>
                      <span className="text-sm">8</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>💪</span>
                      <span className="text-sm">5</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 claymorphism-button flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>☮️</span>
                      <span className="text-sm">0</span>
                    </button>
                  </div>
                  <button
                    //  onClick={()=>setOpenComemnts(!openComments)}
                    className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle h-4 w-4"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    3 replies
                  </button>
                </div>

                <div className="mt-4 space-y-3 border-t pt-4">
                  <div className="claymorphism-card p-3 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm">
                            🌸
                          </span>
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            MindfulHelper
                          </p>
                          <p className="text-xs text-gray-500">1 hour ago</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Try the 5-4-3-2-1 grounding technique: 5 things you see, 4
                      you can touch, 3 you hear, 2 you smell, 1 you taste.
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md text-xs h-6 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-reply h-3 w-3 mr-1"
                      >
                        <polyline points="9 17 4 12 9 7"></polyline>
                        <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                      </svg>
                      Reply
                    </button>
                  </div>
                  <div className="claymorphism-card p-3 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span className="relative flex shrink-0 overflow-hidden rounded-full h-6 w-6">
                          <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-sm">
                            👤
                          </span>
                        </span>
                        <div>
                          <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                            You
                          </p>
                          <p className="text-xs text-gray-500">
                            30 minutes ago
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md h-6 w-6 p-0">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-pen h-3 w-3"
                          >
                            <path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path>
                          </svg>
                        </button>
                        <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md h-6 w-6 p-0 text-red-500">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-trash2 h-3 w-3"
                          >
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                            <line x1="10" x2="10" y1="11" y2="17"></line>
                            <line x1="14" x2="14" y1="11" y2="17"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      Thank you so much! This really helps.
                    </p>
                    <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-md text-xs h-6 px-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-reply h-3 w-3 mr-1"
                      >
                        <polyline points="9 17 4 12 9 7"></polyline>
                        <path d="M20 18v-2a4 4 0 0 0-4-4H4"></path>
                      </svg>
                      Reply
                    </button>
                  </div>
                  <div className="claymorphism-card p-3 rounded-lg">
                    <textarea
                      className="flex w-full rounded-md border-input bg-background px-3 py-2 ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm claymorphism-input min-h-16 border-0 text-sm mb-2"
                      placeholder="Write a supportive comment..."
                    ></textarea>
                    <div className="flex justify-end">
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3"
                        style={{
                          backgroundColor: "hsl(var(--theme-primary))",
                          color: "white",
                        }}
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-lg">
                        🌻
                      </span>
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        SunnyDays
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock h-3 w-3"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        2 hours ago
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-flag h-4 w-4"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                  </button>
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  Just wanted to share that I completed my first week of daily
                  meditation. Small steps, but feeling proud!
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    meditation
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    progress
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    self-care
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>❤️</span>
                      <span className="text-sm">12</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>🤗</span>
                      <span className="text-sm">8</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>💪</span>
                      <span className="text-sm">5</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>☮️</span>
                      <span className="text-sm">0</span>
                    </button>
                  </div>
                  <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle h-4 w-4"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    3 replies
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-lg">
                        🎭
                      </span>
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        Anonymous
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock h-3 w-3"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        4 hours ago
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                          Anonymous
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-flag h-4 w-4"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                  </button>
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  Having a tough day with anxiety. Any tips for grounding
                  techniques that work for you?
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs bg-orange-100 text-orange-800">
                    anxiety
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs bg-orange-100 text-orange-800">
                    support-needed
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 text-xs bg-orange-100 text-orange-800">
                    grounding
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>❤️</span>
                      <span className="text-sm">18</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>🤗</span>
                      <span className="text-sm">15</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>💪</span>
                      <span className="text-sm">3</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>☮️</span>
                      <span className="text-sm">0</span>
                    </button>
                  </div>
                  <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle h-4 w-4"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    7 replies
                  </button>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-muted text-lg">
                        🧘
                      </span>
                    </span>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-gray-100">
                        MindfulJourney
                      </p>
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clock h-3 w-3"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <polyline points="12 6 12 12 16 14"></polyline>
                        </svg>
                        1 day ago
                      </div>
                    </div>
                  </div>
                  <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-flag h-4 w-4"
                    >
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                      <line x1="4" x2="4" y1="22" y2="15"></line>
                    </svg>
                  </button>
                </div>
                <p className="text-gray-800 dark:text-gray-200 mb-4">
                  Reminder: Your feelings are valid, your struggles are real,
                  and you deserve support. Sending love to everyone here. 💙
                </p>
                <div className="flex flex-wrap gap-1 mb-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    encouragement
                  </div>
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs">
                    community
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-4">
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>❤️</span>
                      <span className="text-sm">45</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>🤗</span>
                      <span className="text-sm">32</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>💪</span>
                      <span className="text-sm">18</span>
                    </button>
                    <button
                      className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1"
                      style={{ color: "hsl(var(--theme-primary))" }}
                    >
                      <span>☮️</span>
                      <span className="text-sm">0</span>
                    </button>
                  </div>
                  <button className="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-message-circle h-4 w-4"
                    >
                      <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                    </svg>
                    12 replies
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shield h-5 w-5 text-green-600"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                </svg>
                Community Guidelines
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3 text-sm">
              <div className="p-3 bg-green-50 dark:bg-green-950 rounded-lg">
                <p className="text-green-800">✓ Be kind and supportive</p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-950 rounded-lg">
                <p className="text-blue-800">✓ Respect privacy and anonymity</p>
              </div>
              <div className="p-3 bg-purple-50 rounded-lg">
                <p className="text-purple-800">✓ No medical advice</p>
              </div>
              <div className="p-3 bg-orange-50 rounded-lg">
                <p className="text-orange-800">✓ Report concerning content</p>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="text-2xl font-semibold leading-none tracking-tight">
                Community Stats
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Active Members
                </span>
                <span className="font-medium">1,247</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Posts Today
                </span>
                <span className="font-medium">23</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Support Given
                </span>
                <span className="font-medium">156</span>
              </div>
            </div>
          </div>
          <div className="rounded-lg bg-card text-card-foreground border-0 shadow-lg theme-card glassmorphism-card ">
            <div className="flex flex-col space-y-1.5 p-6">
              <div className="font-semibold tracking-tight text-lg">
                Safety &amp; Moderation
              </div>
            </div>
            <div className="p-6 pt-0 space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                <span>24/7 AI content monitoring</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-blue-500 rounded-full"></div>
                <span>Human moderators online</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 bg-purple-500 rounded-full"></div>
                <span>Crisis intervention available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Community;
