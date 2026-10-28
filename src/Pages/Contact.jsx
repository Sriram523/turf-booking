import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaUser,
  FaRegEdit,
  FaMobileAlt,
  FaBook
} from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    phone: "",
    email: "",
    message: ""
  });

  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/api/enquiries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      alert(data.message);

      
      setFormData({
        name: "",
        subject: "",
        phone: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
    
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-center text-green-800 mb-10"
      >
        Contact Us
      </motion.h1>

      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-white p-10 rounded-xl shadow-lg"
      >
        <div className="grid md:grid-cols-2 gap-10">
          
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                Office Address
              </h2>
              <p className="flex items-start gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
                NO:9, KK'S Anusham Avenue, Thudiyalur, Coimbatore, Tamil Nadu - 641017
              </p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                Unit Address
              </h2>
              <p className="flex items-start gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-green-600 text-xl mt-1" />
                1415 McKercher drive, Saskatoon, S7H5J8 Saskatchewan Canada
              </p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                Email
              </h2>
              <p className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-green-600 text-xl" />
                mahixturf@gmail.com, ramhb2003@gmail.com
              </p>
            </div>

            <div className="border p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-semibold text-green-700 mb-3">
                WhatsApp & Mobile
              </h2>
              <p className="flex items-center gap-3 text-gray-700">
                <FaWhatsapp className="text-green-600 text-xl" />
                +91 9500791103
              </p>
              <p className="flex items-center gap-3 text-gray-700 mt-2">
                <FaPhoneAlt className="text-green-600 text-xl" />
                +91 7010709371
              </p>
            </div>
          </motion.div>

          
          <motion.form
           onSubmit={handleSubmit}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="border p-6 rounded-lg shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Enquiry Form
            </h2>

            <div className="flex items-center gap-3 border p-3 rounded-lg">
              <FaUser className="text-green-600" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="flex-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-3 border p-3 rounded-lg">
              <FaRegEdit className="text-green-600" />
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Enter your subject"
                className="flex-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-3 border p-3 rounded-lg">
              <FaMobileAlt className="text-green-600" />
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Enter your Phone Number"
                className="flex-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-3 border p-3 rounded-lg">
              <FaEnvelope className="text-green-600" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="flex-1 outline-none"
              />
            </div>

            <div className="flex items-center gap-3 border p-3 rounded-lg">
              <FaBook className="text-green-600" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us your turf booking plan"
                rows="4"
                className="flex-1 outline-none"
              ></textarea>
            </div>

            
            <div className="flex items-center gap-2 border p-3 rounded-lg">
              <input type="checkbox" />
              <span>I'm not a robot</span>
            </div>

            
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg"
            >
              Submit
            </button>

          </motion.form>  

        </div>
      </motion.div> 

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="w-full mt-10 rounded-t-xl overflow-hidden shadow-lg"
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.123456789!2d76.955832!3d11.016844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859f123456789%3A0xabcdef123456789!2sKK'S%20Anusham%20Avenue%2C%20Thudiyalur%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1670000000000"
          width="100%"
          height="500"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </motion.div>

    </div>
  );
};

export default Contact;