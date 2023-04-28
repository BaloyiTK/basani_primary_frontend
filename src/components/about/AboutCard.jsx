import React from 'react';

const AboutCard = ({ imgSrc, title, description }) => {
  return (
    <div className="mt-8 md:mt-0 text-white">
      <img
        className="h-64 w-64 object-cover rounded-lg shadow-lg"
        src={imgSrc}
        alt={title}
      />
      <h3 className="text-xl text-gray-900 mt-4 font-bold">{title}</h3>
      <p className="text-gray-800 mt-2">{description}</p>
    </div>
  );
};

export default AboutCard;
