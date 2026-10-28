import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import axios from "axios";
import { useLocation } from "react-router-dom";

const BookingSummary = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [sport, setSport] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [duration, setDuration] = useState(1);
    const [tickets, setTickets] = useState(1);
    const [cart, setCart] = useState([]);
    const location = useLocation();
    const bookingData = location.state;

    const pricePerTicket = 499;
    useEffect(() => {
  if (bookingData) {
    setName(bookingData.name || "");
    setSport(bookingData.sport || "");
    setDate(bookingData.date || "");
    setTime(bookingData.time || "");
    setDuration(bookingData.duration || 1);
    setTickets(bookingData.tickets || 1);

    setCart([
      {
        ...bookingData,
        price: bookingData.tickets * pricePerTicket
      }
    ]);
  }
}, [bookingData]);

    const handleAddToCart = () => {
        if (tickets > 0) {
            setCart([
                {
                    name,
                    sport,
                    date,
                    time,
                    duration,
                    tickets,
                    price: tickets * pricePerTicket,
                },
            ]);
        }
    };

    const handleRemove = () => {
        setCart([]);
    };

    
   const handleConfirmBooking = async () => {

  try {

    const bookingDataToSend = {
      name,
      sport,
      date,
      time,
      duration,
      tickets,
      price: tickets * pricePerTicket
    };

    console.log("Sending:", bookingDataToSend);

    await axios.post(
      "http://localhost:5000/api/bookings",
      bookingDataToSend
    );

    alert("Booking Successful");

    navigate("/");

  } catch (error) {

    console.log(error.response?.data || error.message);

    if (error.response?.data?.message === "Slot already booked") {
      alert("This slot is already booked. Please choose another time.");
    } else {
      alert("Booking Failed");
    }

  }

};

 if (!bookingData) {
  return <div className="text-center mt-20">No Booking Data Found</div>;
}

    return (
        <section className="min-h-screen bg-gray-100 p-6">
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

                
                <div className="bg-white rounded-2xl shadow p-6">

                    
                    <h2 className="text-xl font-bold text-gray-800">
                        Mahixinfotech Sports Arena
                    </h2>
                    <p className="text-gray-500 mb-3">Premium Turf</p>

                    <div className="bg-green-600 text-white text-center py-2 rounded-md mb-6">
                        Book your favourite sport now!
                    </div>

                    
                    <div className="mb-5">
                        <label className="block font-medium mb-2">Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    
                    <div className="mb-5">
                        <label className="block font-medium mb-2">Sports</label>
                        <select
                            value={sport}
                            onChange={(e) => setSport(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        >
                            <option>Cricket</option>
                            <option>Football</option>
                            <option>Badminton</option>
                            <option>Basketball</option>
                        </select>
                    </div>

                    
                    <div className="mb-5">
                        <label className="block font-medium mb-2">Date</label>
                        <input
                            type="date"
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    
                    <div className="mb-5">
                        <label className="block font-medium mb-2">Start Time</label>
                        <input
                            type="time"
                            value={time}
                            onChange={(e) => setTime(e.target.value)}
                            className="w-full border rounded-lg p-3"
                        />
                    </div>

                    
                    <div className="mb-6">
                        <label className="block font-medium mb-2">Duration</label>
                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setDuration(Math.max(1, duration - 1))}
                                className="bg-gray-200 p-3 rounded-full"
                            >
                                <FaMinus />
                            </button>
                            <span className="font-semibold">{duration} Hr</span>
                            <button
                                onClick={() => setDuration(duration + 1)}
                                className="bg-green-600 text-white p-3 rounded-full"
                            >
                                <FaPlus />
                            </button>
                        </div>
                    </div>

                    
                    <div className="border-t pt-4">
                        <p className="font-semibold">
                            {sport} Ground Booking ({tickets} slot)
                        </p>
                        <p className="text-green-600 font-bold mt-1">
                            INR {pricePerTicket}.00
                        </p>
                        <p className="text-sm text-gray-500 mb-4">
                            INR {pricePerTicket}.00 / Slot
                        </p>

                        <div className="flex items-center justify-between">
                            <button
                                onClick={() => setTickets(Math.max(1, tickets - 1))}
                                className="bg-green-600 text-white p-3 rounded-full"
                            >
                                <FaMinus />
                            </button>
                            <span className="font-semibold">{tickets}</span>
                            <button
                                onClick={() => setTickets(tickets + 1)}
                                className="bg-green-600 text-white p-3 rounded-full"
                            >
                                <FaPlus />
                            </button>
                        </div>

                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-gray-300 text-gray-600 py-3 rounded-xl mt-6 font-semibold"
                        >
                            Add To Cart
                        </button>
                    </div>
                </div>

                
                <div className="bg-white rounded-2xl shadow p-6">

                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-bold text-lg">
                            Cart ({cart.length})
                        </h3>
                        {cart.length > 0 && (
                            <FaTrash
                                onClick={handleRemove}
                                className="text-red-500 cursor-pointer"
                            />
                        )}
                    </div>

                    {cart.length === 0 ? (
                        <div className="text-center text-gray-400 py-16">
                            Cart Is Empty
                        </div>
                    ) : (
                        <>
                            <div className="border rounded-lg p-4 mb-6">
                                <p className="font-semibold text-lg">
                                    {cart[0].name}
                                </p>

                                <p className="font-semibold">
                                    {cart[0].sport} Booking ({cart[0].tickets} slot)
                                </p>
                                <p className="text-sm text-gray-600 mt-2">
                                    {date}
                                </p>
                                <p className="text-sm text-gray-600">
                                    {time} to {parseInt(time.split(":")[0]) + duration}:00
                                </p>
                                <p className="text-green-600 font-bold mt-2">
                                    INR {cart[0].price}
                                </p>
                            </div>

                            <button
                                onClick={handleConfirmBooking}
                                className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
                            >
                                Proceed INR {cart[0].price}.00
                            </button>
                        </>
                    )}
                </div>
            </div>
        </section>
    );
};

export default BookingSummary;