const express = require("express");
const router = express.Router();
const {
  deleteStaff,
  createStaff,
  updateStaff,
  getStaff,
  getSingleStaff,
} = require("./staffController");

//get all Vendor
router.get("/", getStaff);

//get single vendor
router.get("/:id", getSingleStaff);

//delete vendor
router.delete("/:id", deleteStaff);

//create vendor
router.post("/", createStaff);

//update vendor
router.patch("/:id", updateStaff);

module.exports = router;
