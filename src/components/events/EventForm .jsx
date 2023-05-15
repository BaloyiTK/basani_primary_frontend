import { useState } from "react";
import moment from "moment";
import axios from "axios";
import api_endpoint from "../../utils/config";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import RichTextEditor from "../RichTextEditor";

const EventForm = () => {
  const [inputData, setInputData] = useState({
    title: "",
    date: moment().format("YYYY-MM-DD"),
    location: "",
    description: "",
  });
  const [message, setmessage] = useState();
  const [error, seterror] = useState();
  const [addingEvent, setaddingEvent] = useState()


  const submitData = async (Data) => {
    try {
      const response = await axios.post(`${api_endpoint}/api/event`, Data, {
        withCredentials: true,
      });

      setmessage(response.data.message);
      setaddingEvent(false)

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
    setaddingEvent(true)

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

{addingEvent && (
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
          <p className="">Adding event...</p>
        </div>
      )}
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
          <RichTextEditor/>
        
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
