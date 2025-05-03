const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  phone: String,
  country: String,
  section: String,
  plan: String,
  expires: Date,
  filesCount: Number
});

module.exports = mongoose.model("User", UserSchema);