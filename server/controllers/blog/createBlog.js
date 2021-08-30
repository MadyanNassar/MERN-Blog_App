const mongoose = require("mongoose");
const Blog = require("../../models/blogModel");

async function createBlog(req, res) {
  if (req.body.banner) {
    req.body.banner = mongoose.Types.ObjectId(req.body.banner);
  }
  if (req.body.cardBanner) {
    req.body.cardBanner = mongoose.Types.ObjectId(req.body.cardBanner);
  }
  const {
    title,
    category,
    shortDescription,
    description,
    date,
    body,
    cardBanner,
    banner,
    author,
  } = req.body;

  const newBlog = new Blog({
    title,
    category,
    shortDescription,
    description,
    date,
    body,
    cardBanner,
    banner,
    author,
  });

  newBlog
    .save()
    .then((blog) => {
      res.status(201).json({ message: "Blog Added successfully ..." });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "Can't add the blog ..." });
    });
}

module.exports = createBlog;
