import React from "react";

import { skills } from "../../data.json";
import List from "../List/List";

const Project = ({ info: { name, techStack, description } }) => (
  <section className="section project">
    <h3 className="heading-tertiary">{name}</h3>
    <List items={techStack.map(techId => skills[techId])} />
  </section>
);

export default Project;
