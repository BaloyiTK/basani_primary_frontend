import React from 'react';

const VacancyCard = ({ vacancy }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{vacancy.title}</h3>
        <p className="text-gray-600 mb-2">{vacancy.location}</p>
        <p className="text-gray-600 mb-4">{vacancy.salary}</p>
        <p className="text-gray-800">{vacancy.description}</p>
      </div>
      <div className="bg-gray-100 py-2 px-4">
        <a href="#" className="text-blue-600 font-semibold">Apply now</a>
      </div>
    </div>
  );
};

export default VacancyCard;
