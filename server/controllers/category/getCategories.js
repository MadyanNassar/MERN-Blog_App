const Category = require("../../models/categoryModel");

async function getCategories(req, res) {
  try {
    const categories = await Category.find().exec();
    res.status(200).send(categories);
  } catch (error) {
    res.status(404).json({ message: "Can't get Categories" });
  }
}

module.exports = getCategories;
