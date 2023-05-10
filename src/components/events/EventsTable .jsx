import React, { useState, useEffect } from "react";
import moment from "moment";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const EventsTable = () => {
  const [events, setEvents] = useState([]);
  const [loading, setloading] = useState(true);
  const [message, setmessage] = useState();

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${api_endpoint}/api/event`);
      setEvents(response.data.event);
      setloading(false);
    };
    fetchEvents();
  }, []);

  const handleDeleteExpiredEvents = async (event) => {
    const currentDate = moment(new Date()).format("YYYY-MM-DD");

    try {
      if (currentDate > event.expireDate) {
        const res = await axios.delete(
          `${api_endpoint}/api/event/${event._id}`
        );
        setmessage(res.data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (event) => {
    // handle delete functionality

    const updatedEvents = events.filter((e) => e._id !== event._id);

    setEvents(updatedEvents);

    try {
      const res = await axios.delete(`${api_endpoint}/api/event/${event._id}`);
      setmessage(res.data.message);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      {message && (
        <p className="flex items-center text-green-500">
          <FaCheckCircle className=" pr-1" size={20} /> {message}
        </p>
      )}
      {loading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        <div>
          {" "}
          <h1 className="text-2xl font-bold mb-4">School Events</h1>
          <table className="border-collapse w-full">
            <thead>
              <tr className="bg-gray-200 text-gray-600 border-b border-gray-300">
                <th className="p-3 font-bold uppercase hidden lg:table-cell">
                  Title
                </th>
                <th className="p-3 font-bold uppercase hidden lg:table-cell">
                  Date
                </th>
                <th className="p-3 font-bold uppercase hidden lg:table-cell">
                  Location
                </th>
                <th className="p-3 font-bold uppercase hidden lg:table-cell">
                  Description
                </th>
                <th className="p-3 font-bold uppercase hidden lg:table-cell">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {events.map((event, index) => (
                <tr
                  onLoad={handleDeleteExpiredEvents(event)}
                  key={event._id}
                  className={`hover:bg-gray-100 border-b border-gray-300 ${
                    index === 0 ? "border-t border-gray-300" : ""
                  }`}
                >
                  <td className="p-3">
                    <span className="lg:hidden font-bold">Title: </span>
                    {event.title}
                  </td>
                  <td className="p-3">
                    <span className="lg:hidden font-bold">Date: </span>
                    {moment(event.date).format("MM/DD/YYYY")}
                  </td>
                  <td className="p-3">
                    <span className="lg:hidden font-bold">Location: </span>
                    {event.location}
                  </td>
                  <td className="p-3">
                    <span className="lg:hidden font-bold">Description: </span>
                    {event.description}
                  </td>
                  <td className="p-3 flex">
                    <button
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => handleDelete(event)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default EventsTable;
