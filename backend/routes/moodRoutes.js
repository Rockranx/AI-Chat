import express from "express";
import {
  createEntry,
  deleteEntry,
  getEntries,
  getEntry,
  searchEntries,
} from "../controllers/moodController.js";
import { protect } from "../middleware/authMiddleware.js";

import {
  auditLogger,
  suspiciousActivityDetector,
} from "../middleware/security.js";
import { checkMoodEntryOwnership } from "../middleware/ownershipChecks.js";
import { rateLimit } from "../middleware/rateLimit.js";

const router = express.Router();
router.use(auditLogger);
router.use(suspiciousActivityDetector);

router
  .route("/")
  .post(protect, rateLimit("moodEntries"), createEntry)
  .get(protect, getEntries);

router.get("/search", protect, searchEntries);

router
  .route("/:id")
  .get(protect, checkMoodEntryOwnership, getEntry)
  .delete(protect, checkMoodEntryOwnership, deleteEntry);

export default router;
