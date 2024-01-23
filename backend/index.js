require("dotenv").config();
const express = require("express");
const app = express();
const vendorRouter = require("./vendorRoute/vendor");
const staffRouter = require("./staffRoute/staff");
const deliveryRouter = require("./deliveryRoute/delivery");
const connectDB = require("./connection/connection");
const cors = require("cors");

//middleware
app.use(cors());
app.use(express.json());
app.use("/api/v1/vendor", vendorRouter);
app.use("/api/v1/staff", staffRouter);
app.use("/api/v1/delivery", deliveryRouter);

app.all("*", (req, res) => {
  res.send(`<h3>Unknown</h3>`);
});
const port = process.env.PORT || 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`server is running on port ${port}`));
  } catch (error) {}
};

start();
