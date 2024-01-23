const express = require("express");
const router = express.Router();
const {
  deleteVendor,
  createVendor,
  updateVendor,
  getVendor,
  getSingleVendor,
} = require("./routeController");

//get all Vendor
router.get("/", getVendor);

//get single vendor
router.get("/:id", getSingleVendor);

//delete vendor
router.delete("/:id", deleteVendor);

//create vendor
router.post("/", createVendor);

//update vendor
router.patch("/:id", updateVendor);

module.exports = router;
