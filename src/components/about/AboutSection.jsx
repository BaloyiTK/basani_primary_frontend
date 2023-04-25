import React from 'react';
import AboutCard from './AboutCard';

const AboutSection = () => {
  return (
    <div className="h-screen bg-gray-100 py-20 px-4 md:px-10 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
          About Us
        </h2>
        <div className="md:flex md:justify-center md:space-x-12">
          <AboutCard
            imgSrc="/images/about-1.jpg"
            title="Our Mission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis ligula vel lorem varius lacinia."
          />
          <AboutCard
            imgSrc="/images/about-2.jpg"
            title="Our Values"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis ligula vel lorem varius lacinia."
          />
          <AboutCard
            imgSrc="/images/about-3.jpg"
            title="Our Vision"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis ligula vel lorem varius lacinia."
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
