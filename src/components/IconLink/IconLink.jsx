import React from "react";
import { Link } from "react-scroll";

import "./IconLink.scss";

const IconLink = ({ Icon, link }) =>
  link === "contact" ? (
    <Link to={link} smooth>
      <div className="icon-link icon-link--red icon-link--round">
        <Icon className="icon-link__icon" />
      </div>
    </Link>
  ) : (
    <a
      href={link}
      className="icon-link icon-link--red icon-link--round"
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon className="icon-link__icon" />
    </a>
  );

export default IconLink;
