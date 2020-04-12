import React from "react";

import {
  AboutSection,
  SkillsSection,
  ContactSection,
} from "../../../components";

import "./InfoContainer.scss";

const InfoContainer = () => (
  <div className="Main_infoContainer">
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </div>
);

export default InfoContainer;
