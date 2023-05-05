import React, { useState } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { FaCheckCircle } from "react-icons/fa";

const TeamForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    position: "",
    photo: null,
  });
  const [message, setmessage] = useState();
  // const [error, seterror] = useState();
  const [uploading, setuploading] = useState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setmessage("");
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFormData({ ...formData, photo: reader.result });
    };
  };

  const submitData = async (Data) => {
    try {
      const response = await axios.post(`${api_endpoint}/api/team`, Data, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
        },
      });
      setuploading(false);
      document.getElementById("photo").value = ""; // reset the file input element
      setmessage(response.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    submitData(formData);
    setFormData({
      name: "",
      position: "",
      photo: null,
    });
    setuploading(true);
  };

  return (
    <div className="max-w-md mx-auto py-4 px-8 bg-white shadow-lg rounded-lg">
      {uploading && (
        <div className="flex items-center justify-center">
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-5.291a7.962 7.962 0 01-2 5.291l3 2.647A8.01 8.01 0 0120 12h-4z"
            ></path>
          </svg>
          <p className="">Adding member...</p>
        </div>
      )}

      <div>

      <p className="text-green-500">
        {" "}
        {message && (
          <p className="flex items-center">
            <FaCheckCircle className="text-green-500 pr-1" size={20} />{" "}
            {message}
          </p>
        )}
      </p>


      </div>

  

      <h1 className="text-2xl font-bold mb-6 text-blue-500">Add Team Member</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="position"
            className="block text-gray-700 font-bold mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="position"
            name="position"
            required
            value={formData.position}
            onChange={handleInputChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow-lg appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="photo" className="block text-gray-700 font-bold mb-2">
            Photo
          </label>
          <input
            type="file"
            id="photo"
            name="photo"
            onChange={handlePhotoChange}
            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Member
        </button>
      </form>
    </div>
  );
};

export default TeamForm;
