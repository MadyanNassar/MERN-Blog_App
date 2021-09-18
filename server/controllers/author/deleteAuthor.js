const Author = require("../../models/authorModel");

async function deleteAuthor(req, res) {
  const id = req.params.id;
  try {
    await Author.findByIdAndDelete({ _id: id });
    res.status(200).json({ message: "Author deleted successfully ..." });
  } catch (error) {
    res.status(404).json({ message: "Author not found ..." });
  }
}

module.exports = deleteAuthor;
