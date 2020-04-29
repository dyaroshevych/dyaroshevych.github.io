import React, { useContext } from "react";
import { FaTimes, FaExternalLinkAlt } from "react-icons/fa";

import { ProjectContext } from "../../../../context";
import { Wrapper } from "../../../../hoc";

import "./Menu.scss";

const Menu = () => {
  const { name, link, closeProject } = useContext(ProjectContext);

  return (
    <div className="ProjectDescription_menuContainer">
      <Wrapper>
        <ul className="ProjectDescription_menu">
          <li>
            <a
              className="ProjectDescription_menuName"
              href={link}
              aria-label={`${name} - live website`}
              rel="noopener noreferrer"
              target="_blank"
            >
              <h2>
                {name}
                <FaExternalLinkAlt className="ProjectDescription_menuNameIcon" />
              </h2>
            </a>
          </li>
          <li>
            <button>
              <FaTimes
                className="ProjectDescription_menuCloseButton"
                onClick={() => closeProject()}
              />
            </button>
          </li>
        </ul>
      </Wrapper>
    </div>
  );
};

export default Menu;
