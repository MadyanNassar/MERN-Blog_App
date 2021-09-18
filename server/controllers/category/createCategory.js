const Category = require("../../models/categoryModel");

async function createCategory(req, res) {
  try {
    const name = req.body.name;
    const date = req.body.date;
    const newCategory = new Category({
      name,
      date,
    });

    const saved = await newCategory.save();
    if (!saved)
      return res.status(400).json({
        message: "Unable to create new category,  please try again",
      });

    res.status(201).json({ message: "Category created successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server Error" });
  }
}

module.exports = createCategory;
