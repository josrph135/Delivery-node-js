const DeliverySchema = require("../model/DeliveryModel");

const getDelivery = async (req, res) => {
  const vendorData = await DeliverySchema.find({});
  if (!vendorData) {
    return res.json({ msg: `no data` });
  }
  res.json(vendorData);
};

const getSingleDelivery = async (req, res) => {
  const { id } = req.params;
  const selectedUser = await DeliverySchema.findOne({ _id: id });
  if (!selectedUser) {
    return res.json({ msg: `there is no user with id: ${id}` });
  }
  res.json(selectedUser);
};

const deleteDelivery = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await DeliverySchema.findOneAndDelete({ _id: id });
  if (!deleteUser) {
    return res.json({ msg: `there is no user with id: ${id}` });
  }
  res.json({ msg: `user with id ${id} has been deleted` });
};

const createDelivery = async (req, res) => {
  const createDelivery = await DeliverySchema.create(req.body);
  res.json(createDelivery);
};

const updateDelivery = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await DeliverySchema.findOneAndUpdate(
    { _id: id },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(updatedUser);
};

module.exports = {
  deleteDelivery,
  createDelivery,
  updateDelivery,
  getDelivery,
  getSingleDelivery,
};
