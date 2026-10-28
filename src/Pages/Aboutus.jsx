import React from 'react';
import { Target, Eye, BarChart3, Smile, Presentation, MapPin } from 'lucide-react';
import turfimg from "../assets/images/turf.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-white font-sans">

      
<section className="py-12  bg-white">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h1 className="text-2x2 md:text-4xl font-extrabold text-green-900 tracking-wide">
      ABOUT US
    </h1>
    
  

    
    <div className="flex items-center justify-center mt-4 gap-2">
      <span className="w-14 h-1 bg-green-700"></span>
      <span className="w-3 h-3 bg-green-700 rotate-45"></span>
      <span className="w-16 h-1 bg-green-700"></span>
    </div>

    <div className="mt-4 text-sm font-medium text-gray-600 flex justify-center items-center gap-2">
      
      <Link to="/" className="text-green-600 hover:underline">
        Home
      </Link>

      <span className="text-gray-400">›</span>

      <span className="text-gray-800">About Us</span>

    </div>



  </div>
</section>

    
      <section className="max-w-7xl mx-auto py-9 px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <h2 className="text-4xl font-bold">
            <span className="text-green-500">Welcome To</span>{" "}
            <span className="text-green-800">Mahix Turf</span>
          </h2>

          <div className="text-gray-700 leading-relaxed space-y-5">
            <p>
              Mahix Info Tech Turf is a modern sports arena built for passionate
              players and energetic teams. We provide premium quality turf grounds
              designed for football, cricket, and multi-sport activities.
            </p>

            <p>
              Our facility is equipped with professional lighting, well-maintained
              synthetic turf, secure environment, and comfortable spectator space.
              We focus on delivering a safe and enjoyable sporting experience.
            </p>

            <p>
              Whether it’s friendly matches, tournaments, practice sessions,
              or corporate events, Mahix Turf ensures seamless booking,
              professional management, and an energetic atmosphere.
            </p>

            <p>
              At Mahix Info Tech, we believe sports bring people together.
              Our mission is to create a community hub where fitness,
              teamwork, and fun go hand in hand.
            </p>
          </div>
        </div>

        <div className="overflow-hidden shadow-2xl border-4 border-green-800">
          <img
            src={turfimg}
            alt="Mahix Turf"
            className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

    
      <section className="bg-green-50 py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          <div className="bg-white p-12 rounded-xl shadow-lg border-t-4 border-green-700 text-center hover:shadow-2xl transition-all">
            <Target className="w-16 h-16 mx-auto mb-6 text-green-800" />
            <h3 className="text-2xl font-bold text-green-700 mb-6 tracking-widest uppercase">
              Mission
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our mission is to provide world-class turf facilities that promote
              health, fitness, and competitive spirit. We are committed to maintaining
              high-quality infrastructure, ensuring safety standards, and delivering
              outstanding customer service. Through innovation and dedication,
              we aim to inspire players of all ages to stay active and achieve excellence.
            </p>
          </div>

          <div className="bg-white p-12 rounded-xl shadow-lg border-t-4 border-green-700 text-center hover:shadow-2xl transition-all">
            <Eye className="w-16 h-16 mx-auto mb-6 text-green-800" />
            <h3 className="text-2xl font-bold text-green-700 mb-6 tracking-widest uppercase">
              Vision
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Our vision is to become the most trusted and leading turf brand in the region.
              We aspire to build a vibrant sports community where teamwork, discipline,
              and passion thrive. By continuously upgrading our facilities and services,
              we aim to set new benchmarks in sports excellence and community engagement.
            </p>
          </div>

        </div>
      </section>

    
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="relative overflow-hidden group bg-white border-2 border-green-100 hover:border-green-600 p-12 min-h-[260px] rounded-xl shadow-sm text-center flex flex-col justify-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="absolute bottom-0 left-0 w-full h-0 bg-green-700 transition-all duration-500 group-hover:h-full z-0"></div>
            <div className="relative z-10 group-hover:text-white transition-colors duration-500">
              <BarChart3 className="w-14 h-14 mx-auto mb-5 text-green-700 group-hover:text-white transition-colors duration-500" />
              <h4 className="text-4xl font-bold">5+</h4>
              <p className="uppercase tracking-wider mt-3">Years Experience</p>
            </div>
          </div>

          <div className="relative overflow-hidden group bg-white border-2 border-green-100 hover:border-green-600 p-12 min-h-[260px] rounded-xl shadow-sm text-center flex flex-col justify-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="absolute bottom-0 left-0 w-full h-0 bg-green-700 transition-all duration-500 group-hover:h-full z-0"></div>
            <div className="relative z-10 group-hover:text-white transition-colors duration-500">
              <Smile className="w-14 h-14 mx-auto mb-5 text-green-700 group-hover:text-white transition-colors duration-500" />
              <h4 className="text-4xl font-bold">800+</h4>
              <p className="uppercase tracking-wider mt-3">Happy Players</p>
            </div>
          </div>

          <div className="relative overflow-hidden group bg-white border-2 border-green-100 hover:border-green-600 p-12 min-h-[260px] rounded-xl shadow-sm text-center flex flex-col justify-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="absolute bottom-0 left-0 w-full h-0 bg-green-700 transition-all duration-500 group-hover:h-full z-0"></div>
            <div className="relative z-10 group-hover:text-white transition-colors duration-500">
              <Presentation className="w-14 h-14 mx-auto mb-5 text-green-700 group-hover:text-white transition-colors duration-500" />
              <h4 className="text-4xl font-bold">150+</h4>
              <p className="uppercase tracking-wider mt-3">Matches Hosted</p>
            </div>
          </div>

          <div className="relative overflow-hidden group bg-white border-2 border-green-100 hover:border-green-600 p-12 min-h-[260px] rounded-xl shadow-sm text-center flex flex-col justify-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">
            <div className="absolute bottom-0 left-0 w-full h-0 bg-green-700 transition-all duration-500 group-hover:h-full z-0"></div>
            <div className="relative z-10 group-hover:text-white transition-colors duration-500">
              <MapPin className="w-14 h-14 mx-auto mb-5 text-green-700 group-hover:text-white transition-colors duration-500" />
              <h4 className="text-4xl font-bold">3</h4>
              <p className="uppercase tracking-wider mt-3">Premium Grounds</p>
            </div>
          </div>

        </div>
      </section>

      
      <div className="text-center pb-24">
        <button 
        onClick={() => navigate("/booking")}
        className="bg-green-700 hover:bg-green-900 text-white font-bold py-4 px-10 rounded-full shadow-lg transform hover:-translate-y-1 transition-all duration-300 uppercase tracking-widest text-sm">
          Book Your Slot Now
        </button>
      </div>

    </div>
  );
};

export default AboutUs;