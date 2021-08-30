require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
 const router = require ('./routers')
const bodyParser = require("body-parser");
const { loadDb } = require('./db');

loadDb()
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json({ limit: "50mb" }));
// app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Allow-Control-Allow-Headers", "*");
  next();
});

app.use('/api', router)

app.get("*", (req, res) => {
  try {
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
