const mongoose = require("mongoose");

const sportSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  description: {
    type: String
  }
});

module.exports = mongoose.model("Sport", sportSchema);