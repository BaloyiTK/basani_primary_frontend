import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const [bgImageLoaded, setBgImageLoaded] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setBgImageLoaded(true);
          observer.unobserve(sectionRef.current);
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const backgroundImage = bgImageLoaded
    ? "istockphoto-803149430-612x612.jpg"
    : "";

  return (
    <div
      className="relative h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        objectFit: "cover",
      }}
      ref={sectionRef}
    >
      <div
        className="absolute inset-0 bg-gray-900 opacity-60 z-0"
        style={{ backdropFilter: "blur(10px)" }}
      ></div>
      <div className="max-w-2xl text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 font-montserrat">
          Welcome to Our School
        </h1>
        <p className="text-xl md:text-2xl text-white font-montserrat">
          We provide the best education for our learners since 1960.
        </p>
        <Link to="/about">
          <button className="m-1 font-semibold bg-white text-gray-800 rounded-full py-3 px-8 mt-8 hover:text-white hover:bg-maroon-900">
            Learn More
          </button>
        </Link>
        <button
          className="m-1 font-semibold bg-white text-gray-800 rounded-full py-3 px-8 mt-8 hover:text-white hover:bg-maroon-900"
          onClick={() => {
            const admissionsSection = document.getElementById("admissions");
            admissionsSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Admissions
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
