import React from 'react';

const ProgramCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="h-48 w-full object-cover"
        src={imgSrc}
        alt={title}
      />
      <div className="p-6">
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        <p className="text-gray-500 mt-2">{description}</p>
      </div>
    </div>
  );
};

export default ProgramCard;
