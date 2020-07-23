import React from "react";
import { FaGithub, FaPlus, FaLink } from "react-icons/fa";

import { connect } from "react-redux";
import { openProject } from "../../../../store/actions";

import "./ProjectPreview.scss";

const ProjectPreview = ({
  name,
  techStack,
  repositoryUrl,
  websiteUrl,
  imageUrlPrefix,
  onOpenProject,
  skills,
}) => (
  <section
    className="section ProjectPreview"
    onClick={() => onOpenProject(name)}
  >
    <div
      className="ProjectPreview_background"
      style={{
        backgroundImage: `url(/img/${imageUrlPrefix}_1.jpg)`,
      }}
    ></div>
    <div className="ProjectPreview_info">
      <h3>{name}</h3>
      <ul className="ProjectPreview_skillsList">
        {techStack.map((tech, idx) => (
          <li key={idx} className="ProjectPreview_skillsItem">
            {skills[tech]}
          </li>
        ))}
      </ul>
      <div className="ProjectPreview_links">
        <a
          className="ProjectPreview_link"
          href={repositoryUrl}
          aria-label={`${name} - more info`}
          rel="noopener noreferrer"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <FaGithub />
        </a>
        <div className="ProjectPreview_link" aria-label={`${name} - more info`}>
          <FaPlus />
        </div>
        <a
          className="ProjectPreview_link"
          href={websiteUrl}
          aria-label={`${name} - live website`}
          rel="noopener noreferrer"
          target="_blank"
          onClick={(e) => e.stopPropagation()}
        >
          <FaLink />
        </a>
      </div>
    </div>
  </section>
);

const mapStateToProps = (state) => {
  return {
    skills: state.skills,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOpenProject: (projectName) => dispatch(openProject(projectName)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectPreview);
