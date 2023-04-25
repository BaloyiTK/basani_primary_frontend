import React from 'react';

const AboutCard = ({ imgSrc, title, description }) => {
  return (
    <div className="mt-8 md:mt-0">
      <img
        className="h-64 w-64 object-cover rounded-lg shadow-lg"
        src={imgSrc}
        alt={title}
      />
      <h3 className="text-xl font-medium text-gray-800 mt-4">{title}</h3>
      <p className="text-gray-500 mt-2">{description}</p>
    </div>
  );
};

export default AboutCard;
