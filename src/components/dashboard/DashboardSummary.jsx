import React, { useState, useEffect } from "react";
import {
  FaUsers,
  FaChalkboardTeacher,
  FaCalendarAlt,
  FaSms,
} from "react-icons/fa";
import { AiOutlineContacts, AiOutlinePicture } from "react-icons/ai";
import { BiNews } from "react-icons/bi";


import api_endpoint from "../../utils/config";
import axios from "axios";

const DashboardSummary = () => {
  const [numTeamMembers, setNumTeamMembers] = useState(0);
  const [numLearners, setNumLearners] = useState(0);
  const [numEvents, setNumEvents] = useState(0);
  const [numSmsLeft, setNumSmsLeft] = useState(0);
  const [numContacts, setNumContacts] = useState(0);
  const [numGalleryImages, setNumGalleryImages] = useState(0);
  const [numAnnouncements, setNumAnnouncements] = useState(0);

  useEffect(() => {
    // Fetch the statistics from the API endpoint
    axios
      .get(`${api_endpoint}/api/statistics`)
      .then((response) => {
        setNumTeamMembers(response.data[0].numberOfTeachers);
        setNumLearners(response.data[0].numberOfLearners);
      })
      .catch((error) => {
        console.error("Error fetching statistics: ", error);
      });

    // Fetch the events from the API endpoint
    axios
      .get(`${api_endpoint}/api/event`)
      .then((response) => {
        setNumEvents(response.data.event.length);
      })
      .catch((error) => {
       
      });

    // Fetch the SMS balance from the API endpoint
    axios
      .get(`${api_endpoint}/api/balance`)
      .then((response) => {
        setNumSmsLeft(response.data.balance);
      })
      .catch((error) => {
        console.error("Error fetching SMS balance: ", error);
      });

    // Fetch the number of contacts from the API endpoint
    axios
      .get(`${api_endpoint}/api/contact`)
      .then((response) => {
        setNumContacts(response.data.length);
      })
      .catch((error) => {
        console.error("Error fetching number of contacts: ", error);
      });

    // Fetch gallery images data
    axios
      .get(`${api_endpoint}/api/gallery`)
      .then((response) => {
        setNumGalleryImages(response.data.gallery.length);
      })
      .catch((error) => console.log(error));

    // Fetch announcements data
    axios
      .get(`${api_endpoint}/api/announcement`)
      .then((response) => {
        setNumAnnouncements(response.data.announcements.length);
      })
      .catch((error) =>{});
  }, []);

  return (
    <div className="flex flex-wrap justify-center " id="dashboard">
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-green-500 rounded-lg p-4 flex items-center">
          <div className="flex-shrink-0">
            <FaUsers className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-white font-bold">{numTeamMembers}</p>
            <p className="text-white">Teachers</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-blue-500 rounded-lg p-4 flex items-center">
          <div className="flex-shrink-0">
            <FaChalkboardTeacher className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-white font-bold">{numLearners}</p>
            <p className="text-white">Learners</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-purple-500 rounded-lg p-4 flex items-center">
          <div className="flex-shrink-0">
            <FaCalendarAlt className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-white font-bold">{numEvents}</p>
            <p className="text-white">Events</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-red-500 rounded-lg p-4 flex items-center">
          <div className="flex-shrink-0">
            <FaSms className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-white font-bold">{numSmsLeft}</p>
            <p className="text-white">SMS Remaining</p>
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-yellow-500 rounded-lg p-4 flex items-center">
          <div className="flex-shrink-0">
            <AiOutlineContacts className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-white font-bold">{numContacts}</p>
            <p className="text-white">Contacts</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-zinc-500 rounded-lg p-4 flex items-center">
          <div className="flex-shrink-0">
            <BiNews className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-white font-bold">{numAnnouncements}</p>
            <p className="text-white"> Announcements</p>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/4 p-4">
        <div className="bg-pink-500 rounded-lg p-4 flex items-center">
          <div className="flex-shrink-0">
            <AiOutlinePicture className="text-white text-2xl" />
          </div>
          <div className="ml-4">
            <p className="text-white font-bold">{numGalleryImages}</p>
            <p className="text-white">Images</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardSummary;
