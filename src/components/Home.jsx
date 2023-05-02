import React from "react";
import AboutSection from "./about/AboutSection";
import Admissions from "./Admissions";
import Announcements from "./announcement/Announcements ";
import FeaturedProgramsSection from "./programs/FeaturedProgramsSection"
import HeroSection from "./HeroSection";
import Gallery from "./gallery/Gallery";
import Contact from "./communication/Contact";
import Team from "./team/Team";
import Events from "./events/Events";
import AccountBalance from "./communication/AccountBalance";


const Home = () => {
  return (
    
    <React.Fragment>
 
  

      
      <HeroSection />
      <Events/>
      <Announcements/>
      <AboutSection />
      <Gallery/>
      <Contact/>
      <Team/>
      <FeaturedProgramsSection />
      <Admissions />
    </React.Fragment>
  );
};

export default Home;
