import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageEnquiries = () => {

  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    const res = await axios.get("http://localhost:5000/api/enquiries");
    setEnquiries(res.data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Manage Enquiries</h1>

      <div className="bg-white shadow rounded p-4">

        <div className="grid grid-cols-5 bg-green-600 text-white p-3 font-semibold">
          <div>Name</div>
          <div>Phone</div>
          <div>Email</div>
          <div>Subject</div>
          <div>Message</div>
        </div>

        {enquiries.length === 0 ? (
          <p className="text-center p-4">No enquiries found</p>
        ) : (
          enquiries.map((e, index) => (
            <div key={index} className="grid grid-cols-5 border-b p-3">
              <div>{e.name}</div>
              <div>{e.phone}</div>
              <div>{e.email}</div>
              <div>{e.subject}</div>
              <div>{e.message}</div>
            </div>
          ))
        )}

      </div>
    </div>
  );
};

export default ManageEnquiries;