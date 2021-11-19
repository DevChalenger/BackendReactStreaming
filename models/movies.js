const mongoose = require("mongoose");

const moviesSchema = mongoose.Schema({
  _img: { type: String, required: false },
  title: { type: String, required: true },
  synopsis: { type: String, required: false },
  trailer: { type: String, required: false },
});

module.exports = mongoose.model("Movies", moviesSchema);
