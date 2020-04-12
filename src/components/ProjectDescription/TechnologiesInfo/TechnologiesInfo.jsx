import React from "react";
import { Fade } from "react-reveal";

import { Image, List } from "../../";

import "./TechnologiesInfo.scss";

const TechnologiesInfo = ({ name, technologies, images }) => (
  <>
    <div className="ProjectDescription_sectionImageContainer">
      <Fade left delay={150}>
        <Image projectName={name} {...images[1]} />
      </Fade>
    </div>
    <div className="ProjectDescription_sectionTextContainer">
      <Fade right delay={150}>
        <>
          <span className="ProjectDescription_number">2</span>
          <h3 className="heading___tertiary">Technologies used</h3>
          <div className="ProjectDescription_technologiesContainer">
            {technologies.map((list, idx) => (
              <div
                className="ProjectDescription_listContainer"
                key={`${name}_${idx}_${list.name}`}
              >
                {list.name && (
                  <h4 className="heading___quarternary">{list.name}:</h4>
                )}
                <List items={list.technologies} columns={1} />
              </div>
            ))}
          </div>
        </>
      </Fade>
    </div>
  </>
);

export default TechnologiesInfo;
