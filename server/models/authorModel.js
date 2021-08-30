const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    avatar: [{ type: mongoose.Schema.Types.ObjectId, ref: "file" }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("author", AuthorSchema);
