import React from "react";

const ProjectContext = React.createContext({
  name: "",
  description: "",
  technologies: [],
  process: [],
  techStack: [],
  repo: "",
  link: "",
  images: [],
});

export default ProjectContext;
