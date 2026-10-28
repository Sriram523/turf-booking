const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();


const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/turfbooking")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));



const bookingRoutes = require("./routes/bookingRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const sportRoutes = require("./routes/sportRoutes");
const galleryRoutes = require("./routes/galleryRoutes");
const path = require("path");


app.use("/api/bookings", bookingRoutes);
app.use("/api/enquiries", enquiryRoutes);
app.use("/api/sports", sportRoutes);
app.use("/api/gallery", galleryRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));



app.get("/", (req, res) => {
  res.send("Turf Booking Backend Running");
});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});

