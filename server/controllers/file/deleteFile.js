const mongoose = require("mongoose");
const File = require("../../models/fileModel");

async function deleteFile(req, res) {
  const id = mongoose.Types.ObjectId(req.params.id);
  File.findOne({ _id: id })
    .exec()
    .then((file) => {
      if (!file || file === undefined) {
        res.status(404).json({
          message: "Unable to find a file ...",
        });
      } else {
        File.deleteOne({ _id: id }, (err) => {
          if (err) {
            console.log(err);
            res.status(400).json({ message: "Can't delete the file" });
          } else {
            res.status(200).json({
              message: "File deleted successfully ...",
            });
          }
        });
        //  cloudinary.uploader.destroy(file.name);
      }
    });
}

module.exports = deleteFile;
