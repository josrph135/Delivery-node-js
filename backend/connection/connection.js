const mongoose = require("mongoose");

const DbSetup = (url) => {
  return mongoose.connect(url).then(() => console.log("connected to database"));
};

module.exports = DbSetup;
