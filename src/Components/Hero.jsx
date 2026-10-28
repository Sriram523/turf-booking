import React, { useState, useEffect } from "react";
import footballImg from "../assets/images/football.png";
import cricketimg from "../assets/images/crckt.png";
import basketballimg from "../assets/images/basketball.png";
import badmintonimg from "../assets/images/badminton.png";
import { useNavigate } from "react-router-dom";
const slides = [
  {
    title: "Football",
    description: "Play on premium football turfs with instant booking.",
    image: footballImg,
  },
  {
    title: "Cricket",
    description: "Book cricket nets and grounds with ease.",
    image: cricketimg,
  },
  {
    title: "Basketball",
    description: "Shoot hoops on world-class basketball courts.",
    image: basketballimg,
  },
  {
    title: "Badminton",
    description: "Smash your way on top-quality badminton courts.",
    image: badmintonimg,
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const navigate = useNavigate();

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">

    
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      
      <div className="absolute inset-0 bg-black/60"></div>

      
      <div className="relative z-10 h-full flex items-center">
        <div className="ml-10 md:ml-20 max-w-xl text-left text-white">

          
          <h1
            key={current}
            className="text-5xl md:text-6xl font-extrabold text-green-500 mb-6 animate-fadeSlide"
          >
            {slides[current].title}
          </h1>

          
          <p
            key={current + "desc"}
            className="text-lg md:text-xl text-gray-200 mb-8 animate-fadeSlide delay-200"
          >
            {slides[current].description}
          </p>

          <button 
           onClick={() => navigate("/booking")}
           className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-xl text-lg font-semibold shadow-xl transition duration-300">
            Book Now
          </button>
        </div>
      </div>

      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition-all ${current === index
                ? "bg-green-500 scale-125"
                : "bg-white/50"
              }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;