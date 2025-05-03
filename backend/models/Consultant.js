const mongoose = require("mongoose");

const ConsultantSchema = new mongoose.Schema({
  name: String,
  specialty: String,
  country: String,
  email: String,
  phone: String,
  filesCount: Number,
  categories: [
    {
      name: String,
      count: Number
    }
  ]
});

module.exports = mongoose.model("Consultant", ConsultantSchema);