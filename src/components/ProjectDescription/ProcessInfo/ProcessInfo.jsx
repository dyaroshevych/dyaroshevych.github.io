import React from "react";
import { Fade } from "react-reveal";

import { Image } from "../../";

const ProcessInfo = ({ name, process, images }) => (
  <>
    <div className="ProjectDescription_sectionTextContainer">
      <Fade left delay={150}>
        <>
          <span className="ProjectDescription_number">3</span>
          <h3 className="heading___tertiary">The process</h3>
          {process.map((item, idx) => (
            <p className="paragraph" key={`${name}_3_${idx}`}>
              {item}
            </p>
          ))}
        </>
      </Fade>
    </div>
    <div className="ProjectDescription_sectionImageContainer">
      <Fade right delay={150}>
        <Image projectName={name} {...images[2]} />
      </Fade>
    </div>
  </>
);

export default ProcessInfo;
