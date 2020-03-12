import React, { useState } from "react";
import { skills, projects, contact } from "../../data";

import {
  Button,
  Field,
  List,
  Project,
  ProjectDescription
} from "../../components";

import "./Main.scss";

const sections = [
  {
    name: "about",
    heading: "About me",
    Content: (
      <>
        <p className="paragraph">
          2+ years of professional experience designing, coding and modifying
          websites, from layout to function and according to a client's
          specifications. I strive to create visually appealing sites that
          feature user-friendly design and clear navigation.
        </p>
      </>
    )
  },
  {
    name: "skills",
    heading: "My skills",
    Content: (
      <>
        <List items={skills} />
      </>
    )
  },
  {
    name: "contact",
    heading: "Contact me",
    Content: (
      <>
        <form className="contact__form">
          {contact.map(
            ({ name, type, placeholder, isRequired, maxChars }, idx) => (
              <Field
                key={idx}
                name={name}
                type={type}
                placeholder={placeholder}
                isRequired={isRequired}
                maxChars={maxChars}
              />
            )
          )}
          <Button color="white" shape="square" text="Submit" />
        </form>
      </>
    )
  }
];

const Main = () => {
  const openProjectHandler = name => {
    const projectIdx = projects.findIndex(project => project.name === name);

    setOpenedProject(projectIdx);
  };

  const [openedProject, setOpenedProject] = useState(null);

  return (
    <>
      {openedProject !== null && <ProjectDescription />}
      <main className="main">
        <div className="wrapper main__container">
          <div className="main__info-container">
            {sections.map(({ name, heading, Content }, idx) => (
              <section
                className={`section section--${
                  !(idx % 2) ? "gray" : "white"
                } ${name}`}
                key={idx}
              >
                <h2 className="heading-secondary">{heading}</h2>
                {Content}
              </section>
            ))}
          </div>
          <div className="main__projects-container">
            <div className="main__projects-heading">Latest Projects</div>
            {projects.map((project, idx) => (
              <Project
                {...{ ...project, openProject: openProjectHandler }}
                key={idx}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
