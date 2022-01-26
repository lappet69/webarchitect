import React from "react";
import PropTypes from "prop-types";

import "./home.scss";

import Footer from "../../components/footer/Footer";
import Jumbotron from "../../components/jumbotron/Jumbotron";

const Home = (props) => {
  return (
    <>
      <Jumbotron />
      <Footer />
      <div className="category">
        <div id="wrapper-inner">
          <hr />
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  props: PropTypes.object,
};

export default Home;
