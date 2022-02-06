import React, { useState } from "react";
import { teams } from "../../data/data";
import "./about.scss";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="content">
      <h2 className="text-center mt-5">{activeIndex===0?'About Us':activeIndex===1? 'Vision':'Misison'}</h2>
      <section
        className={activeIndex === 0 ? "vision lh-base " : "none"}
        index={0}
      >
        <p className="text-about">
          PRADINATA IS A GROUP OF HUMANS WHO LOVE CREATIVE THINGS IN CREATING
          THE AESTHETIC OF A SPACE BASED ON THE KNOWLEDGE AND EXPERIENCE THAT
          HAVE BEEN TAKEN AND FULLY COMMITTED. THAT MAKES US YOUNG PROFESSIONAL
          ARCHITECTS THAT HAVE DEVELOPMENTAL IDEAS, CREATIVE, INNOVATIVE, AND
          STRONG DETERMINATION IN THIS CREATIVE INDUSTRY.
        </p>
        <p>
          ENGAGED IN THE FIELD OF PLANNING AND DESIGN THAT PROVIDE SERVICES FOR
          ARCHITECTURAL DESIGN, INTERIOR DESIGN AND LANDSCAPE DESIGN WHICH IS
          EXPECTED TO PROVIDE THE EXPERIENCE OF EVERY SPACE AND IMPROVE THE
          QUALITY OF HUMAN LIFE IN EACH OF OUR ARCHITECTURAL WORKS.
        </p>
      </section>
      <section
        className={activeIndex === 1 ? "mission lh-base " : "none"}
        index={1}
      >
        <p className="text-vision">
          TOGETHER CREATE A NEW POINT OF VIEW AS A REPRESENTATION OF SPATIAL
          INNOVATION THAT IS SERVED IN EXPERIMENTAL FORM OF FUNCTIONAL AND
          CONTEXTUAL EFFECTIVE DESIGN. SO IN EVERY WORK WE ARE EXPECTED TO BE
          USEFUL FOR OTHERS.
        </p>
      </section>

      <section
        className={activeIndex === 2 ? "value lh-base " : "none"}
        index={2}
      >
        <p className="text-mission">
          DEFINING AESTHETIC VALUE, STRENGTH VALUE, AND FUNCTIONAL VALUE OF A
          SPACE THROUGH DESIGN. THAT BECOME A SOLUTION IN EVERY WORK OF OUR
          WORK.
        </p>
      </section>
      <div className="about-us">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <button
              class={activeIndex === 0 ? "nav-link active" : "nav-link"}
              onClick={() => setActiveIndex(0)}
              aria-current="page"
              href="#"
            >
              About Us
            </button>
          </li>
          <li class="nav-item">
            <button
              class={activeIndex === 1 ? "nav-link active" : "nav-link"}
              onClick={() => setActiveIndex(1)}
              href="#"
            >
              Vision
            </button>
          </li>
          <li class="nav-item">
            <button
              class={activeIndex === 2 ? "nav-link active" : "nav-link"}
              onClick={() => setActiveIndex(2)}
              href="#"
            >
              Mission
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
