import React, { useEffect, useState } from "react";
import axios from "axios";

const ManageGallery = () => {

  const [images, setImages] = useState([]);
  const [file, setFile] = useState(null);

  const fetchImages = async () => {

    const res = await axios.get("http://localhost:5000/api/gallery");

    setImages(res.data);

  };

  useEffect(() => {
    fetchImages();
  }, []);

  const uploadImage = async () => {

    const formData = new FormData();

    formData.append("image", file);

    await axios.post(
      "http://localhost:5000/api/gallery",
      formData
    );

    fetchImages();

  };

  const deleteImage = async (id) => {

    await axios.delete(
      `http://localhost:5000/api/gallery/${id}`
    );

    fetchImages();

  };

  return (
    <div>

      <h1 className="text-3xl font-bold mb-6">
        Manage Gallery
      </h1>

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button
        onClick={uploadImage}
        className="bg-green-600 text-white px-4 py-2 ml-3 rounded"
      >
        Upload
      </button>

      <div className="grid grid-cols-3 gap-6 mt-6">

        {images.map((img) => (

          <div key={img._id}>

            <img
              src={`http://localhost:5000/uploads/${img.image}`}
              alt=""
              className="rounded-lg shadow"
            />

            <button
              onClick={() => deleteImage(img._id)}
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
            >
              Delete
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default ManageGallery;