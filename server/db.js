const mongoose = require("mongoose");

async function loadDb() {
  try {
    const db = await mongoose.connect(process.env.DB_URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });

    console.log("Db connected");
    return db;
  } catch (err) {
    console.log("Db error", err);
  }
}

exports.loadDb = loadDb;
