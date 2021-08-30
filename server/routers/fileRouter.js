const express = require("express");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const multer = require("multer");
const createFile = require("../controllers/file/createFile");
const getFile = require("../controllers/file/getFile");
const getFiles = require("../controllers/file/getFiles");
const deleteFile = require("../controllers/file/deleteFile");
const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "blog-media",
    allowedFormats: ["jpg", "png"],
    public_id: (req, file) => file.filename,
  },
});

const parser = multer({ storage: storage });

router.post("/", parser.single("file"), createFile);

router.get("/", getFiles);

router.get("/:id", getFile);

router.delete("/:id", deleteFile);

module.exports = router;
