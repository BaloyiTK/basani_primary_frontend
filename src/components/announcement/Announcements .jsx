import React from "react";

import { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${api_endpoint}/api/announcement`);
      setAnnouncements(response.data.announcements);
    };
    fetchEvents();
  }, []);


  return (
    <section className="bg-gray-100 bg-cover bg-center announcement-section">
      <div className="container mx-auto bg-white bg-opacity-75 px-8 py-12">
        <h2 className="text-2xl font-bold mb-8">Announcements</h2>
        <ul>
          {announcements && announcements.map((announcement) => (
            <li key={announcement.id} className="mb-8 w-1/2">
              <h3 className="text-lg font-bold">{announcement.title}</h3>
              <p className="text-gray-500 mb-2">{announcement.date}</p>
              <p className="">{announcement.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Announcements;