const mongoose = require("mongoose");
const Blog = require("../../models/blogModel");
const Author = require("../../models/authorModel");
const File = require("../../models/fileModel");
const Category = require("../../models/categoryModel");

async function createBlog(req, res) {
  const {
    title,
    category,
    shortDescription,
    description,
    date,
    body,
    cardBanner,
    banner,
    name,
    avatarID,
    bannerID,
    cardID,
    avatar,
    categoryName,
  } = req.body;

  try {
    const newBlog = new Blog({
      title,
      category,
      shortDescription,
      description,
      date,
      body,
      cardBanner,
      banner,
    });
    const bannerImg = await File.findById(bannerID);
    const avatarImg = await File.findById(avatarID);
    const cardImg = await File.findById(cardID);

    const newAuthor = (await Author.findOne({ name: name }))
      ? await Author.findOne({ name: name })
      : await new Author({ name: name, avatar: avatarImg }).save();

    const newCategory = (await Category.findOne({ name: categoryName }))
      ? await Category.findOne({ name: categoryName })
      : await new Category({ name: categoryName }).save();

    await newBlog.save();

    await Blog.updateOne(
      newBlog,
      {
        $push: {
          banner: bannerImg,
          cardBanner: cardImg,
          author: newAuthor,
          category: newCategory,
        },
      },
      { new: true }
    ).exec();
    await newBlog
      .save()
      .then(() =>
        res.status(201).json({ message: "Blog Added successfully ..." })
      );
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Can't add the blog ..." });
  }
}

module.exports = createBlog;
