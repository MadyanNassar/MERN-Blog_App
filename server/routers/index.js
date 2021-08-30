const express = require("express");

const router = express.Router();

const blogRouter = require("./blogRouter");
const categoryRouter = require("./categoryRouter");
const authorRouter = require("./authorRouter");
const fileRouter = require("./fileRouter"); 

router.use("/blog", blogRouter);
router.use("/category", categoryRouter);
router.use("/author", authorRouter);
router.use("/file", fileRouter);

module.exports = router;
