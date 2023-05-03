import React, { useState } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const AnnouncementForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    content: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios
      .post(`${api_endpoint}/api/announcement`, formData)
      .then((res) => {})
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div class="w-1/2 p-6 rounded-lg shadow-md">
      <h2 class="text-lg font-medium mb-4">Create Announcement</h2>
      <form onSubmit={handleSubmit} class="space-y-6">
        <div class="space-y-1">
          <label for="title" class="block text-sm font-medium text-gray-700">
            Title
          </label>
          <div class="relative rounded-md shadow-sm">
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              class="form-input block w-full sm:text-sm sm:leading-5 rounded-md transition duration-150 ease-in-out sm:shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
          </div>
        </div>
        <div class="space-y-1">
          <label for="date" class="block text-sm font-medium text-gray-700">
            Date
          </label>
          <div class="relative rounded-md shadow-sm">
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              required
              class="form-input block w-full sm:text-sm sm:leading-5 rounded-md transition duration-150 ease-in-out sm:shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            />
          </div>
        </div>
        <div class="space-y-1">
          <label for="content" class="block text-sm font-medium text-gray-700">
            Content
          </label>
          <div class="relative rounded-md shadow-sm">
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleInputChange}
              required
              rows="3"
              class="form-textarea block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5 rounded-md sm:shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center justify-center">
          <button
            type="submit"
            class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AnnouncementForm;
