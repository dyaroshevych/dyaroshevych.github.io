import React, { Component } from "react";
import { Fade } from "react-reveal";

import { connect } from "react-redux";
import { fetchProjects, openProject } from "store/actions";

import ProjectPreview from "./ProjectPreview/ProjectPreview";
import Spinner from "components/UI/Spinner/Spinner";

import "./Projects.scss";

class Projects extends Component {
  componentDidMount() {
    this.props.onFetchProjects();
  }

  render() {
    return (
      <div className="Projects">
        <div className="Projects_heading">Latest Projects</div>
        {(this.props.projects.length &&
          this.props.projects.map((project, idx) => (
            <Fade bottom duration={500} key={idx}>
              <ProjectPreview {...{ ...project }} />
            </Fade>
          ))) || <Spinner />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const projects = state.projects.projects.map((project) => {
    return { ...project, techStack: [...project.techStack] };
  });

  return {
    projects,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onFetchProjects: () => dispatch(fetchProjects()),
    onOpenProject: (idx) => dispatch(openProject(idx)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Projects);
