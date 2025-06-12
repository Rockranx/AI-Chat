import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import ChatSession from "../models/ChatSession.js";
import {
  createSession,
  deleteMessage,
  getChatHistory,
  getSessionDetails,
  postMessage,
} from "../controllers/chatController.js";
import {
  buildConversationThread,
  conversationContext,
} from "../middleware/conversationMiddleware.js";
import { validateSessionId } from "../utils/validators.js";
import { sanitizeMessage } from "../middleware/sanitizeMessage.js";

import {
  auditLogger,
  suspiciousActivityDetector,
} from "../middleware/security.js";
import { checkChatSessionOwnership } from "../middleware/ownershipChecks.js";
const router = express.Router();
router.use(auditLogger);
router.use(suspiciousActivityDetector);


router.route("/sessions")
.get(protect, getChatHistory)
.post(protect, createSession)
router.post(
  "/sessions/:sessionId/messages",
  protect,
  buildConversationThread,
  sanitizeMessage,
  postMessage
);



// Get specific session details
router.get(
  "/sessions/:sessionId",
  protect,
  checkChatSessionOwnership,
  getSessionDetails
);
// router.delete("/sessions/:sessionId/messages/:messageId",
//   protect,
//   checkChatSessionOwnership,
//   deleteMessage
// );
export default router;
