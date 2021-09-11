const Blog = require("../../models/blogModel");
const File = require("../../models/fileModel");
const Author = require("../../models/authorModel");
const Category = require("../../models/categoryModel");

async function updateBlog(req, res) {
  const id = req.params.id;

  const {
    title,
    category,
    shortDescription,
    description,
    date,
    category_id,
    name,
    avatarID,
    bannerID,
    cardID,
    author_id,
    categoryName,
  } = req.body;

  const avatarImg = await File.findById(avatarID);
  const newAuthor = await Author.findOneAndUpdate(
    { _id: author_id },
    { name: name, avatar: avatarImg }
  );
  const newCategory = await Category.findOneAndUpdate(
    { _id: category_id },
    { name: categoryName }
  );
  const bannerImg = await File.findById(bannerID);
  const cardImg = await File.findById(cardID);

  const newBlog = {
    title,
    category,
    shortDescription,
    description,
    date,
    category: [newCategory],
    author: [newAuthor],
    cardBanner: [cardImg],
    banner: [bannerImg],
  };

  try {
    Blog.findByIdAndUpdate({ _id: id }, newBlog).then((blog) => {
      res.status(200).json("Blog updated successfully ...");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Can't update Blog", err });
  }
}

module.exports = updateBlog;
