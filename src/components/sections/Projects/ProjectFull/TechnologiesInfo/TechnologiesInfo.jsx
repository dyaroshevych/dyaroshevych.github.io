import React from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";

import Image from "components/UI/Image/Image";
import List from "components/UI/List/List";

import "./TechnologiesInfo.scss";

const TechnologiesInfo = ({
  name,
  imageUrlPrefix,
  technologies,
  imgCaptions,
}) => (
  <>
    <div className="ProjectFullSection_imageContainer">
      <Fade left delay={150}>
        <Image
          projectName={name}
          url={`/img/${imageUrlPrefix}_2.jpg`}
          description={imgCaptions[1]}
        />
      </Fade>
    </div>
    <div className="ProjectFullSection_textContainer">
      <Fade right delay={150}>
        <>
          <span className="ProjectFull_number">2</span>
          <h3>Technologies used</h3>
          <div className="ProjectFullTechnologies">
            {technologies.map((list, idx) => (
              <div
                className="ProjectFullTechnologies_listContainer"
                key={`${name}_${idx}_${list.name}`}
              >
                {list.name && <h4>{list.name}:</h4>}
                <List items={list.technologies} columns={1} />
              </div>
            ))}
          </div>
        </>
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

export default connect(mapStateToProps)(TechnologiesInfo);
