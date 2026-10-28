import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageBookings = () => {

  const [bookings, setBookings] = useState([]);

  const fetchBookings = () => {
    axios.get("http://localhost:5000/api/bookings")
    .then(res => {
      setBookings(res.data);
    });
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const deleteBooking = async (id) => {

    await axios.delete(`http://localhost:5000/api/bookings/${id}`);

    fetchBookings();

  };

  return (

    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        Manage Bookings
      </h1>

      <table className="w-full border">

        <thead className="bg-green-600 text-white">

          <tr>
            <th className="p-3">Name</th>
            <th className="p-3">Sport</th>
            <th className="p-3">Date</th>
            <th className="p-3">Time</th>
            <th className="p-3">Action</th>
          </tr>

        </thead>

        <tbody>

          {bookings.map((b) => (

            <tr key={b._id} className="text-center border">

              <td className="p-3">{b.name}</td>
              <td className="p-3">{b.sport}</td>
              <td className="p-3">{b.date}</td>
              <td className="p-3">{b.time}</td>

              <td>

                <button
                  onClick={() => deleteBooking(b._id)}
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