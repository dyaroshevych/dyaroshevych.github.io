import React, { Component } from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";
import { fetchSkills } from "../../../store/actions";

import Section from "../../../hoc/Section/Section";
import List from "../../UI/List/List";
import Spinner from "../../UI/Spinner/Spinner";

import "./Skills.scss";

const getColumnsCount = () => (window.innerWidth < 420 ? 2 : 3);

class Skills extends Component {
  state = {
    columnsCount: getColumnsCount(),
  };

  componentDidMount() {
    this.props.onFetchSkills();

    window.addEventListener("resize", () => {
      this.setState({ columnsCount: getColumnsCount() });
    });
  }

  render() {
    if (this.props.error) {
      return (
        <Section className="Skills" heading="My skills" id="skills">
          {this.props.error && <p>Network error.</p>}
        </Section>
      );
    }

    return (
      <Section className="Skills" heading="My skills" id="skills">
        {(this.props.skills.length && (
          <Fade bottom delay={100} duration={500}>
            <List items={this.props.skills} columns={this.state.columnsCount} />
          </Fade>
        )) || <Spinner />}
      </Section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    skills: [...state.skills.skills],
    error: state.skills.error,
    loading: state.skills.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchSkills: () => dispatch(fetchSkills()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Skills);
