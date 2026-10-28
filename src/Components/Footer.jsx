import React from "react";
import { Link } from "react-router-dom";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";

import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";


const Footer = () => {
    return (
        <footer className="bg-[#2f2f2f] text-white mt-10">

            
            <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">

                
                <div className="flex flex-col gap-4">

                    <h2 className="text-3xl font-bold text-white">
                        Mahix <span className="text-green-400">Turf</span>
                    </h2>

                    <p className="text-gray-300 text-sm leading-6">
                        Mahix Turf is the perfect destination for sports lovers.
                        Book football, cricket, basketball and badminton courts easily.
                    </p>

                </div>

                
                <div>

                    <h2 className="text-xl font-semibold mb-6">Company</h2>

                    <ul className="flex flex-col gap-3 text-gray-300">

                        <Link to="/" className="flex items-center gap-2 hover:text-green-400 transition">
                            <KeyboardArrowRightIcon fontSize="small" />
                            Home
                        </Link>

                        <Link to="/about" className="flex items-center gap-2 hover:text-green-400 transition">
                            <KeyboardArrowRightIcon fontSize="small" />
                            About Us
                        </Link>

                        <Link to="/sports" className="flex items-center gap-2 hover:text-green-400 transition">
                            <KeyboardArrowRightIcon fontSize="small" />
                            Sports
                        </Link>

                        <Link to="/booking" className="flex items-center gap-2 hover:text-green-400 transition">
                            <KeyboardArrowRightIcon fontSize="small" />
                            Booking
                        </Link>

                        <Link
                            to="/gallery"
                            className="flex items-center gap-2 hover:text-green-400 transition"
                        >
                            <KeyboardArrowRightIcon fontSize="small" />
                            Gallery
                        </Link>

                        <Link
                            to="/contact"
                            className="flex items-center gap-2 hover:text-green-400 transition"
                        >
                            <KeyboardArrowRightIcon fontSize="small" />
                            Contact Us
                        </Link>

                    </ul>

                </div>

                
                <div>

                    <h2 className="text-xl font-semibold mb-6">Contact us</h2>

                    <div className="flex flex-col gap-4 text-gray-300">

                        <div className="flex items-start gap-3">
                            <LocationOnIcon className="text-green-400" />
                            <p>
                                Chennai, Tamil Nadu <br />
                                India
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <PhoneIphoneIcon className="text-green-400" />
                            <p>+91 98765 43210</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <EmailIcon className="text-green-400" />
                            <p>mahixsports@gmail.com</p>
                        </div>

                    </div>

                    
                    <div className="flex gap-5 mt-6 text-gray-300">

                        <WhatsAppIcon className="cursor-pointer hover:text-green-400 transition" />

                        <InstagramIcon className="cursor-pointer hover:text-green-400 transition" />

                        <LinkedInIcon className="cursor-pointer hover:text-green-400 transition" />

                        <FacebookIcon className="cursor-pointer hover:text-green-400 transition" />

                    </div>

                </div>

            </div>

            
            <div className="border-t border-gray-600 py-5">

                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between text-gray-400 text-sm">

                    <p>
                        Copyright © 2026 <span className="text-white">Mahix Turf</span> – All Rights Reserved.
                    </p>

                    <p>
                        Design & Developed by <span className="text-white">SR Mediatech</span>
                    </p>

                </div>

            </div>

        </footer>
    );
};

export default Footer;