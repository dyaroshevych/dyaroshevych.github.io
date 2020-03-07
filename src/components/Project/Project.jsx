import React from "react";
import { FaGithub } from "react-icons/fa";

import { skills } from "../../data";

import "./Project.scss";

const Project = ({ name, type, techStack, image }) => (
  <section
    className="section project"
    style={{
      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})`
    }}
  >
    <div className="project__info">
      <h3 className="heading-tertiary project__heading">{name}</h3>
      <span className="subheading-tertiary">{type}</span>
      <ul className="project__skills-list">
        {techStack.map((tech, idx) => (
          <li key={idx} className="project__skills-item">
            {skills[tech]}
          </li>
        ))}
      </ul>
      <div className="project__links">
        <a>
          <FaGithub />
          Repo
        </a>
      </div>
    </div>
  </section>
);

export default Project;
