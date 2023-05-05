import React, { useState } from 'react';
import Montserrat from 'typeface-montserrat';

const HeroSection = () => {
  const [hasError, setHasError] = useState(false);

  const handleImageError = () => {
    setHasError(true);
  };

  return (
    <div 
      className="relative h-screen flex items-center justify-center"
      style={{ 
        backgroundImage: `url("basani12.png")`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        objectFit: 'cover'
      }}
    >
      {hasError && <p>There was an error loading the image.</p>}
      <div 
        className="absolute inset-0 bg-gray-900 opacity-60 z-0"
        style={{ backdropFilter: "blur(10px)" }}
      ></div>
      <div className="max-w-2xl text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">Welcome to Our School</h1>
        <p className="text-xl md:text-2xl text-white font-montserrat">We provide the best education for our learners.</p>
        <button className="m-1 font-semibold bg-white text-gray-800 rounded-full py-3 px-8 mt-8 hover:text-white hover:bg-maroon-900">Learn More</button>
        <button className="m-1 font-semibold bg-white text-gray-800 rounded-full py-3 px-8 mt-8 hover:text-white hover:bg-maroon-900">Admissions</button>
      </div>
      <img
        src={`${process.env.PUBLIC_URL}/istockphoto-803149430-612x612.jpg`}
        alt="School"
        style={{ display: 'none' }}
        onError={handleImageError}
      />
    </div>
  );
};

export default HeroSection;
