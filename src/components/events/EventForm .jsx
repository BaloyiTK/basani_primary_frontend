import { useState } from "react";
import moment from "moment";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const EventForm = () => {
  const [inputData, setInputData] = useState({
    title: "",
    date: moment().format("YYYY-MM-DD"),
    location: "",
    description: "",
  });
  const [message, setmessage] = useState();
  const [error, seterror] = useState();

  console.log(error);
  console.log(message);

  const submitData = async (Data) => {
    try {
      const response = await axios.post(`${api_endpoint}/api/event`, Data, {
        withCredentials: true,
      });

      setmessage(response.data.message);

      // do something with response data
    } catch (error) {
      seterror(error.response.data.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const eventData = {
      title: inputData.title,
      date: moment(inputData.date).format("YYYY-MM-DD"),
      location: inputData.location,
      description: inputData.description,
    };

    submitData(eventData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevInputData) => ({
      ...prevInputData,
      [name]: value,
    }));

    setmessage("");
    seterror("");
  };

  return (
    <div>
      {error && (
        <p className="flex items-center text-red-500">
          <FaTimesCircle className=" pr-1" size={20} /> {error}
        </p>
      )}

      {message && (
        <p className="flex items-center text-green-500">
          <FaCheckCircle className=" pr-1" size={20} /> {message}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title:
          </label>
          <input
            id="title"
            type="text"
            name="title"
            value={inputData.title}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:
          </label>
          <input
            id="date"
            type="date"
            name="date"
            value={inputData.date}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-gray-700 font-bold mb-2"
          >
            Location:
          </label>
          <input
            id="location"
            type="text"
            name="location"
            value={inputData.location}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description:
          </label>
          <textarea
            id="description"
            name="description"
            value={inputData.description}
            onChange={handleChange}
            className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Add Event
          </button>
        </div>
      </form>
    </div>
  );
};

export default EventForm;
