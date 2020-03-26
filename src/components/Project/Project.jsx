import React from "react";
import { FaGithub, FaPlus, FaLink } from "react-icons/fa";

import { skills } from "../../data";
import "./Project.scss";

const Project = ({ name, techStack, repo, link, images, openProject }) => (
  <section className="section project" onClick={() => openProject(name)}>
    <div
      className="project__background"
      style={{
        backgroundImage: `url(${images[0].url})`
      }}
    ></div>
    <div className="project__info">
      <h3 className="heading-tertiary project__heading">{name}</h3>
      <ul className="project__skills-list">
        {techStack.map((tech, idx) => (
          <li key={idx} className="project__skills-item">
            {skills[tech]}
          </li>
        ))}
      </ul>
      <div className="project__links">
        <a
          className="project__link"
          href={repo}
          aria-label={`${name} - more info`}
          rel="noopener noreferrer"
          target="_blank"
          onClick={e => e.stopPropagation()}
        >
          <FaGithub />
        </a>
        <div className="project__link" aria-label={`${name} - more info`}>
          <FaPlus />
        </div>
        <a
          className="project__link"
          href={link}
          aria-label={`${name} - live website`}
          rel="noopener noreferrer"
          target="_blank"
          onClick={e => e.stopPropagation()}
        >
          <FaLink />
        </a>
      </div>
    </div>
  </section>
);

export default Project;
