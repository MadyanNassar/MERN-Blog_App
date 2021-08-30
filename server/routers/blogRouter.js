const express = require("express");
const createBlog = require("../controllers//blog/createBlog");
const getBlog = require("../controllers/blog/getBlog");
const getBlogs = require("../controllers/blog/getBlogs");
const updateBlog = require("../controllers/blog/updateBlog");
const deleteBlog = require("../controllers/blog/deleteBlog");

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
