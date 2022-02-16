import React from "react";
import "./jumbotron.scss";
import { Carousel } from "react-bootstrap";
import { homeData } from "../../data/data";
const Jumbotron = () => {
  return (
    <div className="col-md">
      <Carousel>
        {homeData.map((dt) => (
          <Carousel.Item interval={1500} key={dt.id}>
            <img
              className="d-block"
              src={dt.imgSrc}
              alt={`slide ${dt.id + 1}`}
            />
            <Carousel.Caption>
              <h3 className="text-home">{dt.text}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default Jumbotron;
