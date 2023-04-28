import React from 'react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div className="text-black h-screen bg-cover bg-center">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="hero-content mb-10 md:mb-0 md:w-1/2 lg:w-3/5">
          <h1 className="hero-title text-4xl lg:text-6xl font-bold leading-tight mb-4 ">
            Welcome to our School
          </h1>
          <p className="hero-subtitle text-lg lg:text-xl font-medium leading-relaxed mb-6">
            Providing quality education since 1985
          </p>
          <Link to="/about" className="btn btn-primary">
            Read more
          </Link>
        </div>
      </div> 
    </div>
  );
};

export default HeroSection;
