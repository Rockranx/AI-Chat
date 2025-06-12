import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const protect = async (req, res, next) => {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    
    if (!token) {
      return res.status(401).json({ error: "Not authorized" });
    }

    let decoded;
    let tokenExpired = false;

    try {
      decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        decoded = jwt.decode(token);
        tokenExpired = true;
      } else {
        throw error;
      }
    }

    if (!decoded) {
      return res.status(401).json({ error: "Invalid token" });
    }

    const user = await User.findById(decoded.id).select('+activeSessions');
    
    if (!user) {
      return res.status(401).json({ error: "Invalid user" });
    }
    
    // Check session validity
    const validSession = user.activeSessions.some(session => 
      session.token === token
    );

    if (!validSession) {
      return res.status(401).json({ error: "Invalid session" });
    }
   // Add verification check
    if (!user.isVerified) {
      return res.status(403).json({ 
        error: "Please verify your email address to access this resource",
        verificationRequired: true
      });
    }
    // Add ALL JWT claims to req.user
    req.user = {
      ...decoded,  // This includes id, iat, exp, etc.
      email: user.email,
      role: user.role,
      isVerified: user.isVerified,
      anonymousId: user.anonymousId,
      createdAt: user.createdAt,
    };
    
    req.token = token;
    req.tokenExpired = tokenExpired;
    
    next();
  } catch (error) {
    res.clearCookie("token");
    res.status(401).json({ error: "Authorization failed" });
  }
};
export const preventAuthAccess = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
  
  if (!token) return next();

  try {
    // Check if token is valid or expired
    jwt.verify(token, process.env.JWT_SECRET);
    
    return res.status(403).json({ 
      error: 'Already authenticated',
      solution: 'Log out first to access this endpoint'
    });
  } catch (error) {
    if (error.name === 'TokenExpiredError') {
      // Allow access for expired tokens
      return next();
    }
    // Invalid tokens - clear and proceed
    res.clearCookie('token');
    next();
  }
};
export const passwordChangeCheck = async (req, res, next) => {
  try {
    const user = await User.findById(req.user.id).select("+passwordChangedAt");

    if (user.passwordChangedAt > new Date(req.user.iat * 1000)) {
      return res.status(401).json({
        error: "Password changed recently - please log in again",
      });
    }

    next();
  } catch (error) {
    res.status(500).json({ error: "Security check failed" });
  }
};
