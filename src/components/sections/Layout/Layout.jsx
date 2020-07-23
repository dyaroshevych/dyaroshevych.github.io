import React from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";

import Wrapper from "../../../hoc/Wrapper/Wrapper";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import ProjectFull from "../Projects/ProjectFull/ProjectFull";
import InfoBox from "../../UI/InfoBox/InfoBox";

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
