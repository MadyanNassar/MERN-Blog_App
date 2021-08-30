const Category = require("../../models/categoryModel");

async function updateCategory(req, res) {
  try {
    const options = { new: true };
    const update = await Category.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      options
    );
    res.status(200).send(update);
  } catch (error) {
    res.status(500).json({ message:"Can't update Category" });
  }
}

module.exports = updateCategory;
