import React from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

import { connect } from "react-redux";
import { closeProject } from "../../../../../store/actions";

import Wrapper from "../../../../../hoc/Wrapper/Wrapper";

import "./Menu.scss";

const Menu = ({ name, websiteUrl, onCloseProject }) => (
  <div className="ProjectFullMenu">
    <Wrapper>
      <ul className="ProjectFullMenu_list">
        <li>
          <a
            className="ProjectFullMenu_projectName"
            href={websiteUrl}
            aria-label={`${name} - live website`}
            rel="noopener noreferrer"
            target="_blank"
          >
            <h2>
              {name}
              <FaExternalLinkAlt className="ProjectFullMenu_linkIcon" />
            </h2>
          </a>
        </li>
        <li>
          <button>
            <FaTimes
              className="ProjectFullMenu_closeButton"
              onClick={onCloseProject}
            />
          </button>
        </li>
      </ul>
    </Wrapper>
  </div>
);

const mapStateToProps = (state) => {
  const { name, websiteUrl } = state.projects.projects[
    state.projects.openedProjectIdx
  ];

  return {
    name,
    websiteUrl,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCloseProject: () => dispatch(closeProject()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
