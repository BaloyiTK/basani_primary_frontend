import React from "react";
import EventCard from "./EventCard";
import { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";
import Spinner from "../Spinner";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setloading] = useState(true)

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(`${api_endpoint}/api/event`);
      setEvents(response.data.event);
      setloading(false)
    };
    fetchEvents();
  }, []);

  return (
    <div className="min-h-screen ">

      
      {loading ? <div><Spinner/></div> :   <div className="max-w-screen-lg mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-8">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 w-[95%] mx-auto md:grid-cols-3 gap-8">
          {events &&
            events.map((event, index) => {
              return <EventCard key={index} event={event} />;
            })}
        </div>
      </div> }
    
    </div>
  );
};

export default Events;
