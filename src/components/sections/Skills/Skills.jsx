import React, { Component } from "react";
import { Fade } from "react-reveal";
import axios from "../../../axios";

import Section from "../../../hoc/Section/Section";
import List from "../../UI/List/List";
import Spinner from "../../UI/Spinner/Spinner";

import "./Skills.scss";

class Skills extends Component {
  getColumnsCount = () => (window.innerWidth < 420 ? 2 : 3);

  state = {
    columnsCount: this.getColumnsCount(),
    skills: [],
  };

  componentDidMount() {
    axios.get("/skills.json").then(({ data }) => {
      this.setState({ skills: data });
    });

    window.addEventListener("resize", () => {
      this.setState({ columnsCount: this.getColumnsCount() });
    });
  }

  render() {
    return (
      <Section className="Skills" heading="My skills" id="skills">
        {(this.state.skills.length && (
          <Fade bottom delay={100} duration={500}>
            <List items={this.state.skills} columns={this.state.columnsCount} />
          </Fade>
        )) || <Spinner />}
      </Section>
    );
  }
}

export default Skills;
