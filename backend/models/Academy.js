const mongoose = require("mongoose");

const AcademySchema = new mongoose.Schema({
  name: String,
  type: String,
  country: String,
  phone: String,
  email: String,
  filesCount: Number,
  categories: [
    {
      name: String,
      count: Number
    }
  ]
});

module.exports = mongoose.model("Academy", AcademySchema);