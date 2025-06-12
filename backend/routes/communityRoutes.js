import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  addComment,
  createPost,
  deleteComment,
  deletePost,
  flagContent,
  getFlaggedContent,
  getPosts,
  moderatePost,
  searchPosts,
  updatePost,
  votePost,
} from "../controllers/communityController.js";
import { adminCheck, moderatorCheck } from "../middleware/adminCheck.js";
import { rateLimit } from "../middleware/rateLimit.js";
import {
  sanitizeCommentInput,
  sanitizePostInput,
} from "../middleware/sanitizeMessage.js";

import {
  auditLogger,
  suspiciousActivityDetector,
} from "../middleware/security.js";
import { checkPostOwnership } from "../middleware/ownershipChecks.js";
const router = express.Router();
router.use(auditLogger);
router.use(suspiciousActivityDetector);
router
  .route("/posts")
  .get(getPosts)
  .post(protect, sanitizePostInput, rateLimit("communityWrite"), createPost);
router.get("/posts/search", searchPosts);
router.post(
  "/posts/:postId/vote",
  protect,
  rateLimit("communityVote"),
  votePost
);
router.post(
  "/posts/:postId/comments",
  protect,
  sanitizeCommentInput,
  rateLimit("communityWrite"),
  addComment
);
router.patch(
  "/posts/:postId",
  protect,
  checkPostOwnership,
  sanitizePostInput,
  updatePost
);
router.patch("/posts/:postId/moderate", protect, moderatorCheck, moderatePost);
router.delete("/posts/:postId", protect, deletePost);
router.delete("/posts/:postId/comments/:commentId", protect, deleteComment);
router.post(
  "/posts/:postId/flag",
  protect,
  moderatorCheck,
  rateLimit("flagging"),
  flagContent
);
router.post(
  "/posts/:postId/comments/:commentId/flag",
  protect,
  moderatorCheck,
  rateLimit("flagging"),
  flagContent
);
router.get("/flagged-content", protect, adminCheck, getFlaggedContent);


export default router;
