import express from "express";
import {
    forgotPassword,
  getAllUsers,
  getCurrentUser,
  getProfile,
  login,
  logout,
  register,
  resendVerification,
  resetPassword,
  updateUserRole,
  verifyEmail,
} from "../controllers/authController.js";
import { preventAuthAccess, protect } from "../middleware/authMiddleware.js";
import { validateRegister, validateResetToken } from "../middleware/validate.js";
import { adminCheck } from "../middleware/adminCheck.js";
// import { authRateLimit } from "../middleware/rateLimit.js";
import {
  auditLogger,
  suspiciousActivityDetector,
} from "../middleware/security.js";
import { rateLimit } from "../middleware/rateLimit.js";
const router = express.Router();
router.use(auditLogger);
router.use(suspiciousActivityDetector);
router.get("/me", protect, getCurrentUser);
router.post("/register", validateRegister, preventAuthAccess, rateLimit('auth'), register);
// router.post("/login", preventAuthAccess, rateLimit('auth'), login);
router.post('/login', 
  preventAuthAccess, 
  rateLimit('auth'),
  async (req, res, next) => {
    try {
      // Force logout any existing sessions
      const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
      if (token) {
        try {
          const decoded = jwt.decode(token);
          if (decoded?.id) {
            await User.findByIdAndUpdate(decoded.id, {
              $pull: { activeSessions: { token } }
            });
          }
        } catch {}
        res.clearCookie('token');
      }
      next();
    } catch (error) {
      next(error);
    }
  },
    (err, req, res, next) => {
    // Handle verification errors specifically
    if (err?.verificationRequired) {
      return res.status(403).json({
        error: "Email verification required",
        solution: "Check your email for verification link"
      });
    }
    next(err);
  },
  login
);
router.get('/verify-email/:token',protect, verifyEmail);
router.post('/resend-verification', protect, resendVerification); 
router.post("/logout", protect, logout);
router.get("/profile", protect, getProfile);
router.get("/admin/users", protect, adminCheck, getAllUsers); 
router.patch("/admin/user/:userId/role", protect, adminCheck, updateUserRole);
router.post('/forgot-password', preventAuthAccess, rateLimit('auth'), forgotPassword)
router.post('/reset-password/:token', preventAuthAccess, rateLimit('passwordReset'), validateResetToken, resetPassword)
export default router;
