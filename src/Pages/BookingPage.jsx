import React, { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import ShareIcon from "@mui/icons-material/Share";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import img1 from "../assets/images/sports1.png";
import img2 from "../assets/images/sports2.png";
import img3 from "../assets/images/sports4.png";
import img4 from "../assets/images/sports5.png";
import img5 from "../assets/images/sport6.png";
import img6 from "../assets/images/sport7.png";

const BookingPage = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const [current, setCurrent] = useState(0);
  const [selectedSport, setSelectedSport] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  
  const priceList = {
    cricket: "INR 2000 / hour",
    football: "INR 2500 / hour",
    basketball: "INR 1500 / hour",
    badminton: "INR 600 / hour",
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleOpen = (sport) => {
    setSelectedSport(sport);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedSport("");
  };

  const pricingData = {
    Football: {
      "7 a side": [
        { day: "Monday - Friday", price: "2800", time: "06:00 AM - 12:00 AM" },
        { day: "Saturday - Sunday", price: "3000", time: "06:00 AM - 12:00 AM" },
        { day: "Holiday(s)", price: "3000", time: "06:00 AM - 12:00 AM" },
      ],
      "5 a side": [
        { day: "Monday - Friday", price: "1700", time: "06:00 AM - 12:00 AM" },
        { day: "Weekend", price: "2000", time: "06:00 AM - 12:00 AM" },
      ],
    },

    Cricket: {
      "Box Cricket": [
        { day: "Monday - Friday", price: "2500", time: "06:00 AM - 11:00 PM" },
        { day: "Weekend", price: "3000", time: "06:00 AM - 11:00 PM" },
      ],
    },

    Basketball: {
      "Full Court": [
        { day: "Monday - Friday", price: "1500", time: "07:00 AM - 10:00 PM" },
        { day: "Weekend", price: "1800", time: "07:00 AM - 10:00 PM" },
      ],
    },

    Badminton: {
      "Per Court": [
        { day: "Monday - Friday", price: "500", time: "06:00 AM - 10:00 PM" },
        { day: "Weekend", price: "700", time: "06:00 AM - 10:00 PM" },
      ],
    },
  };

  const navigate = useNavigate();

  
  const handleBooking = async () => {
  if (!selectedDate || !selectedTime) {
    alert("Please select date and time");
    return;
  }

  const bookingData = {
    name: "User",
    sport: selectedSport || "Cricket",
    date: selectedDate,
    time: selectedTime,
    duration: 1,
    tickets: 1,
    price: 500,
    status: "Approved" 
  };

  try {
    await axios.post("http://localhost:5000/api/bookings", bookingData);

    alert("Booking Successful");

    navigate("/booking-summary", { state: bookingData });
  } catch (error) {
    if (error.response?.data?.message === "Slot already booked") {
      alert("This slot is already booked. Please choose another time.");
    } else {
      console.log(error);
      alert("Booking Failed");
    }
  }
};
  return (
    <section className="bg-gray-50 min-h-screen pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">

        
        
        <div className="text-sm font-medium text-gray-600 flex items-center gap-2 mb-4">

          <Link to="/" className="text-green-600 hover:underline">
            Home
          </Link>

          <span className="text-gray-400">›</span>

          <span className="text-gray-800">Booking</span>

        </div>


        <div className="mb-8">

          <h1 className="text-4xl font-bold text-green-900 mb-2">
            Mahix Turf
          </h1>



          <div className="flex flex-wrap items-center gap-4 text-gray-700">
            <span className="flex items-center gap-1">
              <LocationOnIcon className="text-green-600" />
              Gandhipuram
            </span>

            <span className="flex items-center gap-1 font-semibold">
              <StarIcon className="text-yellow-500" />
              4.2
            </span>

            <span>(24 ratings)</span>

            <button className="text-green-700 font-medium hover:underline">
              Rate Venue
            </button>
          </div>
        </div>

      
        <div className="grid lg:grid-cols-3 gap-8">

          
          <div className="lg:col-span-2">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={images[current]}
                alt="venue"
                className="w-full h-[450px] object-cover transition duration-500"
              />

              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                ❮
              </button>

              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 -translate-y-1/2 bg-white p-2 rounded-full shadow"
              >
                ❯
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <div
                    key={index}
                    className={`h-3 w-3 rounded-full ${index === current ? "bg-green-600" : "bg-white"
                      }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-green-100">
              <div className="mb-4 pb-3 border-b border-gray-200">
                <p className="text-sm text-gray-500">Timing</p>
                <p className="text-green-700 font-semibold">
                  6 AM – 12 AM
                </p>
              </div>

              <h2 className="text-2xl font-bold text-green-900 mb-6">
                Book Your Slot
              </h2>

              <div className="mb-4">
                <label className="flex items-center gap-2 mb-2 font-medium">
                  <CalendarMonthIcon className="text-green-600" />
                  Select Date
                </label>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>

              <div className="mb-6">
                <label className="flex items-center gap-2 mb-2 font-medium">
                  <AccessTimeIcon className="text-green-600" />
                  Select Time
                </label>
                <select
                  value={selectedTime}
                  onChange={(e) => setSelectedTime(e.target.value)}
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                >

                  <option value="">Select Time</option>
                  <option value="6 AM - 7 AM">6 AM - 7 AM</option>
                  <option value="7 AM - 8 AM">7 AM - 8 AM</option>
                  <option value="5 PM - 6 PM">5 PM - 6 PM</option>
                  <option value="6 PM - 7 PM">6 PM - 7 PM</option>
                  <option value="7 PM - 8 PM">7 PM - 8 PM</option>

                </select>
              </div>

              <button
                onClick={handleBooking}
                className="w-full bg-green-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-green-700 transition"
              >
                Confirm Booking
              </button>
            </div>

            <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition">
              <ShareIcon />
              Share
            </button>
          </div>
        </div>

        
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 mt-14">
          <h2 className="text-2xl font-bold text-green-900 mb-2">
            Sports Available
          </h2>

          <p className="text-gray-500 mb-8">
            (Click on sports to view price chart)
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div
              onClick={() => handleOpen("Cricket")}
              className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer"
            >
              <SportsCricketIcon className="text-green-600 text-5xl mb-3" />
              <p className="font-semibold">Cricket</p>
            </div>

            <div
              onClick={() => handleOpen("Football")}
              className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer"
            >
              <SportsSoccerIcon className="text-green-600 text-5xl mb-3" />
              <p className="font-semibold">Football</p>
            </div>

            <div
              onClick={() => handleOpen("Basketball")}
              className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer"
            >
              <SportsBasketballIcon className="text-green-600 text-5xl mb-3" />
              <p className="font-semibold">Basketball</p>
            </div>

            <div
              onClick={() => handleOpen("Badminton")}
              className="bg-green-50 border border-green-200 rounded-xl p-6 text-center hover:shadow-lg cursor-pointer"
            >
              <SportsTennisIcon className="text-green-600 text-5xl mb-3" />
              <p className="font-semibold">Badminton</p>
            </div>
          </div>
        </div>


        
        {isOpen && selectedSport && pricingData[selectedSport] && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">

            <div className="bg-white w-[950px] max-h-[85vh] rounded-2xl shadow-2xl flex overflow-hidden">

              
              <div className="w-60 bg-green-50 border-r p-6">
                <h3 className="font-bold text-green-800 mb-6 text-lg">
                  {selectedSport}
                </h3>

                <ul className="space-y-4 text-sm">
                  {Object.keys(pricingData[selectedSport]).map((section) => (
                    <li key={section} className="hover:text-green-700 cursor-pointer">
                      {section}
                    </li>
                  ))}
                </ul>
              </div>

              
              <div className="flex-1 p-8 overflow-y-auto relative">

                <button
                  onClick={handleClose}
                  className="absolute top-6 right-8 text-2xl text-gray-500 hover:text-red-500"
                >
                  ✖
                </button>

                <h2 className="text-2xl font-bold mb-6">
                  {selectedSport} Pricing
                </h2>

                <p className="mb-6 text-gray-600 text-sm border p-3 rounded-lg bg-gray-50">
                  Pricing is subjected to change and is controlled by venue
                </p>

                {Object.entries(pricingData[selectedSport]).map(
                  ([sectionTitle, details]) => (
                    <div key={sectionTitle} className="mb-10">

                      <h3 className="text-lg font-semibold underline mb-4">
                        {sectionTitle}
                      </h3>

                      <div className="space-y-6">
                        {details.map((item, index) => (
                          <div key={index}>
                            <p className="font-medium text-gray-700 mb-2">
                              {item.day}
                            </p>

                            <div className="flex justify-between border-b pb-3">
                              <span className="text-lg font-semibold">
                                INR {item.price} / hour
                              </span>
                              <span>{item.time}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                    </div>
                  )
                )}

              </div>
            </div>
          </div>
        )}

        
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            Amenities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3">
              <CheckCircleIcon className="text-green-600" />
              Restroom
            </div>

            <div className="flex items-center gap-3">
              <CheckCircleIcon className="text-green-600" />
              Parking
            </div>

            <div className="flex items-center gap-3">
              <CheckCircleIcon className="text-green-600" />
              Drinking Water
            </div>
          </div>
        </div>

        
        <div className="bg-white p-8 rounded-2xl shadow-md border border-gray-200 mt-10">
          <h2 className="text-2xl font-bold text-green-900 mb-6">
            About Venue
          </h2>

          <div className="space-y-8 text-gray-700 leading-relaxed">

            <div>
              <h3 className="font-semibold text-green-800 mb-2">
                Box Cricket:
              </h3>
              <p>
                Appropriate sports shoes are recommended to ensure safety and grip.
                Equipment available: bat, ball, wickets.
                Barefoot play is strictly prohibited.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-green-800 mb-2">
                Football:
              </h3>
              <p>
                Wearing football studs is recommended but not compulsory.
                Metal studs are not allowed.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🏏 Cricket
              </h3>

              <ul className="list-disc pl-5 space-y-2">
                <li>Proper cricket shoes are recommended for better grip and safety.</li>
                <li>Shoes must be worn at all times inside the facility.</li>
                <li>
                  Cricket equipment available for rent:
                  Bat – Rs. 100/-, Ball – Rs. 30/-, Full Kit – Rs. 250/-.
                </li>
                <li>Players must bring their own gloves and personal safety gear.</li>
                <li>No metal spikes allowed on turf surface.</li>
                <li>A maximum of 12 members per booking per cricket turf is allowed.</li>
                <li>Outside food and beverages are strictly prohibited.</li>
                <li>Any damage to equipment or turf will be charged accordingly.</li>
              </ul>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingPage;