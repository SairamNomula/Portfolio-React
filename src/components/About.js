import React from "react";

const About = () => {
  const [header] = React.useState({
    subHeader: "About Me",
  });
  return (
    <div className="about">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <p className="mainContent">{header.text}</p>
          <div className="commonBorder"></div>
        </div>
        <div className="row  h-650 alignCenter">
          <div className="col-6">
            <div className="about__img">
              <img src="/images/Me.png" alt="man" />
            </div>
          </div>
          <div className="col-6">
            <div className="about__info">
              <h1>Hey there!</h1>
              <div className="about__info-p1">
              I'am Venkata Naga Sai Ram Nomula.
              </div>
              <div className="about__info-p2">
              I'm a student at SRM University, Kattankulathur. I'm intrested in Web Development. I'm a Machine Learning Enthusiast. I'm excited to make the leap and continue refining my skills with the right company.
              </div>
              <div className="info__contacts">
                <div className="row">
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
