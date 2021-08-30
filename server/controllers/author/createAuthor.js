const mongoose = require("mongoose");
const Author = require("../../models/authorModel");

async function createAuthor(req, res) {
  try {
    if (req.body.avatar) {
      req.body.avatar = mongoose.Types.ObjectId(req.body.avatar);
    }
    const { name, description, avatar } = req.body;
    const newAuthor = new Author({
        name, description, avatar
    });

    const saved = await newAuthor.save();
    if (!saved)
      return res.status(400).json({
        message: "Unable to create new newAuthor,  please try later!",
      });

    res.status(201).json({ message:  "new Author added successfully ..." });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

module.exports = createAuthor;
