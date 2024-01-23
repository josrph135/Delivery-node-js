const vendorSchema = require("../model/vendorModel");

const getVendor = async (req, res) => {
  const vendorData = await vendorSchema.find({});
  if (!vendorData) {
    return res.json({ msg: `no data` });
  }
  res.json(vendorData);
};

const getSingleVendor = async (req, res) => {
  const { id } = req.params;
  const selectedUser = await vendorSchema.findOne({ _id: id });
  if (!selectedUser) {
    return res.json({ msg: `there is no user with id: ${id}` });
  }
  res.json(selectedUser);
};

const deleteVendor = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await vendorSchema.findOneAndDelete({ _id: id });
  if (!deleteUser) {
    return res.json({ msg: `there is no user with id: ${id}` });
  }
  res.json({ msg: `user with id ${id} has been deleted` });
};

const createVendor = async (req, res) => {
  const createVendor = await vendorSchema.create(req.body);
  res.json(createVendor);
};

const updateVendor = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await vendorSchema.findOneAndUpdate(
    { _id: id },
    req.body,
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.json(updatedUser);
};

module.exports = {
  deleteVendor,
  createVendor,
  updateVendor,
  getVendor,
  getSingleVendor,
};
