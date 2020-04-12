import React from "react";
import { Fade } from "react-reveal";

import "./Section.scss";

const Section = ({ children, className, heading }) => (
  <section className={`section ${className}`}>
    <Fade bottom delay={100} duration={500}>
      <h2 className="heading___secondary">{heading}</h2>
    </Fade>
    {children}
  </section>
);

export default Section;
