import React, { useState } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AnnouncementForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
  });
  const [message, setmessage] = useState()
  const [error, seterror] = useState()

  console.log(message)

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios
      .post(`${api_endpoint}/api/announcement`, formData)
      .then((res) => {setmessage(res.data.message)})
      .catch((error) => {
        seterror(error.response.data.message)
      })
     
  };

  return (
    <div className="w-1/2 p-6 rounded-lg shadow-md">
   {error && (
        <p className="flex items-center text-red-500">
          <FaTimesCircle className=" pr-1" size={20} /> {error}
        </p>
      )}

      {message && (
        <p className="flex items-center text-green-500">
          <FaTimesCircle className=" pr-1" size={20} /> {message}
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-1">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              className="form-input block w-full sm:text-sm sm:leading-5 rounded-md transition duration-150 ease-in-out sm:shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label  className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <div className="relative rounded-md shadow-sm">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              className="form-input block w-full sm:text-sm sm:leading-5 rounded-md transition duration-150 ease-in-out sm:shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
          </div>
        </div>
        <div className="space-y-1">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">
            Content
          </label>
          <div className="relative rounded-md shadow-sm">
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="3"
              className="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 rounded-md sm:shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
  
};

export default AnnouncementForm;
