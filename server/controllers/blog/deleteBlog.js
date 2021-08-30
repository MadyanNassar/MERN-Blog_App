const Blog = require("../../models/blogModel");

async function deleteBlog (req, res) {
  const id = req.params.id;
  try {
    Blog.findByIdAndDelete({ _id: id }).then((blog) => {
      res.status(200).json("Blog deleted successfully ...");
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Can't delete Blog", err });
  }
  }

module.exports = deleteBlog;
