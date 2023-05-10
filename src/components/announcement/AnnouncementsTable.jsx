import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const AnnouncementsTable = () => {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setloading] = useState(true);

  const [message, setmessage] = useState();
  const [error, seterror] = useState();

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`${api_endpoint}/api/announcement`);
        setAnnouncements(response.data.announcements);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleDelete = async (announcement) => {
    const announcementId = announcement._id;
    try {
      const res = await axios.delete(
        `${api_endpoint}/api/announcement/${announcementId}`
      );
      setmessage(res.data.message);

      const updatedAnnouncements = announcements.filter(
        (announcement) => announcement._id !== announcementId
      );

      setAnnouncements(updatedAnnouncements);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-0" id="announcements">
    {error && (
      <p className="flex items-center text-red-500">
        <FaTimesCircle className="pr-1" size={20} /> {error}
      </p>
    )}
  
    {message && (
      <p className="flex items-center text-green-500">
        <FaCheckCircle className="pr-1" size={20} /> {message}
      </p>
    )}
  
    {loading ? (
      <div>
        <Spinner />
      </div>
    ) : (
      <div className="overflow-x-auto">
        {announcements && announcements.length === 0 ? (
          <p>No announcements found.</p>
        ) : (
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Date
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Content
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {announcements &&
                announcements.map((announcement) => (
                  <tr key={announcement._id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">
                        {announcement.title}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-500">
                        {announcement.date}
                      </div>
                    </td>
              <td className="px-6 py-4 whitespace-wrap">
  <div className="text-sm text-gray-500">
    {announcement.content.split(' ').slice(0, 10).join(' ')}
  </div>
</td>

                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md mr-2"
                        onClick={() => handleDelete(announcement)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        )}
      </div>
    )}
  </div>
  
  );
};

export default AnnouncementsTable;
