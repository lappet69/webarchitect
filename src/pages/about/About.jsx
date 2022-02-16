import React, { useState } from "react";
import { aboutData } from "../../data/data";
import "./about.scss";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="content">
      <div className="row justify-content-center sub-content">
        <h2 className="text-center mt-5 sub-heading">
          {activeIndex === 0
            ? "About Us"
            : activeIndex === 1
            ? "Vision"
            : "Misison"}
        </h2>
        <div 
          className={activeIndex === 0 ? "col-md-9 vision lh-base " : "none"}
          index={0}
        >
          <p className="text-about">
            {aboutData[activeIndex].text}
          </p>
          <p className="text-about">
            
          </p>
        </div>
        <div
          className={activeIndex === 1 ? "col-md-9 mission lh-base " : "none"}
          index={1}
        >
          <p className="text-vision">
          {aboutData[activeIndex].text}
          </p>
        </div>

        <div
          className={activeIndex === 2 ? "col-md-9 value lh-base " : "none"}
          index={2}
        >
          <p className="text-mission">
           {aboutData[activeIndex].text}
          </p>
        </div>
        <div className="about-us">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <button
                className={activeIndex === 0 ? "nav-link active" : "nav-link"}
                onClick={() => setActiveIndex(0)}
                aria-current="page"
                href="#"
              >
                About Us
              </button>
            </li>
            <li className="nav-item">
              <button
                className={activeIndex === 1 ? "nav-link active" : "nav-link"}
                onClick={() => setActiveIndex(1)}
                href="#"
              >
                Vision
              </button>
            </li>
            <li className="nav-item">
              <button
                className={activeIndex === 2 ? "nav-link active" : "nav-link"}
                onClick={() => setActiveIndex(2)}
                href="#"
              >
                Mission
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
