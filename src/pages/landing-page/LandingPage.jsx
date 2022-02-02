import React, { useEffect } from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import "./landingpage.scss";

import heroimg2 from "../../components/assets/bg-3.jpg";
import heroimg1 from "../../components/assets/bg-2.jpg";
import { Carousel } from "react-bootstrap";
import axios from "axios";


const LandingPage = () => {
  
  
  return (
    <div className="content">
      <div className="row d-flex">
        {/* <Jumbotron /> */}
        <Jumbotron />
        {/* <div className="col-md-6">
          <img src={heroimg1} alt="" />
        </div>
        <div className="col-md-6">
          <img src={heroimg2} alt="" />
        </div> */}
      </div>
    </div>
  );
};

export default LandingPage;
