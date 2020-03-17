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
          target="blank"
          onClick={e => e.stopPropagation()}
        >
          <FaGithub />
        </a>
        <button className="project__link">
          <FaPlus />
        </button>
        <a
          className="project__link"
          href={link}
          target="blank"
          onClick={e => e.stopPropagation()}
        >
          <FaLink />
        </a>
      </div>
    </div>
  </section>
);

export default Project;
