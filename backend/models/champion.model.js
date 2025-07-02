import mongoose from "mongoose";

const championSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    role: {
      type: [String],
    },
    origin: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Champion", championSchema);
