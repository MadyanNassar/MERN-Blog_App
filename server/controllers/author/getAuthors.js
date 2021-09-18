const Author = require("../../models/authorModel");

async function getAuthors(req, res) {
  try {
    const author = await Author.find().populate("avatar").exec();
    res.status(200).send(author);
  } catch (error) {
    res.status(404).json({ message: "Can't get the Authors" });
  }
}

module.exports = getAuthors;
