import React, { useState, useContext } from "react";
import { Fade } from "react-reveal";

import { ProjectContext, ProjectsContext } from "../../context";
import { Wrapper } from "../../hoc";
import { ProjectDescription } from "../../components";
import { InfoContainer, ProjectsContainer } from "./";

import "./Main.scss";

const Main = () => {
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

  const projects = useContext(ProjectsContext);

  const toggleProjectHandler = (name) => {
    const projectIdx = name
      ? projects.findIndex((project) => project.name === name)
      : null;

    setOpenedProjectIdx(projectIdx);

    toggleBodyScroll();
  };

  const [openedProjectIdx, setOpenedProjectIdx] = useState(null);

  return (
    <>
      {openedProjectIdx !== null && (
        <ProjectContext.Provider
          value={{
            ...projects[openedProjectIdx],
            closeProject: toggleProjectHandler,
          }}
        >
          <ProjectDescription />
        </ProjectContext.Provider>
      )}
      <Fade bottom duration={700}>
        <main className="Main">
          <Wrapper className="Main_container">
            <InfoContainer />
            <ProjectsContainer
              projects={projects}
              openProject={toggleProjectHandler}
            />
          </Wrapper>
        </main>
      </Fade>
    </>
  );
};

export default Main;
