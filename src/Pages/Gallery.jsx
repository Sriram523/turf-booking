import React, { useEffect, useState } from "react";
import axios from "axios";

const Gallery = () => {

  const [images, setImages] = useState([]);

  const fetchImages = async () => {

    try {

      const res = await axios.get(
        "http://localhost:5000/api/gallery"
      );

      setImages(res.data);

    } catch (error) {

      console.log("Error fetching images", error);

    }

  };

  useEffect(() => {

    fetchImages();

  }, []);

  return (

    <div className="min-h-screen bg-gray-50 py-16 px-6">

      <h1 className="text-4xl font-bold text-center text-green-800 mb-12">
        Mahix Turf Gallery
      </h1>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 max-w-6xl mx-auto">

        {images.map((img) => (

          <div
            key={img._id}
            className="overflow-hidden rounded-xl shadow-lg hover:scale-105 transition"
          >

            <img
              src={`http://localhost:5000/uploads/${img.image}`}
              alt="Turf"
              className="w-full h-64 object-cover"
            />

          </div>

        ))}

      </div>

    </div>

  );

};

export default Gallery;