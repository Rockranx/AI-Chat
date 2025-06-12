import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import { type } from "os";

const userSchema = new mongoose.Schema(
  {
    anonymousId: {
      type: String,
      unique: true,
      default: () => Math.random().toString(36).substr(2, 9),
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      trim: true,
      lowercase: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, "Invalid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [8, "Password must be at least 8 characters"],
      select: false,
    },
    role: {
      type: String,
      enum: ["user", "admin", "moderator"],
      default: "user",
      required: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: String,
    emailVerificationExpires: Date,
    activeSessions: [
      {
        token: String,
        createdAt: {
          type: Date,
          default: Date.now,
        },
        deviceInfo: String, // Optional: store user-agent
      },
    ],
    passwordResetToken: String,
    passwordResetExpires: Date,
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
userSchema.virtual("createdAtFormatted").get(function () {
  return this.createdAt.toISOString();
});
userSchema.pre("save", function (next) {
  const now = new Date();
  this.activeSessions = this.activeSessions.filter(
    (session) =>
      new Date(session.createdAt) > new Date(now - 1 * 24 * 60 * 60 * 1000)
  );
  next();
});
userSchema.set('toJSON', {
  virtuals: true,
  transform: function (doc, ret) {
    delete ret.password;
    delete ret.activeSessions;
    delete ret.emailVerificationToken;
    delete ret.emailVerificationExpires;
    delete ret.passwordResetToken;
    delete ret.passwordResetExpires;
    delete ret.__v;
    return ret;
  }
});
export default mongoose.model("User", userSchema);
