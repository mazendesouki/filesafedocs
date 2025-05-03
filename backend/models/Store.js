const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  name: String,
  country: String,
  email: String,
  phone: String,
  products: Number,
  downloads: Number
});

module.exports = mongoose.model("Store", StoreSchema);