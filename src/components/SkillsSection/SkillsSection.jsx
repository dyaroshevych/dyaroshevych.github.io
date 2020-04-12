import React, { useState, useContext } from "react";
import { Fade } from "react-reveal";

import { SkillsContext } from "../../context";
import { Section } from "../../hoc";
import { List } from "../";

import "./SkillsSection.scss";

const SkillsSection = () => {
  const skills = useContext(SkillsContext);

  const getSkillsColumns = () => (window.innerWidth < 420 ? 2 : 3);
  const [skillsColumns, setSkillsColumns] = useState(getSkillsColumns());

  window.addEventListener("resize", () => {
    setSkillsColumns(getSkillsColumns());
  });

  return (
    <Section className="SkillsSection" heading="My skills">
      <Fade bottom delay={100} duration={500}>
        <List items={skills} columns={skillsColumns} />
      </Fade>
    </Section>
  );
};

export default SkillsSection;
