import React from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";

import Button from "components/UI/Button/Button";

import "./Links.scss";

const Links = ({ name, repositoryUrl, websiteUrl }) => {
  return (
    <div className="ProjectFullLinks_list">
      <Fade bottom delay={100} duration={500}>
        <a
          className="ProjectFullLinks_item"
          href={repositoryUrl}
          aria-label={`${name} - GitHub repository`}
          rel="noopener noreferrer"
          target="_blank"
        >
          <Button color="orange" shape="square" text="GitHub repository" />
        </a>
      </Fade>
      <Fade bottom delay={200} duration={500}>
        <a
          className="ProjectFullLinks_item"
          href={websiteUrl}
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

const mapStateToProps = (state) => {
  const { name, repositoryUrl, websiteUrl } = state.projects.projects[
    state.projects.openedProjectIdx
  ];

  return {
    name,
    repositoryUrl,
    websiteUrl,
  };
};

export default connect(mapStateToProps)(Links);
