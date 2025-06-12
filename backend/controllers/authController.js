import jwt from "jsonwebtoken";
import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { error } from "console";
import logger from "../utils/logger.js";
// import CryptoJS from "crypto-js";
import crypto from "crypto";
import { generateVerificationToken, sendVerificationEmail } from "../utils/verification.js";
import { generateResetToken, sendPasswordResetEmail } from "../utils/resetpassEmail.js";
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      anonymousId: user.anonymousId, // Add this
      email: user.email,
      role: user.role,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "1d",
    }
  );
};



export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate password
    if (!password || password.length < 8) {
      return res.status(400).json({ error: "Password must be 8+ characters" });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exist" });
    }
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/;
    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        error:
          "Password must contain uppercase, lowercase, number, and special characters (@$!%*?&+)",
      });
    }
    // Single hash generation
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      email: email.toLowerCase().trim(),
      password: hashedPassword, // Store the single hash
      role: "user",
      emailVerificationToken: generateVerificationToken(),
      emailVerificationExpires: Date.now() + 24 * 60 * 60 * 1000 // 24 hours
    });

    // Immediate verification
    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Registration verification:", isMatch); // Should be true

    // Auto-login after registration

    await user.save();
    // res.cookie("token", token, {
    //   httpOnly: true,
    //   secure: process.env.NODE_ENV === "production",
    //   sameSite: "strict",
    //   maxAge: 7 * 24 * 60 * 60 * 1000,
    // });
    // Send verification email
    const emailResult = sendVerificationEmail(user.email, user.emailVerificationToken);
     if (!emailResult.success) {
      console.error('Email sending failed:', emailResult.error);
    }
    res.status(201).json({
      message: "Registration successful! Check your email to verify your account",
      id: user.anonymousId,
      email: user.email,

    });
        // res.redirect(`${process.env.CLIENT_URL}/dashboard?success=true`);
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: error.message });
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email: email.toLowerCase().trim(),
    }).select("+password");

    if (!user) {
      console.log(`Login attempt for non-existent user: ${email}`);
      return res.status(401).json({ error: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password.trim(), user.password);

    if (!isMatch) {
      console.log(`Failed login attempt for: ${user.email}`);
      return res.status(401).json({ error: "Invalid credentials" });
    }
     // Add verification check
    if (!user.isVerified) {
      return res.status(403).json({ 
        error: "Please verify your email address before logging in",
        verificationRequired: true
      });
    }
    const token = generateToken(user._id);
    await User.findByIdAndUpdate(user._id, {
      $push: {
        activeSessions: {
          token,
          createdAt: new Date(),
        },
      },
    });
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });
    res.json({
      id: user.anonymousId,
      email: user.email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password -_id -__v");

    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: "Profile fetch failed" });
  }
};

export const logout = async (req, res) => {
  try {
    // Handle expired tokens gracefully
    if (req.tokenExpired) {
      console.warn(
        "Processing logout with expired token for user:",
        req.user.id
      );
    }

    await User.findByIdAndUpdate(req.user.id, {
      $pull: {
        activeSessions: { token: req.token },
      },
    });

    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({ message: "Successfully logged out" });
  } catch (error) {
    console.error("Logout error:", error);

    // Force clear cookie on error
    res.clearCookie("token");

    res.status(500).json({
      error: "Logout failed",
      details: error.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-pasword -__v").lean();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUserRole = async (req, res) => {
  try {
    const { userId } = req.params;
    const { newRole } = req.body;

    if (!["user", "moderator", "admin"].includes(newRole)) {
      return res.status(400).json({ error: "Invalid role" });
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      { role: newRole },
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const forgotPassword = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      // Don't reveal if user exists or not
      return res.json({ 
        status: "success", 
        message: "If an account exists, you'll receive a password reset email" 
      });
    }

    // Generate and hash token
    const resetToken = generateResetToken();
    const hashedToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    // Set expiration to 10 minutes
    user.passwordResetToken = hashedToken;
    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;
    await user.save();

    // Send password reset email
    const emailResult = await sendPasswordResetEmail(user.email, resetToken);
    
    if (!emailResult.success) {
      console.error('Password reset email failed:', emailResult.error);
    }

    res.json({
      status: "success",
      message: "Password reset email sent"
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const resetPassword = async (req, res) => {
  try {
    const incomingToken = req.params.token;
    const hashedIncomingToken = crypto
      .createHash("sha256")
      .update(incomingToken)
      .digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedIncomingToken,
      passwordResetExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        error: "Invalid or expired token" 
      });
    }

    // Validate password
    const passwordRegex = 
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&+])[A-Za-z\d@$!%*?&+]{8,}$/;
    
    if (!passwordRegex.test(req.body.password)) {
      return res.status(400).json({
        error: "Password must contain uppercase, lowercase, number, and special characters"
      });
    }

    // Update password
    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save();

    // Invalidate all active sessions
    user.activeSessions = [];
    await user.save();

    res.json({ 
      status: "success", 
      message: "Password updated successfully" 
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
export const getCurrentUser = async (req, res) => {
  try {
    // User is already attached to req by protect middleware
    if (!req.user) {
      return res.status(401).json({ error: "Not authenticated" });
    }

    // Fetch fresh user data from database
    const user = await User.findById(req.user.id)
      .select("-password -activeSessions -__v")
      .lean();

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Return user data with token metadata
    res.json({
      id: req.user.id,
      anonymousId: req.user.anonymousId, // Make sure this exists
      email: req.user.email,
      role: req.user.role,
      isVerified: req.user.isVerified,
      createdAt: req.user.createdAt,
      session: {
        expiresAt: req.user.exp ? new Date(req.user.exp * 1000) : null,
        issuedAt: req.user.iat ? new Date(req.user.iat * 1000) : null,
      },
    });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};
export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.params;
    
    const user = await User.findOne({
      emailVerificationToken: token,
      emailVerificationExpires: { $gt: Date.now() }
    });

    if (!user) {
      return res.status(400).json({ 
        error: 'Invalid or expired verification token' 
      });
    }

    user.isVerified = true;
    user.emailVerificationToken = undefined;
    user.emailVerificationExpires = undefined;
    await user.save();

    // Redirect to frontend success page
    // res.redirect(`${process.env.CLIENT_URL}/email-verified?success=true`);
  } catch (error) {
    // Redirect to frontend error page
    // res.redirect(`${process.env.CLIENT_URL}/email-verified?success=false`);
  }
};
export const resendVerification = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    
    if (user.isVerified) {
      return res.status(400).json({ error: 'Email already verified' });
    }

    // Generate new token
    user.emailVerificationToken = generateVerificationToken();
    user.emailVerificationExpires = Date.now() + 24 * 60 * 60 * 1000;
    await user.save();
    
   // Send email
    const emailResult = await sendVerificationEmail(user.email, user.emailVerificationToken);
    
    if (!emailResult.success) {
      console.error('Resend email failed:', emailResult.error);
    }

    res.json({ 
      message: 'Verification email resent',
      verificationToken: process.env.NODE_ENV !== 'production' ? user.emailVerificationToken : undefined
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to resend verification' });
  }
};