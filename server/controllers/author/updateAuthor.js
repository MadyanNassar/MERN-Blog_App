const Author = require("../../models/authorModel");

async function updateAuthor(req, res) {
  const id = req.params.id;
  try {
    Author.findByIdAndUpdate({ _id: id }, req.body).then((author) => {
      res.status(200).json({ message: "Author updated successfully ..." });
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({ message: "Can't find the Author" });
  }
}

module.exports = updateAuthor;
