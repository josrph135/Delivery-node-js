const staffSchema = require("../model/staffModel");

const getStaff = async (req, res) => {
  const staffData = await staffSchema.find({});
  if (!staffData) {
    return res.json({ msg: `no data` });
  }
  res.json(staffData);
};

const getSingleStaff = async (req, res) => {
  const { id } = req.params;
  const selectedUser = await staffSchema.findOne({ _id: id });
  if (!selectedUser) {
    return res.json({ msg: `there is no user with id: ${id}` });
  }
  res.json(selectedUser);
};

const deleteStaff = async (req, res) => {
  const { id } = req.params;
  const deleteUser = await staffSchema.findOneAndDelete({ _id: id });
  if (!deleteUser) {
    return res.json({ msg: `there is no user with id: ${id}` });
  }
  res.json({ msg: `user with id ${id} has been deleted` });
};

const createStaff = async (req, res) => {
  const createStaff = await staffSchema.create(req.body);
  res.json(createStaff);
};

const updateStaff = async (req, res) => {
  const { id } = req.params;
  const updatedUser = await staffSchema.findOneAndUpdate(
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
  deleteStaff,
  createStaff,
  updateStaff,
  getStaff,
  getSingleStaff,
};
