import React from "react";
import footballImg from "../assets/images/sports1.png";
import cricketImg from "../assets/images/sports2.png";
import basketballImg from "../assets/images/sports4.png";
import badmintonImg from "../assets/images/sports5.png";
import turfImg from "../assets/images/sport6.png";
import communityImg from "../assets/images/sport7.png";
import { Link, useNavigate } from "react-router-dom"; 

const SportsCards = () => {

  const navigate = useNavigate(); 

  const cards = [
    {
      title: "Football Turf",
      img: footballImg,
      desc: "Premium 5-a-side football turf. Well-maintained grass and lighting for evening matches. Perfect for casual and competitive games."
    },
    {
      title: "Cricket Nets",
      img: cricketImg,
      desc: "Professional cricket nets for daily practice sessions."
    },
    {
      title: "Basketball Court",
      img: basketballImg,
      desc: "Indoor & outdoor basketball courts with quality flooring."
    },
    {
      title: "Badminton Turf",
      img: badmintonImg,
      desc: "Multiple badminton courts with proper markings."
    },
    {
      title: "Tournaments",
      img: turfImg,
      desc: "Organize tournaments with stadium-like atmosphere."
    },
    {
      title: "Community Events",
      img: communityImg,
      desc: "Engage local sports community with events & leagues."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            Our Facilities
          </h2>
          <div className="flex justify-center mt-4">
            <div className="w-16 h-1 bg-green-700 skew-x-12"></div>
          </div>

          
          <div className="mb-4 text-sm font-medium text-gray-600 flex justify-center items-center gap-2">
            <Link to="/" className="text-green-600 hover:underline">
              Home
            </Link>
            <span className="text-gray-400">›</span>
            <span className="text-gray-800">Sports</span>
          </div>
        </div>

        
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
          {cards.map((card, index) => (
            <div key={index}>

              
              <div
                onClick={() => navigate(`/sports/${card.title}`)}
                className="relative group rounded-3xl overflow-hidden shadow-xl cursor-pointer"
              >

                
                <img
                  src={card.img}
                  alt={card.title}
                  className="w-full h-[240px] md:h-[300px] object-cover"
                />

                
                <div className="absolute inset-0 bg-green-500 text-white 
                  flex items-center px-8 
                  -translate-x-full group-hover:translate-x-0
                  transition-transform duration-500 ease-in-out
                  clip-hover">
                  <p className="text-lg leading-relaxed">
                    {card.desc}
                  </p>
                </div>

              </div>

              
              <h3 className="text-xl font-semibold mt-6 text-gray-800">
                {card.title}
              </h3>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SportsCards;