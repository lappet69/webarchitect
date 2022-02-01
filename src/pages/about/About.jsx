import React, { useState } from "react";
import { teams } from "../../data/data";
import "./about.scss";

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="content">
      <div className="about-us">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <button
              class={activeIndex === 0 ? "nav-link active" : "nav-link"}
              onClick={() => setActiveIndex(0)}
              aria-current="page"
              href="#"
            >
              Vision
            </button>
          </li>
          <li class="nav-item">
            <button
              class={activeIndex === 1 ? "nav-link active" : "nav-link"}
              onClick={() => setActiveIndex(1)}
              href="#"
            >
              Mission
            </button>
          </li>
          <li class="nav-item">
            <button
              class={activeIndex === 2 ? "nav-link active" : "nav-link"}
              onClick={() => setActiveIndex(2)}
              href="#"
            >
              Value
            </button>
          </li>
        </ul>
      </div>

      <section
        className={activeIndex === 0 ? "vision lh-base " : "none"}
        index={0}
      >
        <p className="fs-2 fw-bold">
          Vision Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Laboriosam, ipsum.
        </p>
      </section>
      <section
        className={activeIndex === 1 ? "mission lh-base " : "none"}
        index={1}
      >
        <p className="fs-2 fw-bold">
          Mission Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Mollitia, quam nulla?
        </p>
      </section>

      <section
        className={activeIndex === 2 ? "value lh-base " : "none"}
        index={2}
      >
        <p className="fs-2 fw-bold">
          Value Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
          numquam voluptatibus laudantium voluptates!
        </p>
      </section>
    </div>
  );
};

export default About;
