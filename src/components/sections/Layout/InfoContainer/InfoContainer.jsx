import React from "react";

import { AboutSection, SkillsSection, ContactSection } from "../../";

import "./InfoContainer.scss";

const InfoContainer = () => (
  <div className="Layout_infoContainer">
    <AboutSection />
    <SkillsSection />
    <ContactSection />
  </div>
);

export default InfoContainer;
