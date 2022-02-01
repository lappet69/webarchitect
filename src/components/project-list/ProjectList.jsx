import React from "react";
import ProjectCard from "../project-card/ProjectCard";
import "./projectList.scss";
import { data, categories } from "../../data/data.js";

const ProjectList = () => {
  return (
    <div className="box-content">
      <div className="row">
        <ProjectCard item={data} category={categories} />
      </div>
    </div>
  );
};

export default ProjectList;
