const Blog = require("../../models/blogModel");

async function getBlog(req, res) {
  const id = req.params.id;
  try {
    const blog = await Blog.findOne({ _id: id })
      .populate("category")
      .populate("cardBanner")
      .populate("banner")
      .populate({
        path: "author",
        populate: {
          path: "avatar",
          model: "file",
        },
      });

    if (blog) {
      res.status(200).json({ blog });
    } else {
      res.status(404).json({ message: "Can't find the Blog" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = getBlog;
