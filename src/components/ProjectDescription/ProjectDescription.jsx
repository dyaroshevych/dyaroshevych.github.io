import React from "react";
import { Slide } from "react-reveal";

import { Wrapper } from "../../hoc";
import {
  Menu,
  GeneralInfo,
  TechnologiesInfo,
  ProcessInfo,
  Links,
  Section,
} from "./";

import "./ProjectDescription.scss";

const ProjectDescription = () => {
  const sections = [
    <Links />,
    <GeneralInfo />,
    <TechnologiesInfo />,
    <ProcessInfo />,
    <Links />,
  ];
  return (
    <Slide bottom duration={500}>
      <div className="ProjectDescription">
        <Menu />
        <div className="ProjectDescription_content">
          <Wrapper>
            {sections.map((section) => (
              <Section>{section}</Section>
            ))}
          </Wrapper>
        </div>
      </div>
    </Slide>
  );
};

export default ProjectDescription;
