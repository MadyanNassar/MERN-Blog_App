const mongoose = require("mongoose");
const path = require("path");
const File = require("../../models/fileModel");

async function createFile(req, res) {
  const file = req.file;
  const newFile = new File({
    _id: new mongoose.Types.ObjectId(),
    originalName: file.originalName,
    MimeType: file.mimeType,
    filePath: file.path,
    fileSize: file.size,
    name: file.path.match(/([^\/]+)(?=\.\w+$)/)[0],
    createdAt: new Date().toISOString(),
  });
  try {
    await newFile.save().then((file) =>
      res.status(201).send({
        id: file._id,
        name: file.name,
      })
    );
  } catch (err) {
    res
      .status(400)
      .json({ message: "Can't add the file ...", err });
  }
}

module.exports = createFile;
