import React from "react";
import Jumbotron from "../../components/jumbotron/Jumbotron";
import "./landingpage.scss";

const LandingPage = () => {
  return (
    <div className="row jumbotron">
      <Jumbotron />
      <Jumbotron />
    </div>
  );
};

export default LandingPage;
