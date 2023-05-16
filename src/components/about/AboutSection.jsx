import AboutCard from "./AboutCard";
import React, { useState, useEffect } from "react";
import axios from "axios";
import api_endpoint from "../../utils/config";

const AboutSection = () => {
  const [history, setHistory] = useState();

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await axios.get(`${api_endpoint}/api/history`);
        setHistory(response.data.history[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchHistory();
  }, []);

  return (
    <div className="container w-full mx-auto min-h-fit bg-gray-100 ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mt-8 mb-8">
          About Us
        </h2>
        <div className="md:flex md:justify-center md:space-x-12 ">
          <AboutCard
            imgSrc="./Goal_Mission.jpg"
            title="Mission"
            description={
              <ul>
                <li>
                  <span class="font-bold text-3xl">.</span> We will involve all
                  stakeholders and the larger community to achieve our vision,
                  both practically and financially.
                </li>
                <li>
                  <span class="font-bold text-3xl">.</span> We will strive to
                  fundraise directly from our community and local businesses by
                  requesting donations.
                </li>
              </ul>
            }
          />

          <AboutCard
            imgSrc="/values.jpg"
            title="Values"
            description={
              <ul>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Excellence</span> : Striving for
                  excellence in everything they do, and encouraging students to
                  do the same.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Respect</span> : Valuing respect
                  for oneself, for others, and for the environment.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span> <span></span>{" "}
                  Integrity: Believing in honesty, integrity, and ethical
                  behavior.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Inclusivity</span>: Valuing
                  inclusivity and diversity, and promoting equity and inclusion.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span>{" "}
                  <span className="font-bold">Collaboration</span> : Believing
                  in the power of collaboration and teamwork.
                </li>
              </ul>
            }
          />

          <AboutCard
            imgSrc="/Vision.png"
            title="Vision"
            description={
              <ul>
                <li>
                  <span className="font-bold text-3xl">.</span> To provide
                  excellence in our school, equip pupils with necessary skills,
                  and strive for quality education.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span> To develop
                  learners for the community of Tshiawelo and the larger society
                  of South Africa.
                </li>
                <li>
                  <span className="font-bold text-3xl">.</span> We will develop
                  pupils holistically, addressing their physical, spiritual,
                  mental, and other needs.
                </li>
              </ul>
            }
          />
        </div>
      </div>

      {/* School History */}

      <div class="p-2 bg-white shadow-lg rounded-lg overflow-hidden mx-auto mt-4 md:w-full">
        <div class="py-2">
          <h2 class="flex justify-center text-xl font-bold text-gray-800">
            Our History
          </h2>
        </div>
        <div class="bg-gray-100 py-2">
          {history && (
            <div dangerouslySetInnerHTML={{ __html: history.content }}></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
