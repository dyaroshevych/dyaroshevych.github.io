import React, { useContext } from "react";
import { FaGithub, FaPlus, FaLink } from "react-icons/fa";

import { SkillsContext } from "../../../../../context";

import "./Project.scss";

const Project = ({ name, techStack, repo, link, images, openProject }) => {
  const skills = useContext(SkillsContext);

  return (
    <section className="section Project" onClick={() => openProject(name)}>
      <div
        className="Project_background"
        style={{
          backgroundImage: `url(${images[0].url})`,
        }}
      ></div>
      <div className="Project_info">
        <h3>{name}</h3>
        <ul className="Project_skillsList">
          {techStack.map((tech, idx) => (
            <li key={idx} className="Project_skillsItem">
              {skills[tech]}
            </li>
          ))}
        </ul>
        <div className="Project_links">
          <a
            className="Project_link"
            href={repo}
            aria-label={`${name} - more info`}
            rel="noopener noreferrer"
            target="_blank"
            onClick={(e) => e.stopPropagation()}
          >
            <FaGithub />
          </a>
          <div className="Project_link" aria-label={`${name} - more info`}>
            <FaPlus />
          </div>
          <a
            className="Project_link"
            href={link}
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
};

export default Project;
