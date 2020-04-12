import React from "react";
import { Fade, Slide } from "react-reveal";

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

const ProjectDescription = ({
  name,
  description,
  technologies,
  process,
  repo,
  link,
  images,
  closeProject,
}) => (
  <Slide bottom duration={500}>
    <div className="ProjectDescription">
      <Menu {...{ name, link, closeProject }} />
      <div className="ProjectDescription_content">
        <Wrapper>
          <Section>
            <Links {...{ name, repo, link }} />
          </Section>
          <Section>
            <GeneralInfo {...{ name, description, images }} />
          </Section>
          <Section>
            <TechnologiesInfo {...{ name, technologies, images }} />
          </Section>
          <Section>
            <ProcessInfo {...{ name, process, images }} />
          </Section>
          <Section>
            <Links {...{ name, repo, link }} />
          </Section>
        </Wrapper>
      </div>
    </div>
  </Slide>
);

export default ProjectDescription;
