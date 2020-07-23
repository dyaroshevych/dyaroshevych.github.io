import React, { Component } from "react";
import { Slide } from "react-reveal";
import axios from "../../../../axios";

import { connect } from "react-redux";

import Wrapper from "../../../../hoc/Wrapper/Wrapper";
import Menu from "./Menu/Menu";
import Links from "./Links/Links";
import GeneralInfo from "./GeneralInfo/GeneralInfo";
import TechnologiesInfo from "./TechnologiesInfo/TechnologiesInfo";
import ProcessInfo from "./ProcessInfo/ProcessInfo";
import Section from "./Section/Section";

import "./ProjectFull.scss";

class ProjectFull extends Component {
  state = {
    description: "",
    process: [],
    technologies: [],
    imgCaptions: [],
  };

  componentDidMount() {
    axios
      .get(`/projects/additional/${this.props.projectIdx}.json`)
      .then(({ data }) => {
        this.setState({ ...data });
      });
  }

  render() {
    const sections = [
      <Links />,
      <GeneralInfo
        description={this.state.description}
        imgCaptions={this.state.imgCaptions}
      />,
      <TechnologiesInfo
        technologies={this.state.technologies}
        imgCaptions={this.state.imgCaptions}
      />,
      <ProcessInfo
        process={this.state.process}
        imgCaptions={this.state.imgCaptions}
      />,
      <Links />,
    ];
    return (
      <Slide bottom duration={500}>
        <div className="ProjectFull">
          <Menu />
          <div className="ProjectFull_content">
            <Wrapper>
              {sections.map((section, idx) => (
                <Section key={idx}>{section}</Section>
              ))}
            </Wrapper>
          </div>
        </div>
      </Slide>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    projectIdx: state.projects.openedProjectIdx,
    skills: state.skills,
  };
};

export default connect(mapStateToProps)(ProjectFull);
