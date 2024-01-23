const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VendorSchema = new Schema({
  vendor: String,
  address: String,
  phone: String,
});

module.exports = mongoose.model("vendor", VendorSchema);
