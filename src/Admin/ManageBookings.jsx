import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageBookings = () => {

  const [bookings, setBookings] = useState([]);

  

  const fetchBookings = async () => {

    try {

      const res = await axios.get("http://localhost:5000/api/bookings");

      setBookings(res.data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchBookings();

  }, []);


  

  const approveBooking = async (id) => {

    try {

      await axios.put(`http://localhost:5000/api/bookings/${id}`);

      alert("Booking Approved");

      fetchBookings();

    } catch (error) {

      console.log("Approve error", error);

    }

  };


  

  const deleteBooking = async (id) => {

    try {

      await axios.delete(`http://localhost:5000/api/bookings/${id}`);

      alert("Booking Deleted");

      fetchBookings();

    } catch (error) {

      console.log("Delete error", error);

    }

  };


  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Manage Bookings
      </h1>

      <table className="w-full bg-white shadow rounded">

        <thead className="bg-green-700 text-white">

          <tr>
            <th className="p-3">User</th>
            <th className="p-3">Sport</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Status</th>
            <th className="p-3">Action</th>
          </tr>

        </thead>

        <tbody>

          {bookings.map((booking) => (

            <tr key={booking._id} className="text-center border-t">

              <td className="p-3">{booking.name}</td>
              <td>{booking.sport}</td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>

              <td>
                {booking.status === "Approved" ? (
                  <span className="text-green-600 font-semibold">
                    Approved
                  </span>
                ) : (
                  <span className="text-orange-500">
                    Pending
                  </span>
                )}
              </td>

              <td className="space-x-2">

                <button
                  onClick={() => approveBooking(booking._id)}
                  disabled={booking.status === "Approved"}
                  className="bg-green-600 text-white px-3 py-1 rounded disabled:bg-gray-400"
                >
                  Approve
                </button>

                <button
                  onClick={() => deleteBooking(booking._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default ManageBookings;