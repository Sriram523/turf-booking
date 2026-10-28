import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {

  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [sportsOpen, setSportsOpen] = useState(false);

  return (

    <>
      <nav className="sticky top-0 bg-green-900 text-white px-6 py-4 flex justify-between items-center z-50 shadow-md">

        
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <SportsCricketIcon className="text-green-400" />
          Mahix Turf
        </h1>

        
        <ul className="hidden md:flex gap-8 items-center">

          <li>
            <Link to="/" className="hover:text-green-400">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-green-400">
              About Us
            </Link>
          </li>

          
          <li className="relative group cursor-pointer">

            <Link to="/sports" className="hover:text-green-400">
              Sports
            </Link>

            <ul
              className="absolute left-0 mt-2 bg-white text-green-900 rounded shadow-lg
              opacity-0 invisible group-hover:opacity-100
              group-hover:visible transition-all duration-200 z-50 w-52"
            >

              <li>
                <Link
                  to="/sports/Football Turf"
                  className="px-4 py-2 hover:bg-green-100 flex items-center gap-2 block"
                >
                  <SportsSoccerIcon /> Football
                </Link>
              </li>

              <li>
                <Link
                  to="/sports/Cricket Nets"
                  className="px-4 py-2 hover:bg-green-100 flex items-center gap-2 block"
                >
                  <SportsCricketIcon /> Cricket
                </Link>
              </li>

              <li>
                <Link
                  to="/sports/Basketball Court"
                  className="px-4 py-2 hover:bg-green-100 flex items-center gap-2 block"
                >
                  <SportsBasketballIcon /> Basketball
                </Link>
              </li>

              <li>
                <Link
                  to="/sports/Badminton Turf"
                  className="px-4 py-2 hover:bg-green-100 flex items-center gap-2 block"
                >
                  <SportsTennisIcon /> Badminton
                </Link>
              </li>

            </ul>
          </li>

          <li>
            <Link
              to="/booking"
              className="hover:text-green-400 cursor-pointer"
            >
              Booking
            </Link>
          </li>

          <li>
            <Link to="/gallery" className="hover:text-green-400">
              Gallery
            </Link>
          </li>

          <li>
            <Link to="/contact" className="hover:text-green-400">
              Contact Us
            </Link>
          </li>

          <Link to="/admin" className="hover:text-green-400">
            Admin
          </Link>

        </ul>

        
        <button
          onClick={() => navigate("/booking")}
          className="hidden md:block bg-gradient-to-r from-green-900 to-green-400 px-4 py-2 rounded-lg hover:opacity-90"
        >
          Book Now
        </button>

        
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
        >
          <MenuIcon className="text-3xl cursor-pointer" />
        </button>

      </nav>


      
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white text-green-900 shadow-lg z-50 transform transition-transform duration-300
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >

        
        <div className="flex justify-between items-center p-5 border-b">

          <h2 className="text-lg font-bold">
            Mahix Turf
          </h2>

          <CloseIcon
            className="cursor-pointer"
            onClick={() => setMenuOpen(false)}
          />

        </div>


        
        <ul className="flex flex-col gap-6 p-6">

          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>
              About Us
            </Link>
          </li>

          
          <li>

            <div
              className="cursor-pointer font-medium"
              onClick={() => setSportsOpen(!sportsOpen)}
            >
              Sports
            </div>

            {sportsOpen && (
              <ul className="ml-4 mt-3 flex flex-col gap-3">

                <li>
                  <Link
                    to="/sports/Football Turf"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <SportsSoccerIcon /> Football
                  </Link>
                </li>

                <li>
                  <Link
                    to="/sports/Cricket Nets"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <SportsCricketIcon /> Cricket
                  </Link>
                </li>

                <li>
                  <Link
                    to="/sports/Basketball Court"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <SportsBasketballIcon /> Basketball
                  </Link>
                </li>

                <li>
                  <Link
                    to="/sports/Badminton Turf"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-2"
                  >
                    <SportsTennisIcon /> Badminton
                  </Link>
                </li>

              </ul>
            )}

          </li>

          <li>
            <Link to="/booking">Booking</Link>
          </li>


          <button
            onClick={() => navigate("/booking")}
            className="bg-green-600 text-white py-2 rounded-lg"
          >
            Book Now
          </button>

        </ul>

      </div>

    </>
  );
};

export default Navbar;