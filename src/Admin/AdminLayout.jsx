import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <div className="flex">

    
      <div className="w-60 bg-green-900 text-white min-h-screen p-6">

        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <ul className="space-y-4">

          <li><Link to="/admin/dashboard">Dashboard</Link></li>
          <li><Link to="/admin/bookings">Manage Bookings</Link></li>
          <li><Link to="/admin/gallery">Manage Gallery</Link></li>
         <li><Link to="/admin/enquiries">Manage Enquiries</Link></li>
        </ul>

      </div>

      
      <div className="flex-1 p-10 bg-gray-100">

        <Outlet />

      </div>

    </div>
  );
};

export default AdminLayout;