import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { adminCheck } from "../middleware/adminCheck.js";
import {
  createCrisisCenter,
  getCrisisCenters,
  getNearbyCenters,
  getCrisisResources,
  updateCrisisCenter,
  deleteCrisisCenter,
  getCrisisCenterById,
} from "../controllers/crisisController.js";
import MapService from "../services/MapService.js";
import { rateLimit } from "../middleware/rateLimit.js";

import {
  auditLogger,
  suspiciousActivityDetector,
} from "../middleware/security.js";
import { sanitizeCrisisCenterInput } from "../middleware/sanitizeMessage.js";
const router = express.Router();
router.use(auditLogger);
router.use(suspiciousActivityDetector);

// Public endpoints
router.get("/centers", getCrisisCenters);
router.get("/centers/nearby", rateLimit("public"), getNearbyCenters);
router.get("/resources", getCrisisResources);

// Protected admin endpoints
router.post(
  "/centers",
  protect,
  adminCheck,
  sanitizeCrisisCenterInput,
  createCrisisCenter
);
router
  .route("/centers/:id")
  .patch(protect, adminCheck, updateCrisisCenter)
  .delete(protect, adminCheck, deleteCrisisCenter)
  .get(getCrisisCenterById);
// New reverse geocoding endpoint
router.get("/geocode/reverse", async (req, res) => {
  try {
    const { lat, lon } = req.query;
    const result = await MapService.reverseGeocode(lat, lon);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Reverse geocoding failed" });
  }
});

export default router;
