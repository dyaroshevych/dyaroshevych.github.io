import React from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";

import Image from "components/UI/Image/Image";

const GeneralInfo = ({ name, description, imageUrlPrefix, imgCaptions }) => (
  <>
    <div className="ProjectFullSection_textContainer">
      <Fade left delay={50} duration={1000}>
        <>
          <span className="ProjectFull_number">1</span>
          <h3>General information</h3>
          <p>{description}</p>
        </>
      </Fade>
    </div>
    <div className="ProjectFullSection_imageContainer">
      <Fade right delay={50}>
        <Image
          projectName={name}
          url={`/img/${imageUrlPrefix}_1.jpg`}
          description={imgCaptions[0]}
        />
      </Fade>
    </div>
  </>
);

const mapStateToProps = (state) => {
  const { name, imageUrlPrefix } = state.projects.projects[
    state.projects.openedProjectIdx
  ];

  return {
    name,
    imageUrlPrefix,
  };
};

export default connect(mapStateToProps)(GeneralInfo);
