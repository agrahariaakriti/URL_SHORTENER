import mongoose from "mongoose";

const longUrlSchema = new mongoose.Schema(
  {
    longUrl: {
      type: String,
      require: true,
    },
    shortCode: {
      type: String,
      require: true,
    },
    shortUrl: {
      type: String,
      require: true,
    },
    visitedHistory: [{ timestamp: { type: Number } }],
  },
  { timestamps: true },
);

export const longURL = mongoose.model("longUrl", longUrlSchema);
