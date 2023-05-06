import React, { useRef, useEffect, useState } from "react";
import api_endpoint from "../utils/config";
import axios from "axios";

const StatisticsSection = () => {
  const [numChildren, setnumChildren] = useState();
  const [numTeachers, setnumTeachers] = useState();

  const [showCount, setShowCount] = useState(false);
  const [childCount, setChildCount] = useState(0);
  const [teachCount, setTeachCount] = useState(0);

  const numRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setShowCount(true);
        } else {
          setShowCount(false);
          setChildCount(0);
          setTeachCount(0);
        }
      });
    });
    observer.observe(numRef.current);
    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    let intervalId;
    if (showCount) {
      intervalId = setInterval(() => {
        setChildCount((prevCount) => {
          if (prevCount < numChildren) {
            return prevCount + 1;
          } else {
            return prevCount;
          }
        });

        setTeachCount((prevCount) => {
          if (prevCount < numTeachers) {
            return prevCount + 1;
          } else {
            return prevCount;
          }
        });
      }, 20);
    }
    return () => clearInterval(intervalId);
  }, [showCount]);

  const fetchStats = async () => {
    try {
      const res = await axios.get(`${api_endpoint}/api/statistics`);

      setnumChildren(res.data[0].numberOfLearners);
      setnumTeachers(res.data[0].numberOfTeachers);

      //setloading(false);
      // setmessage(res.data.message);
    } catch (err) {
      console.error(err);
    }
  };

  // Call the fetchUsers function when the component mounts
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <section className="bg-blue-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:mt-10 grid grid-cols-1 gap-5 md:gap-10 md:grid-cols-3">
          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Number of Learners
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {showCount ? childCount : 0}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Number of Teachers
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      {showCount ? teachCount : 0}
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    Grades
                  </dt>
                  <dd className="flex items-baseline">
                    <div className="text-2xl font-semibold text-gray-900">
                      <p>R-7</p>
                    </div>
                  </dd>
                </div>
              </div>
            </div>
          </div>
          {/* more stats here */}
        </div>
        <div ref={numRef}></div>
      </div>
    </section>
  );
};

export default StatisticsSection;
