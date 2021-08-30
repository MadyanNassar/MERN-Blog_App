const Blog = require("../../models/blogModel");

async function updateBlog(req, res) {
  const id = req.params.id;
  try {
    Blog.findByIdAndUpdate({ _id: id }, req.body).then((blog) => {
      res.status(200).json("Blog updated successfully ...");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Can't update Blog", err });
  }
}

module.exports = updateBlog;
