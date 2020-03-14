import React from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";
import { Fade, Slide } from "react-reveal";

import { Button, List } from "../";

import "./ProjectDescription.scss";

const ProjectDescription = ({
  name,
  description,
  technologies,
  repo,
  link,
  images,
  closeProject
}) => (
  <Slide bottom duration={500} enter={true} exit={true}>
    <div className="project-description">
      <div className="project-description__menu-container">
        <ul className="wrapper project-description__menu">
          <li>
            <a className="project-description__name" href={link} target="blank">
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
          <div className="project-description__section">
            <div className="project-description__links">
              <Fade bottom>
                <a
                  className="project-description__link"
                  href={repo}
                  target="blank"
                >
                  <Button
                    color="orange"
                    shape="square"
                    text="GitHub repository"
                  />
                </a>
              </Fade>
              <Fade bottom delay={50}>
                <a
                  className="project-description__link"
                  href={link}
                  target="blank"
                >
                  <Button color="orange" shape="square" text="Live Website" />
                </a>
              </Fade>
            </div>
          </div>
          <div className="project-description__section">
            <div className="project-description__section__text-container">
              <Fade left delay={50}>
                <span className="project-description__number">1</span>
                <h3 className="heading-tertiary">General information</h3>
                <p className="paragraph">{description}</p>
              </Fade>
            </div>
            <div className="project-description__section__image-container">
              <Fade right delay={50}>
                <img
                  className="project-description__section__image"
                  src={images[0].url}
                  alt={`${name} 1`}
                />
              </Fade>
            </div>
          </div>
          <div className="project-description__section">
            <div className="project-description__section__image-container">
              <Fade left delay={250}>
                <img
                  className="project-description__section__image"
                  src={images[1].url}
                  alt={`${name} 1`}
                />
              </Fade>
            </div>
            <div className="project-description__section__text-container">
              <Fade right delay={250}>
                <span className="project-description__number">2</span>
                <h3 className="heading-tertiary">Technologies used</h3>
                <List items={technologies} rows={1} />
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Slide>
);

export default ProjectDescription;
