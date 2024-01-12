const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      default: "Untitled Post",
      minlength: 3,
    },
    body: {
      type: String,
      required: true,
      minlength: 10,
    },
    author: {
      type: String,
      required: true,
      minlength: 5,
    },
  },
  { timestamps: true }
);

module.exports = new mongoose.model("Post", PostSchema);
