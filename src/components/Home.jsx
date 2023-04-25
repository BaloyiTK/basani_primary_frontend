import React from "react";
import AboutSection from "./about/AboutSection";
import Admissions from "./Admissions";
import Announcements from "./Announcements ";

import FeaturedProgramsSection from "./FeaturedProgramsSection";

import HeroSection from "./HeroSection";

const Home = () => {
  return (
    
    <React.Fragment>
      
      <HeroSection />
      <Announcements/>
      <AboutSection />
      <FeaturedProgramsSection />
      <Admissions />
    </React.Fragment>
  );
};

export default Home;
