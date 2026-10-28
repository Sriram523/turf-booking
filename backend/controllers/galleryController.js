const Gallery = require("../models/Gallery");

exports.createGallery = async (req, res) => {
  const gallery = new Gallery(req.body);
  await gallery.save();
  res.json(gallery);
};

exports.getGallery = async (req, res) => {
  const gallery = await Gallery.find();
  res.json(gallery);
};