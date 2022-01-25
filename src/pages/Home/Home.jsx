import React from "react";
import PropTypes from "prop-types";

import "./home.scss";
import { Link } from "react-router-dom";
import ProjectList from "../../components/project-list/ProjectList";
import Footer from "../../components/footer/Footer";
import Jumbotron from "../../components/jumbotron/Jumbotron";

const Home = (props) => {
  return (
    <>
      <Jumbotron />
          <Footer/>
      <div className="category">
        <div id="wrapper-inner">
          {/* <Link className="category-link" to="#">
            All Project
          </Link> */}
          <hr />
          {/* <ProjectList /> */}
        </div>
      </div>
    </>
  );
};

Home.propTypes = {
  props: PropTypes.object,
};

export default Home;
