import React, { useContext } from "react";
import { Fade } from "react-reveal";

import { ProjectContext } from "../../../context";

import { Button } from "../../";

import "./Links.scss";

const Links = () => {
  const { name, repo, link } = useContext(ProjectContext);

  return (
    <div className="ProjectDescription_links">
      <Fade bottom delay={100} duration={500}>
        <a
          className="ProjectDescription_link"
          href={repo}
          aria-label={`${name} - GitHub repository`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button color="orange" shape="square" text="GitHub repository" />
        </a>
      </Fade>
      <Fade bottom delay={200} duration={500}>
        <a
          className="ProjectDescription_link"
          href={link}
          aria-label={`${name} - live website`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button color="orange" shape="square" text="Live Website" />
        </a>
      </Fade>
    </div>
  );
};

export default Links;
