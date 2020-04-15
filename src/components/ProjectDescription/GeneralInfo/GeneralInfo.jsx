import React, { useContext } from "react";
import { Fade } from "react-reveal";

import { ProjectContext } from "../../../context";

import { Image } from "../../";

const GeneralInfo = () => {
  const { name, description, images } = useContext(ProjectContext);

  return (
    <>
      <div className="ProjectDescription_sectionTextContainer">
        <Fade left delay={50} duration={1000}>
          <>
            <span className="ProjectDescription_number">1</span>
            <h3 className="heading___tertiary">General information</h3>
            <p className="paragraph">{description}</p>
          </>
        </Fade>
      </div>
      <div className="ProjectDescription_sectionImageContainer">
        <Fade right delay={50}>
          <Image projectName={name} {...images[0]} />
        </Fade>
      </div>
    </>
  );
};

export default GeneralInfo;
