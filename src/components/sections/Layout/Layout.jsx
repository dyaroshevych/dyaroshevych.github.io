import React, { Component } from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";

import Wrapper from "../../../hoc/Wrapper/Wrapper";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import ProjectFull from "../Projects/ProjectFull/ProjectFull";

import "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <>
        {this.props.openedProjectIdx !== null && <ProjectFull />}
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
  }
}

const mapStateToProps = (state) => {
  return {
    openedProjectIdx: state.projects.openedProjectIdx,
  };
};

export default connect(mapStateToProps)(Layout);
