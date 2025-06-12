import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import { checkEnv } from "./config/env.js";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import testRoutes from "./routes/test-route.js";
import moodRoutes from "./routes/moodRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";
import crisisRoutes from "./routes/crisisRoutes.js";
import communityRoutes from "./routes/communityRoutes.js";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import { createServer } from "http";
import { Server } from "socket.io";
import HuggingFaceService from "./services/HuggingFaceService.js";
import cron from "node-cron";
// import { initChatSocket } from "./controllers/chatController.js";
dotenv.config();

checkEnv();

const app = express();
const PORT = process.env.PORT || 5000;
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CLIENT_URL,
    methods: ["GET", "POST"],
  },
  connectionStateRecovery: {
    maxDisconnectionDuration: 2 * 60 * 1000, // 2 minutes
  },
});
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(cookieParser());

console.log(
  "HF Service State:",
  HuggingFaceService.conversationHistory instanceof Map
);
connectDB();
// initChatSocket(io);
app.use(express.json());

app.get("/verify-password", async (req, res) => {
  const user = await User.findOne({ email: "test@example.com" });
  const match = await bcrypt.compare("securepass123", user.password);
  res.json({ match });
});
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/mood", moodRoutes);
app.use("/api/chat", chatRoutes);
app.use("/api/crisis", crisisRoutes);
app.use("/api/community", communityRoutes);
app.use("/public.crisis-resources", express.static("public/crisis-resources"));
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Database connected");

    // Add cron job AFTER successful DB connection
    cron.schedule("0 0 * * *", async () => {
      // Runs daily at midnight UTC
      try {
        const result = await User.updateMany(
          {},
          {
            $pull: {
              activeSessions: {
                createdAt: {
                  $lt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
                },
              },
            },
          }
        );
        console.log(`Cleaned ${result.modifiedCount} expired sessions`);
      } catch (error) {
        console.error("Session cleanup failed:", error);
      }
    });
  })
  .catch((err) => console.error("DB connection failed:", err));
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
