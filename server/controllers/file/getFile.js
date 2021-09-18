const mongoose = require("mongoose");
const File = require("../../models/fileModel");

async function getFile(req, res) {
  const id = mongoose.Types.ObjectId(req.params.id);
  try {
    File.find({ _id: id })
      .select({
        name: 1,
        originalName: 1,
        filePath: 1,
        mimeType: 1,
        size: 1,
      })
      .exec()
      .then((file) => res.status(200).send(file[0]));
  } catch (err) {
    console.log(err);
    res.status(404).send({ message: "Can't find the file" });
  }
}

module.exports = getFile;
