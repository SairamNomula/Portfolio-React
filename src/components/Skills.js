import React from "react";
import {
  FaReact,
  FaPython,
  FaRobot,
} from "react-icons/fa";
import {BiCodeAlt,BiCodeCurly} from "react-icons/bi"
const Skills = () => {
  const [header] = React.useState({
    mainHeader: "Skills",
  });
  const [state] = React.useState([
    {
      id: 1,
      icon: <BiCodeAlt className="commonIcons" />,
      heading: "HTML, CSS & Js",
    },
    {
      id: 2,
      icon: <FaReact className="commonIcons" />,
      heading: "React",
    },
    {
      id: 3,
      icon: <FaPython className="commonIcons" />,
      heading: "Python",
    },
    {
      id: 4,
      icon: <BiCodeCurly className="commonIcons" />,
      heading: "C & C++",
    },
    {
      id: 5,
      icon: <FaRobot className="commonIcons" />,
      heading: "Machine Learning",
    }
    
  ]);
  return (
    <div className="Skills">
      <div className="container">
        <div className="Skills__header">
          <div className="common">
            <h3 className="heading">{header.mainHeader}</h3>
            <h1 className="mainHeader">{header.subHeading}</h1>
            <p className="mainContent">{header.text}</p>
            <div className="commonBorder"></div>
          </div>

          <div className="row bgMain">
            {state.map((info) => (
              <div className="col-4 bgMain">
                <div className="Skills__box">
                  {info.icon}
                  <div className="Skills__box-header">{info.heading}</div>
                  <div className="Skills__box-p">{info.text}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
