import React from "react";

import "./ProjectDescription.scss";

const ProjectDescription = ({
  name,
  techStack,
  repo,
  link,
  images,
  closeProject
}) => (
  <div className="project-description">
    <div className="project-descriotion__menu">
      <div className="wrapper">
        <h2 className="heading-secondary">{name}</h2>
      </div>
    </div>
  </div>
);

export default ProjectDescription;
