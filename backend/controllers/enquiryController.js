const Enquiry = require("../models/Enquiry");

exports.createEnquiry = async (req, res) => {
  const enquiry = new Enquiry(req.body);
  await enquiry.save();
  res.json(enquiry);
};

exports.getEnquiries = async (req, res) => {
  const enquiries = await Enquiry.find();
  res.json(enquiries);
};