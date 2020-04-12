import React from "react";
import { Link } from "react-scroll";

import "./IconLink.scss";

const IconLink = ({ Icon, link, ariaLabel = "" }) =>
  link === "contact" ? (
    <Link to={link} smooth>
      <div className="IconLink IconLink___red IconLink___round">
        <Icon className="IconLink_icon" />
      </div>
    </Link>
  ) : (
    <a
      href={link}
      className="IconLink IconLink___red IconLink___round"
      aria-label={ariaLabel}
      rel="noopener noreferrer"
      target="_blank"
    >
      <Icon className="IconLink_icon" />
    </a>
  );

export default IconLink;
