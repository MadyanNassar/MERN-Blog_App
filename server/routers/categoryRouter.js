const express = require("express");
const getCategories = require("../controllers/category/getCategories");
const updateCategory = require("../controllers/category/updateCategory");
const deleteCategory = require("../controllers/category/deleteCategory");

const router = express.Router();

router.get("/", getCategories);
router.put("/:id", updateCategory);
router.delete("/:id", deleteCategory);

module.exports = router;
