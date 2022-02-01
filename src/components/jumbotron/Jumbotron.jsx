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
        <Carousel.Item interval={1000}>
          <img
            className="d-block w-100"
            src={heroimg}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroimg2}
            alt="second slide"
          />
          <Carousel.Caption>
            <h3>second slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={heroimg3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Jumbotron;
