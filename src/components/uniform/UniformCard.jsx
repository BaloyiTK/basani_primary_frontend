import React from 'react';

const UniformCard = ({ uniform }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <img src={uniform.photo} alt={uniform.name} className="w-full h-64 object-cover" />
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2">{uniform.name}</h2>
        <p className="text-gray-600 text-base mb-4">{uniform.description}</p>
        <div className="flex items-center justify-between">
          <p className="text-gray-700 font-bold text-xl">R{uniform.price}</p>
         
        </div>
      </div>
    </div>
  );
};

export default UniformCard;
