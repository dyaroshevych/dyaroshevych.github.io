import React, { useState } from "react";
import { Fade } from "react-reveal";

import {
  Button,
  Field,
  List,
  Project,
  ProjectDescription
} from "../../components";

import { skills, projects, contact } from "../../data";
import "./Main.scss";

const sections = [
  {
    name: "about",
    heading: "About me",
    Content: (
      <Fade bottom delay={100} duration={500}>
        <p className="paragraph">
          2+ years of professional experience designing, coding and modifying
          websites, from layout to function and according to a client's
          specifications. I strive to create visually appealing sites that
          feature user-friendly design and clear navigation.
        </p>
      </Fade>
    )
  },
  {
    name: "skills",
    heading: "My skills",
    Content: (
      <Fade bottom delay={100} duration={500}>
        <List items={skills} rows={3} />
      </Fade>
    )
  },
  {
    name: "contact",
    heading: "Contact me",
    Content: (
      <>
        <form
          className="contact__form"
          action="https://formspree.io/xjlqzbvx"
          method="POST"
        >
          {contact.map(
            ({ name, type, placeholder, isRequired, maxChars }, idx) => (
              <Fade
                key={idx}
                bottom
                delay={idx * 100}
                duration={500}
                distance="50px"
              >
                <div className="contact__field">
                  <Field
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    isRequired={isRequired}
                    maxChars={maxChars}
                  />
                </div>
              </Fade>
            )
          )}
          <Fade bottom delay={300} duration={500} distance="50px">
            <Button color="white" shape="square" text="Submit" />
          </Fade>
        </form>
      </>
    )
  }
];

const Main = () => {
  const toggleProjectHandler = name => {
    const projectIdx = name
      ? projects.findIndex(project => project.name === name)
      : null;

    setOpenedProjectIdx(projectIdx);

    toggleBodyScroll();
  };

  const toggleBodyScroll = () => {
    const body = document.querySelector("body");

    if (body.classList.contains("scrollable")) {
      setTimeout(() => {
        body.classList.remove("scrollable");
      }, 500);
    } else {
      body.classList.add("scrollable");
    }
  };

  const [openedProjectIdx, setOpenedProjectIdx] = useState(null);

  return (
    <>
      {openedProjectIdx !== null && (
        <ProjectDescription
          {...{
            ...projects[openedProjectIdx],
            closeProject: toggleProjectHandler
          }}
        />
      )}
      <Fade bottom duration={700}>
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
                  <Fade bottom delay={100} duration={500}>
                    <h2 className="heading-secondary">{heading}</h2>
                  </Fade>
                  {Content}
                </section>
              ))}
            </div>
            <div className="main__projects-container">
              <div className="main__projects-heading">Latest Projects</div>
              {projects.map((project, idx) => (
                <Fade bottom duration={500} key={idx}>
                  <Project
                    {...{ ...project, openProject: toggleProjectHandler }}
                  />
                </Fade>
              ))}
            </div>
          </div>
        </main>
      </Fade>
    </>
  );
};

export default Main;
