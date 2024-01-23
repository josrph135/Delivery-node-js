const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
  name: String,
  address: String,
  phone: Number,
  bikeDetails: String,
  code: Number,
});

module.exports = mongoose.model("staff", StaffSchema);
