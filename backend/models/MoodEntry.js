import mongoose from "mongoose";
import { Schema } from "mongoose";

const moodEntrySchema = new mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    moodScore: {
      type: Number,
      required: true,
      min: 1,
      max: 10,
    },
    journalText: {
      type: String,
      maxlength: 2000,
    },
    tags: {
      type: [String],
      default: [],
    },
    derivedInsights: {
      sentiment: {
        type: Number,
        min: -1,
        max: 1,
      },
      keywords: [String],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

moodEntrySchema.index({ journalText: "text", tags: "text" });
export default mongoose.model("MoodEntry", moodEntrySchema);
