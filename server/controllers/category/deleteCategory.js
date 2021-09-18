const Category = require("../../models/categoryModel");

async function deleteCategory(req, res) {
  try {
    await Category.findByIdAndDelete({ _id: req.params.id });
    res.status(200).json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(404).json({ message: "Category not found ..." });
  }
}

module.exports = deleteCategory;
