import { registerSchema } from "../utils/validators.js";

export const validateRegister = (req, res, next) => {
  try {
    registerSchema.parse(req.body);
    next();
  } catch (err) {
    res.status(400).json({
      errors: err.errors.map(e => ({
        field: e.path[0],
        message: e.message
      }))
    });
  }
};
// Middleware to validate token format
export const validateResetToken = (req, res, next) => {
  const token = req.params.token;
  if (!token || !token.match(/^[a-f0-9]{64}$/)) {
    return res.status(400).json({ error: "Invalid token format" });
  }
  next();
};