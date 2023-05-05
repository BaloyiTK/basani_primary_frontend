import React from "react";
import AboutCard from "./AboutCard";

const AboutSection = () => {
  return (
    <div className="about-section min-h-screen bg-gray-100 md:py-20 p-4 md:px-10 lg:px-20 xl:px-32">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-8 mb-8">
          About Us
        </h2>
        <div className="md:flex md:justify-center md:space-x-12 ">
          <AboutCard
            imgSrc="./Goal_Mission.jpg"
            title="Our Mission"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis ligula vel lorem varius lacinia."
          />
          <AboutCard
            imgSrc="/values.jpg"
            title="Our Values"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis ligula vel lorem varius lacinia."
          />
          <AboutCard
            imgSrc="/Vision.png"
            title="Our Vision"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mollis ligula vel lorem varius lacinia."
          />
        </div>
      </div>

      {/* School History */}
 
      <div className="  p-2 bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-4 md:w-full">
        <div className=" py-2">
          <h2 className=" flex justify-center text-xl font-bold text-gray-800">Our History</h2>
        </div>
        <div className="bg-gray-100  py-2">
          <p className="text-gray-600 leading-7">
            Our school has a rich history spanning over 100 years. It was
            founded in 1920 by John Smith, a visionary educator who believed in
            the power of education to transform lives.
          </p>
          <p className="text-gray-600 leading-7 mt-3">
            Over the years, our school has grown and evolved, but our commitment
            to academic excellence and community service remains as strong as
            ever. We have produced many successful alumni who have gone on to
            make a positive impact in various fields.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
