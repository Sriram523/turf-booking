import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


import AOS from "aos";
import "aos/dist/aos.css";

import footballImg from "../assets/images/sports1.png";
import cricketImg from "../assets/images/sports2.png";
import basketballImg from "../assets/images/sports4.png";
import badmintonImg from "../assets/images/sports5.png";
import turfImg from "../assets/images/sport6.png";
import communityImg from "../assets/images/sport7.png";


import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import SecurityIcon from "@mui/icons-material/Security";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Sportsdetails = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out"
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      window.scrollTo(0, 0);
    }, 1000);

    return () => clearTimeout(timer);
  }, [title]);

  const data = {
    "Football Turf": {
      img: footballImg,
      content:
        "Experience premium 5-a-side football turf with FIFA standard grass, flood lights and secure fencing for competitive matches."
    },
    "Cricket Nets": {
      img: cricketImg,
      content:
        "Professional cricket nets with bowling machine support and practice lanes."
    },
    "Basketball Court": {
      img: basketballImg,
      content:
        "Indoor & outdoor courts with quality flooring and lighting."
    },
    "Badminton Turf": {
      img: badmintonImg,
      content:
        "Tournament ready badminton courts with LED lighting."
    },
    "Tournaments": {
      img: turfImg,
      content:
        "Corporate and open tournaments with live scoring and event branding."
    },
    "Community Events": {
      img: communityImg,
      content:
        "Weekend leagues, coaching camps and sports community programs."
    }
  };

  const sport = data[title];


  if (loading) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-green-50">
        <SportsSoccerIcon
          sx={{
            fontSize: 80,
            color: "#16a34a",
            animation: "spin 1s linear infinite"
          }}
        />
        <p className="mt-6 text-green-700 font-semibold text-lg">
          Loading {title}...
        </p>

        <style>
          {`
            @keyframes spin {
              from { transform: rotate(0deg); }
              to { transform: rotate(360deg); }
            }
          `}
        </style>
      </div>
    );
  }

  if (!sport) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        Sport Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white pt-7 pb-20 px-6">
      <div className="max-w-6xl mx-auto">

        
        <div className="mb-6 mt-2 flex items-center" data-aos="fade-right">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-1 text-green-700 font-medium
             hover:text-white hover:bg-green-600
             px-3 py-1.5 text-sm
             rounded-full
             border border-green-600
             transition duration-300
             ml-0 mr-4"
          >
            <ArrowBackIcon />
            Back
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">

          
          <div
            data-aos="zoom-in"
            className="rounded-3xl overflow-hidden shadow-2xl group border-2 border-transparent hover:border-green-400 hover:shadow-green-200 transition duration-500"
          >
            <img
              src={sport.img}
              alt={title}
              className="w-full h-96 object-cover transform group-hover:scale-110 transition duration-700"
            />
          </div>

          
          <div data-aos="fade-left">
            <h2 className="text-5xl font-extrabold text-green-900 mb-8">
              {title}
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              {sport.content}
            </p>

            
            <div className="grid grid-cols-2 gap-6">

              <div className="feature-card" data-aos="fade-up">
                <LightbulbIcon className="feature-icon" />
                <h4>Lighting</h4>
                <p>High quality LED flood lights.</p>
              </div>

              <div className="feature-card" data-aos="fade-up" data-aos-delay="100">
                <LocalParkingIcon className="feature-icon" />
                <h4>Parking</h4>
                <p>Spacious parking facility.</p>
              </div>

              <div className="feature-card" data-aos="fade-up" data-aos-delay="200">
                <SecurityIcon className="feature-icon" />
                <h4>Safety</h4>
                <p>Fully secured environment.</p>
              </div>

              <div className="feature-card" data-aos="fade-up" data-aos-delay="300">
                <EventAvailableIcon className="feature-icon" />
                <h4>Booking</h4>
                <p>Easy online booking system.</p>
              </div>

            </div>

            
            <button
              onClick={() => navigate("/booking")}
              data-aos="zoom-in-up"
              className="mt-12 bg-green-700 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 hover:shadow-green-300 transition duration-300"
            >
              Book Now
            </button>
          </div>

        </div>
      </div>

      
      <style>
        {`
          .feature-card {
            background: white;
            padding: 20px;
            border-radius: 20px;
            box-shadow: 0 8px 20px rgba(0,0,0,0.08);
            transition: all 0.3s ease;
            border: 2px solid transparent;
          }

          .feature-card:hover {
            border: 2px solid #22c55e;
            box-shadow: 0 0 15px rgba(34,197,94,0.4);
            transform: translateY(-5px);
          }

          .feature-icon {
            font-size: 32px;
            color: #16a34a;
            margin-bottom: 10px;
          }

          .feature-card h4 {
            font-weight: 600;
            margin-bottom: 5px;
            color: #065f46;
          }

          .feature-card p {
            font-size: 14px;
            color: #555;
          }
        `}
      </style>

    </section>
  );
};

export default Sportsdetails;