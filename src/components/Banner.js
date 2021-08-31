import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import {SiGithub} from 'react-icons/si'
const Banner = () => {
  const [state] = React.useState({
    title: "I am Sairam Nomula",
    text:
      "Web Developer",
    image: "/images/Hero.png",
  });
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="header__content">
              <div className="header__section">
                <ul className="header__ul">
                  <li>
                    <SiGithub className="headerIcon" />
                  </li>
                  <li>
                    <FaLinkedinIn className="headerIcon" />
                  </li>
                  <li>
                    <FaInstagram className="headerIcon" />
                  </li>
                </ul>
                <h1>{state.title}</h1>
                <p>{state.text}</p>
                <div className="header__buttons">
                  <a href="https://www.linkedin.com/in/sairam-nomula-8aa752192/" className="btn btn-outline">
                    Hire me!
                  </a>
                  <a href="https://github.com/SairamNomula" className="btn btn-outline">
                    Github 
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="banner__img">
              <img src={state.image} alt="man" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
