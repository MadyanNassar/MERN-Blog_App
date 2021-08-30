const Blog = require("../../models/blogModel");

async function getBlogs(req, res) {
  try {
    const blog = await Blog.find()
      .populate("category")
      .populate("cardBanner")
      .populate("banner")
      .populate("author")
      .exec();
    res.status(200).send(blog);
  } catch (error) {
    res.status(500).json({ message: "Can't get Blogs" });
  }
}

module.exports = getBlogs;
