import React, { useState } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const GalleryForm = () => {
  const [formData, setFormData] = useState({
    image: "",
  });


  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, image: reader.result })
    };
  };

  const submitData = async (Data) => {
    try {
   

      const response = await axios.post(
        `${api_endpoint}/api/gallery`,
        Data,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
   
      // do something with response data
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitData(formData);
  };

  return (
    <div className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <form onSubmit={handleSubmit}>
  
        <div className="mb-4">
          <label
            htmlFor="photo"
            className="block text-gray-700 font-bold mb-2"
          >
            Photo
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handlePhotoChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Publish
        </button>
      </form>
    </div>
  );
};

export default GalleryForm;
