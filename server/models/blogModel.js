const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: [{ type: mongoose.Schema.Types.ObjectId, ref: "category" }],
    shortDescription: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: String},
    body: { type: String},
    cardBanner: [{ type: mongoose.Schema.Types.ObjectId, ref: "file" }],
    banner: [{ type: mongoose.Schema.Types.ObjectId, ref: "file" }],
    author: [{ type: mongoose.Schema.Types.ObjectId, ref: "author" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("blog", BlogSchema);
