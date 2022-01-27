import React from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import "./landingpage.scss";

const LandingPage = () => {
  return (
    <div className="content">
      <div className="row">
        <Jumbotron />
        <Jumbotron />
      </div>
    </div>
  );
};

export default LandingPage;
