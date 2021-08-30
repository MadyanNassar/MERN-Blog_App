const express = require("express");
const createAuthor = require("../controllers//author/createAuthor");
const getAuthor = require("../controllers/author/getAuthor");
const getAuthors = require("../controllers/author/getAuthors");
const updateAuthor = require("../controllers/author/updateAuthor");
const deleteAuthor = require("../controllers/author/deleteAuthor");

const router = express.Router();

router.post("/", createAuthor);

router.get("/", getAuthors);

router.get("/:id", getAuthor);

router.put("/:id", updateAuthor);

router.delete("/:id", deleteAuthor)

module.exports = router;
