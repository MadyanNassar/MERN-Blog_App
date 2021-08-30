const Blog = require("../../models/blogModel");

async function getBlog(req, res) {
  const id = req.params.id;
  try {
    const blog = await Blog.findOne({ _id: id })
      .populate("category")
      .populate("cardBanner")
      .populate("banner") 
      .populate("author");

    if (blog) {
      res.status(200).json({ blog });
    } else {
      res.status(400).json({ message: "Can't find the Blog" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error", err });
  }
}

module.exports = getBlog;
