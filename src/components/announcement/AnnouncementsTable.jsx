import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const AnnouncementsTable = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await axios.get(`${api_endpoint}/api/announcement`);
        setAnnouncements(response.data.announcements);
      } catch (error) {
        console.log(error);
      }
    };
    fetchAnnouncements();
  }, []);

  const handleDelete = async (announcement) => {
    const announcementId = announcement._id;
    try {
      await axios.delete(`${api_endpoint}/api/announcement/${announcementId}`);

      const updatedAnnouncements = announcements.filter(
        (announcement) => announcement._id !== announcementId
      );

      setAnnouncements(updatedAnnouncements);
     
    } catch (error) {
      console.log(error);
 
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-medium mb-4">Announcements</h2>
      {announcements && announcements.length === 0 ? (
        <p>No announcements found.</p>
      ) : (
        <table className="w-full border-collapse">
          <thead>
            <tr className="font-bold text-lg">
              <th className="border-b-2 border-gray-300 py-2 text-left  text-gray-700 ">
                Title
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-left text-gray-700">
                Date
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-left  text-gray-700">
                Contetnt
              </th>
              <th className="border-b-2 border-gray-300 py-2 text-left text-gray-700">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {announcements &&
              announcements.map((announcement) => (
                <tr key={announcement._id}>
                  <td className="border-b border-gray-300 py-2 text-gray-700">
                    {announcement.title}
                  </td>
                  <td className="border-b border-gray-300 py-2 text-gray-700">
                    {announcement.date}
                  </td>
                  <td className="border-b border-gray-300 py-2 w-1/2 text-gray-700">
                    {announcement.content}
                  </td>
                  <td className="border-b border-gray-300 py-2 text-gray-700">
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
  );
};

export default AnnouncementsTable;
