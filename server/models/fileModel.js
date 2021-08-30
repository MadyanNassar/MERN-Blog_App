const mongoose = require("mongoose");

const FileSchema = new mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String },
    originalName: { type: String},
    dirPath: { type: String},
    filePath: { type: String, unique: true, required: true },
    fileSize: { type: Number },
    createdAt: { type: Date },
  },
  { timestamps: true }
);

module.exports = mongoose.model("file", FileSchema);
