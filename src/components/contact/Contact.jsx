import React from "react";
import "./contact.css";
import {  FaLocationArrow,FaPhoneAlt,FaEnvelope } from "react-icons/fa";


export const Contact = () => {
  return (
    <div className="portfolio-component-2">
      <div id="content">
        <div id="languages">
          <h1 id="languages-heading">Languages Known</h1>
          <div id="languages-list">
            <p id="eng">English</p>
            <p id="hin">Hindi</p>
            <p id="tam">Tamil</p>
          </div>
        </div>
        <div id="contact">
          <h1 id="contact-heading">Contact</h1>
          <div id="contact-content"> 
          <div id="phone">
            <FaPhoneAlt id="phone-icon"/>
            <p id="phone-text">+91 9994890617</p>
          </div>
          <div id="email">
            <FaEnvelope id="email-icon"/>
            <p id="email-text">kidkrrish3@gmail.com</p>
          </div>
          <div id="location">
            <FaLocationArrow id="location-icon"/>
            <p id="location-text">Chennai , India</p>
          </div>
          </div>
        </div>
      </div>
    </div>
    );
};
    
    
export default Contact;