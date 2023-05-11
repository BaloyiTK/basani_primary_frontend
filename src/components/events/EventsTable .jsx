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
    <div id="events" className="bg-white rounded-lg shadow-lg overflow-hidden">
    {message && (
      <p className="p-4 text-green-600 flex items-center space-x-2">
        <svg className="h-5 w-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
        <span>{message}</span>
      </p>
    )}
    {loading ? (
      <div className="flex justify-center items-center p-8">
        <Spinner />
      </div>
    ) : (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">School Events</h1>
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="w-full block md:table divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Title
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Location
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Description
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {events.map((event, index) => (
                    <tr
                      onLoad={handleDeleteExpiredEvents(event)}
                      key={event._id}
                      className={`${index === 0 ? "border-t" : ""}`}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{event.title}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{moment(event.date).format("MM/DD/YYYY")}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{event.location}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{event.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleDelete(event)}>Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              </div>
        </div>
      </div>
    </div>
  )}
</div>

  
  
  );
};

export default EventsTable;
