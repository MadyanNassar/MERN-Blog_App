const File = require("../../models/fileModel");

async function getFiles(req, res) {
  try {
    File.find({})
      .select({
        name:1,
        originalName: 1,
        filePath: 1,
        mimeType: 1,
        size: 1,
      })
      .exec()
      .then((file) => res.status(200).send(file));
  } catch (err) {
    console.log(err);
    res.status(500).send({message: "Can't find the file"});
  }
}

module.exports = getFiles;
