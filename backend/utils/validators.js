import { z } from "zod";
export const registerSchema = z.object({
  email: z.string().email({ message: "Valid email required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
  role: z.string().optional(),
});

export const moodEntrySchema = z.object({
  moodScore: z.number().min(1).max(10),
  journalText: z.string().min(10),
});

export const validateMessageLength = (message) => {
  const MAX_LENGTH = 600;
  return (
    typeof message === "string" &&
    message.length > 0 &&
    message.length <= MAX_LENGTH
  );
};
export const validateSessionId = (id) => {
  return /^[0-9a-fA-F]{24}$/.test(id);
};

export const validateMessageContent = (message) => {
  return (
    typeof message === "string" &&
    message.trim().length > 0 &&
    message.length <= 500
  );
};

// Add to existing validators
export const postSchema = z.object({
  title: z.string().min(10).max(120),
  content: z.string().min(50).max(2000),
  tags: z
    .array(
      z.enum(["anxiety", "depression", "self-care", "resources", "general"])
    )
    .optional(),
});

export const commentSchema = z.object({
  content: z.string().min(5).max(500),
});
