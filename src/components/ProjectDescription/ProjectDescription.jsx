import React from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { Fade, Slide } from "react-reveal";

import { Button, Image, List } from "../";

import "./ProjectDescription.scss";

const ProjectDescription = ({
  name,
  description,
  technologies,
  process,
  repo,
  link,
  images,
  closeProject
}) => {
  const linksContainer = (
    <div className="project-description__links">
      <Fade bottom delay={100} duration={500}>
        <a className="project-description__link" href={repo} target="blank">
          <Button color="orange" shape="square" text="GitHub repository" />
        </a>
      </Fade>
      <Fade bottom delay={200} duration={500}>
        <a className="project-description__link" href={link} target="blank">
          <Button color="orange" shape="square" text="Live Website" />
        </a>
      </Fade>
    </div>
  );
  return (
    <Slide bottom duration={500}>
      <div className="project-description">
        <div className="project-description__menu-container">
          <ul className="wrapper project-description__menu">
            <li>
              <a
                className="project-description__name"
                href={link}
                target="blank"
              >
                <h2 className="heading-secondary">
                  {name}
                  <FaExternalLinkAlt className="project-description__name-icon" />
                </h2>
              </a>
            </li>
            <li>
              <button>
                <FaTimes
                  className="project-description__close-button"
                  onClick={() => closeProject()}
                />
              </button>
            </li>
          </ul>
        </div>
        <div className="project-description__content">
          <div className="wrapper">
            <div className="project-description__section">{linksContainer}</div>
            <div className="project-description__section">
              <div className="project-description__section__text-container">
                <Fade left delay={50} duration={1000}>
                  <>
                    <span className="project-description__number">1</span>
                    <h3 className="heading-tertiary">General information</h3>
                    <p className="paragraph">{description}</p>
                  </>
                </Fade>
              </div>
              <div className="project-description__section__image-container">
                <Fade right delay={50}>
                  <Image projectName={name} {...images[0]} />
                </Fade>
              </div>
            </div>
            <div className="project-description__section">
              <div className="project-description__section__image-container">
                <Fade left delay={150}>
                  <Image projectName={name} {...images[1]} />
                </Fade>
              </div>
              <div className="project-description__section__text-container">
                <Fade right delay={150}>
                  <>
                    <span className="project-description__number">2</span>
                    <h3 className="heading-tertiary">Technologies used</h3>
                    <div className="project-description__technologies-container">
                      {technologies.map((list, idx) => (
                        <div
                          className="project-description__list-container"
                          key={`${name}_${idx}_${list.name}`}
                        >
                          {list.name && (
                            <h4 className="heading-quarternary">
                              {list.name}:
                            </h4>
                          )}
                          <List items={list.technologies} columns={1} />
                        </div>
                      ))}
                    </div>
                  </>
                </Fade>
              </div>
            </div>
            <div className="project-description__section">
              <div className="project-description__section__text-container">
                <Fade left delay={150}>
                  <>
                    <span className="project-description__number">3</span>
                    <h3 className="heading-tertiary">The process</h3>
                    {process.map((item, idx) => (
                      <p className="paragraph" key={`${name}_3_${idx}`}>
                        {item}
                      </p>
                    ))}
                  </>
                </Fade>
              </div>
              <div className="project-description__section__image-container">
                <Fade right delay={150}>
                  <Image projectName={name} {...images[2]} />
                </Fade>
              </div>
            </div>
            <div className="project-description__section">{linksContainer}</div>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default ProjectDescription;
