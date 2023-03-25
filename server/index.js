require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const routes = require("./routes");
const { authentication } = require("./middleware/auth");
const trimBody = require("./middleware/trimBody");

mongoose.set("strictQuery", true);

start();

function start() {
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(authentication());
  app.use(trimBody());

  app.get("/", (req, res) => {
    res.send("Motorhub API running....");
  });

  app.use(routes);

  mongoose.connect("mongodb://localhost:27017/motorhub");

  app.listen(process.env.PORT, () =>
    console.log(`Server listening on port ${process.env.PORT}...`)
  );
}
