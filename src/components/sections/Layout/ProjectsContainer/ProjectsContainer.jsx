import React from "react";
import { Fade } from "react-reveal";

import { Project } from "./";

import "./ProjectsContainer.scss";

const ProjectsContainer = ({ projects, openProject }) => {
  return (
    <div className="Layout_projectsContainer">
      <div className="Layout_projectsHeading">Latest Projects</div>
      {projects.map((project, idx) => (
        <Fade bottom duration={500} key={idx}>
          <Project {...{ ...project, openProject }} />
        </Fade>
      ))}
    </div>
  );
};

export default ProjectsContainer;
