import React from 'react';
import { Link } from 'react-router-dom';
//import heroImage from './hero-image.jpg';

const HeroSection = () => {
  return (
    <div className="text-white hero-section h-screen bg-maroon-00 py-20 px-4 md:px-10 lg:px-20 xl:px-32">
      {/* <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="hero-content mb-10 md:mb-0 md:w-1/2 lg:w-3/5">
          <h1 className="hero-title text-4xl lg:text-6xl font-bold leading-tight mb-4">
            Welcome to our School
          </h1>
          <p className="hero-subtitle text-lg lg:text-xl font-medium leading-relaxed mb-6">
            Providing quality education since 1985
          </p>
          <Link to="/about" className="btn btn-primary">
            Read more
          </Link>
        </div>
        <div className="hero-image md:w-1/2 lg:w-2/5">
          <img src={""} alt="Hero" className="w-full" />
        </div>
      </div> */}
    </div>
  );
};

export default HeroSection;
