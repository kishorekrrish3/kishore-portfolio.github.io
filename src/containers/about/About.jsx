import React from "react";
import "./about.css";
import CV from "../../components/cv/CV"
import Stats from "../../components/stats/Stats";
import Contact from "../../components/contact/Contact";

export const About = () => {
  return (
      <div className="portfolio-page-2">
          <div className="mac-2">
              <CV />
              <Contact />
              <Stats />
          </div>
      </div>
    );
};
    
    
export default About;