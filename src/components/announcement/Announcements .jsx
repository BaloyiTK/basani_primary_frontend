import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";
import InfoMessage from "../InfoMessage ";

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
    <section
      className="container w-[95%] mx-auto announcement-section min-h-fit my-10 flex items-center justify-center"
      style={{
        backgroundImage: "linear-gradient(135deg, #FCCF31 10%, #F55555 100%)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto bg-white bg-opacity-75 py-12">
        <h2 className="flex justify-center text-3xl font-bold mb-8">
          Announcements
        </h2>

        {announcements && announcements.length === 0 ? (
          <div className="flex justify-center">
            <InfoMessage message="There are currently no announcements available." />
          </div>
        ) : (
          <ul>
            {announcements &&
              announcements.map((announcement) => (
                <li key={announcement.id} className="mb-8 md:w-1/2">
                  <h3 className="text-lg font-bold">{announcement.title}</h3>
                  <p className="text-gray-500 mb-2">{announcement.date}</p>
                  <p className="">{announcement.content}</p>
                </li>
              ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default Announcements;
