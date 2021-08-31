import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {SiGithub} from 'react-icons/si'
const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <div className="contactSection">
          <div className="row justifyConter">
            <div className="col-6">
              <div className="contactSection-logo">
                <p>Phone: +91-8688044823</p>
                <img src="/images/logo.png" alt="logo" />
              </div>
              <ul className="contactCircles">
                <li>
                  <FaLinkedinIn className="contactIcon" />
                </li>
                <li>
                  <SiGithub className="contactIcon" />
                </li>
                <li>
                  <FaInstagram className="contactIcon" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
