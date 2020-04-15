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

const ProjectDescription = () => (
  <Slide bottom duration={500}>
    <div className="ProjectDescription">
      <Menu />
      <div className="ProjectDescription_content">
        <Wrapper>
          <Section>
            <Links />
          </Section>
          <Section>
            <GeneralInfo />
          </Section>
          <Section>
            <TechnologiesInfo />
          </Section>
          <Section>
            <ProcessInfo />
          </Section>
          <Section>
            <Links />
          </Section>
        </Wrapper>
      </div>
    </div>
  </Slide>
);

export default ProjectDescription;
