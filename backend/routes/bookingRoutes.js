const express = require("express");
const router = express.Router();

const Booking = require("../models/Booking");




router.post("/", async (req, res) => {

  try {

    const { date, time } = req.body;

    
    const existing = await Booking.findOne({
      date: date,
      time: time,
      status: "Approved"
    });

    if (existing) {
      return res.status(400).json({
        message: "Slot already booked"
      });
    }

    const booking = new Booking(req.body);

    await booking.save();

    res.status(201).json({
      message: "Booking Created",
      booking
    });

  } catch (error) {

    res.status(500).json({
      message: "Booking Failed"
    });

  }

});




router.get("/", async (req, res) => {

  try {

    const bookings = await Booking.find();

    res.json(bookings);

  } catch (error) {

    res.status(500).json({
      message: "Error Fetching Bookings"
    });

  }

});




router.put("/:id", async (req, res) => {

  try {

    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        message: "Booking not found"
      });
    }

    
    const existingApproved = await Booking.findOne({
      date: booking.date,
      time: booking.time,
      status: "Approved"
    });

    if (existingApproved) {
      return res.status(400).json({
        message: "This slot already approved"
      });
    }

    booking.status = "Approved";

    await booking.save();

    res.json({
      message: "Booking Approved",
      booking
    });

  } catch (error) {

    res.status(500).json({
      message: "Approve Failed"
    });

  }

});




router.delete("/:id", async (req, res) => {

  try {

    await Booking.findByIdAndDelete(req.params.id);

    res.json({
      message: "Booking Deleted"
    });

  } catch (error) {

    res.status(500).json({
      message: "Delete Failed"
    });

  }

});


module.exports = router;