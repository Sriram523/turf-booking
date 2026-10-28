import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { name: "Mon", bookings: 4 },
  { name: "Tue", bookings: 6 },
  { name: "Wed", bookings: 3 },
  { name: "Thu", bookings: 8 },
  { name: "Fri", bookings: 5 },
  { name: "Sat", bookings: 9 },
  { name: "Sun", bookings: 7 }
];

const Dashboard = () => {
  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        Admin Dashboard
      </h1>

      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

        <div className="bg-green-600 text-white p-6 rounded-lg shadow">
          <h2>Total Bookings</h2>
          <p className="text-3xl font-bold">24</p>
        </div>

        <div className="bg-blue-600 text-white p-6 rounded-lg shadow">
          <h2>Total Sports</h2>
          <p className="text-3xl font-bold">4</p>
        </div>

        <div className="bg-purple-600 text-white p-6 rounded-lg shadow">
          <h2>Gallery Images</h2>
          <p className="text-3xl font-bold">18</p>
        </div>

        <div className="bg-orange-500 text-white p-6 rounded-lg shadow">
          <h2>Today's Bookings</h2>
          <p className="text-3xl font-bold">6</p>
        </div>

      </div>

      
      <div className="bg-white p-6 rounded-lg shadow mb-10">

        <h2 className="text-xl font-semibold mb-4">
          Weekly Bookings
        </h2>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="bookings" fill="#16a34a" />
          </BarChart>
        </ResponsiveContainer>

      </div>

      
      <div className="bg-white p-6 rounded-lg shadow">

        <h2 className="text-xl font-semibold mb-4">
          Recent Bookings
        </h2>

        <table className="w-full text-center">

          <thead className="bg-gray-200">
            <tr>
              <th className="p-3">User</th>
              <th>Sport</th>
              <th>Date</th>
              <th>Time</th>
            </tr>
          </thead>

          <tbody>

            <tr className="border-t">
              <td className="p-3">Sriram</td>
              <td>Football</td>
              <td>20 Mar</td>
              <td>6 PM</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">Arun</td>
              <td>Cricket</td>
              <td>21 Mar</td>
              <td>7 PM</td>
            </tr>

            <tr className="border-t">
              <td className="p-3">Rahul</td>
              <td>Badminton</td>
              <td>22 Mar</td>
              <td>5 PM</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Dashboard;