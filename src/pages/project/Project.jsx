import React from "react";
import ProjectList from "../../components/project-list/ProjectList";
import Category from "../Category/FilterCategories";
import Footer from "../../components/footer/Footer";
import "./project.scss";

const Project = (props) => {
  return (
    <>
      {/* <Category /> */}

      <ProjectList />
      <Footer />
    </>
  );
};

export default Project;
