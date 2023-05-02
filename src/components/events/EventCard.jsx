import React from 'react';

const EventCard = ({ event }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg overflow-hidden">
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
        <p className="text-red-900 mb-2">{event.date}</p>
        <p className="text-gray-800 mb-4 font-semibold">{event.location}</p>
        <p className="text-gray-700">{event.description}</p>
      </div>
    </div>
  );
}

export default EventCard

