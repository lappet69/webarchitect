import React from "react";
import "./jumbotron.scss";
import heroimg from "../assets/gb-1.jpg";
import heroimg2 from "../assets/gb-2.jpg";
import heroimg3 from "../assets/gb-3.jpg";
import { Carousel } from "react-bootstrap";

const Jumbotron = () => {
  return (
    <div className="col-md">
      <Carousel>
        <Carousel.Item interval={1500}>
          <img
            className="d-block"
            src={heroimg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-home">WE PLAN AND HAVE OUTPUT THAT GIVES AN ADDED VALUE FROM EVERY OUR DESIGN DETAILS</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroimg2}
            alt="second slide"
          />
          <Carousel.Caption>
            <h3 className="text-home">WE PROVIDE AN INNOVATIVE DESIGN WITH UNLIMITED FREEDOM OF THINKING, WITHOUT LOSSING ANY ASPECTS OF ARCHITECTURAL DESIGN</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroimg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3 className="text-home">DESIGN THAT IS EXPECTED TO PROVIDE EXPERIENCE IN EVERY DESIGN PROCESS TO BECOME AN AESTHETIC SPACE</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroimg3}
            alt="fourth slide"
          />
          <Carousel.Caption>
            <h3 className="text-home">FUNCTIONAL, CONTEXTUAL AND EXPERIMENTAL IS THE PRINCIPLES OF THE COLLABORATION PROCESS IN ALL OUR WORKS</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Jumbotron;
