const express = require("express");
const router = express.Router();
const multer = require("multer");

const Gallery = require("../models/Gallery");



const storage = multer.diskStorage({

  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  }

});

const upload = multer({ storage });




router.post("/", upload.single("image"), async (req, res) => {

  try {

    const newImage = new Gallery({
      image: req.file.filename
    });

    await newImage.save();

    res.json({
      message: "Image Uploaded",
      newImage
    });

  } catch (error) {

    res.status(500).json({
      message: "Upload Failed"
    });

  }

});




router.get("/", async (req, res) => {

  try {

    const images = await Gallery.find();

    res.json(images);

  } catch (error) {

    res.status(500).json({
      message: "Error fetching gallery"
    });

  }

});




router.delete("/:id", async (req, res) => {

  try {

    await Gallery.findByIdAndDelete(req.params.id);

    res.json({
      message: "Image Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: "Delete Failed"
    });

  }

});

module.exports = router;