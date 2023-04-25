import React from 'react';
import ProgramCard from './ProgramCard';

const FeaturedProgramsSection = () => {
  return (
    <div >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Featured Programs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We offer a range of exciting programs for our learners to help them develop their skills and interests.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={""}
                alt="Math program"
                className="w-full h-full object-center object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">
                Math Program
              </h3>
              <p className="mt-2 text-gray-500">
                Our math program is designed to help students develop strong problem-solving skills and a love for math.
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={""}
                alt="Science program"
                className="w-full h-full object-center object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">
                Science Program
              </h3>
              <p className="mt-2 text-gray-500">
                Our science program helps students explore the natural world and develop their critical thinking skills.
              </p>
            </div>
          </div>
          <div className="group relative">
            <div className="overflow-hidden rounded-lg">
              <img
                src={""}
                alt="Art program"
                className="w-full h-full object-center object-cover transform group-hover:scale-105 transition-all duration-500"
              />
            </div>
            <div className="mt-3">
              <h3 className="text-lg font-medium text-gray-900">
                Art Program
              </h3>
              <p className="mt-2 text-gray-500">
                Our art program helps students unleash their creativity and develop their artistic skills through a variety of mediums.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default FeaturedProgramsSection;
