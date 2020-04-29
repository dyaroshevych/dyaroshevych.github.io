import React from "react";
import { Fade } from "react-reveal";

import { Section } from "../../../hoc";

const AboutSection = () => (
  <Section className="AboutSection" heading="About me" id="about">
    <Fade bottom delay={100} duration={500}>
      <p>
        2+ years of professional experience designing, coding and modifying
        websites, from layout to function and according to a client's
        specifications. I strive to create visually appealing sites that feature
        user-friendly design and clear navigation.
      </p>
    </Fade>
  </Section>
);

export default AboutSection;
