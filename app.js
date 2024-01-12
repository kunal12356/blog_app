require("express-async-errors");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

// routing
const blogRoutes = require("./routes/blog");

const app = express();
app.use(express.json());

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

app.use("/api/posts", blogRoutes);

const port = process.env.PORT || 8000;

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log("Speak for the app is listening");
    });
  } catch (err) {
    console.log(err);
  }
};
start();

module.exports = app;
