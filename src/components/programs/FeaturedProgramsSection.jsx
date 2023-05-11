import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const FeaturedProgramsSection = () => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchPrograms = async () => {
      const response = await axios.get(`${api_endpoint}/api/program`);
      setPrograms(response.data.programs);
    };
    fetchPrograms();
  }, []);

  return (
    <div>
      <div id="programe" className="min-h-fit container w-[90%] mx-auto mt-10 ">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Featured Programs
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            We offer a range of exciting programs for our learners to help them
            develop their skills and interests.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program) => (
            <div className="group relative" key={program._id}>
              <div className="overflow-hidden rounded-lg">
                <img
                  src={program.photo}
                  alt={program.title}
                  className="w-full h-64 object-center object-cover transform group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="mt-3">
                <h3 className="text-lg font-bold text-gray-900">
                  {program.title}
                </h3>
                <p className="mt-2 text-gray-500">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedProgramsSection;
