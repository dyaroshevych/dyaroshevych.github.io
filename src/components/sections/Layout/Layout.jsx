import React from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";

import Wrapper from "hoc/Wrapper/Wrapper";
import About from "components/sections/About/About";
import Skills from "components/sections/Skills/Skills";
import Contact from "components/sections/Contact/Contact";
import Projects from "components/sections/Projects/Projects";
import ProjectFull from "components/sections/Projects/ProjectFull/ProjectFull";
import InfoBox from "components/UI/InfoBox/InfoBox";

import "./Layout.scss";

const Layout = ({ message, openedProjectIdx }) => (
  <>
    {openedProjectIdx !== null && <ProjectFull />}
    {message.text && <InfoBox {...message} />}
    <Fade bottom duration={700}>
      <main className="Layout">
        <Wrapper className="Layout_container">
          <div className="Layout_infoContainer">
            <About />
            <Skills />
            <Contact />
          </div>
          <Projects />
        </Wrapper>
      </main>
    </Fade>
  </>
);

const mapStateToProps = (state) => {
  return {
    openedProjectIdx: state.projects.openedProjectIdx,
    message: { ...state.message },
  };
};

export default connect(mapStateToProps)(Layout);
