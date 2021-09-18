const Blog = require("../../models/blogModel");

async function getBlogs(req, res) {
  try {
    const blog = await Blog.find()
      .populate("category")
      .populate("cardBanner")
      .populate("banner")
      .populate({
        path: "author",
        populate: {
          path: "avatar",
          model: "file",
        },
      })
      .exec();
    res.status(200).send(blog);
  } catch (err) {
    res.status(404).json({ message: "Can't get Blogs" });
  }
}

module.exports = getBlogs;
