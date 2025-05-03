const mongoose = require("mongoose");

const CompanySchema = new mongoose.Schema({
  name: String,
  field: String,
  employees: Number,
  country: String,
  phone: String,
  crNumber: String,
  taxNumber: String,
  filesCount: Number,
  projects: [
    {
      name: String,
      documents: Number,
      approvals: Number,
      blueprints: Number
    }
  ]
});

module.exports = mongoose.model("Company", CompanySchema);