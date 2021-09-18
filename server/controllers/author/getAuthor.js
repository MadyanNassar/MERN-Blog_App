const Author = require("../../models/authorModel");

async function getAuthor(req, res) {
  const id = req.params.id;

  try {
    const author = await Author.findOne({ _id: id }).populate("avatar");
    if (author) {
      res.status(200).json({ author });
    } else {
      res.status(404).json({ message: "Can't find the Author" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = getAuthor;
