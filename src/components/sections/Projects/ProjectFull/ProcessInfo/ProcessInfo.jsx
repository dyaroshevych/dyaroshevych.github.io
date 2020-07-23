import React from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";

import Image from "../../../../UI/Image/Image";

const ProcessInfo = ({ name, imageUrlPrefix, process, imgCaptions }) => (
  <>
    <div className="ProjectFullSection_textContainer">
      <Fade left delay={150}>
        <>
          <span className="ProjectFull_number">3</span>
          <h3>The process</h3>
          {process.map((item, idx) => (
            <p key={`${name}_3_${idx}`}>{item}</p>
          ))}
        </>
      </Fade>
    </div>
    <div className="ProjectFullSection_imageContainer">
      <Fade right delay={150}>
        <Image
          projectName={name}
          url={`/img/${imageUrlPrefix}_3.jpg`}
          description={imgCaptions[2]}
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

export default connect(mapStateToProps)(ProcessInfo);
