const express = require("express");
const router = express.Router();
const {
  deleteDelivery,
  createDelivery,
  updateDelivery,
  getDelivery,
  getSingleDelivery,
} = require("./deliveryController");

//get all Vendor
router.get("/", getDelivery);

//get single vendor
router.get("/:id", getSingleDelivery);

//delete vendor
router.delete("/:id", deleteDelivery);

//create vendor
router.post("/", createDelivery);

//update vendor
router.patch("/:id", updateDelivery);

module.exports = router;
