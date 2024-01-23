const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DeliverySchema = new Schema({
  createdAt: String,
  rider: String,
  vendor: String,
  item: String,
  reciever: String,
  sender: String,
  payment: String,
  amount: Number,
  RID: Number,
});

module.exports = mongoose.model("delivery", DeliverySchema);
