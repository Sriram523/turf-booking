const express = require("express");
const Enquiry = require("../models/Enquiry");

const router = express.Router();

router.post("/", async (req, res) => {
  const newEnquiry = new Enquiry(req.body);
  await newEnquiry.save();
  res.json({ message: "Enquiry saved" });
});

router.get("/", async (req, res) => {
  const enquiries = await Enquiry.find().sort({ createdAt: -1 });
  res.json(enquiries);
});

router.delete("/:id", async (req, res) => {
  await Enquiry.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
});

module.exports = router; 