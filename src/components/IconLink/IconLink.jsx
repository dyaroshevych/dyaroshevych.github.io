import React from "react";

import "./IconLink.scss";

const IconLink = ({ Icon, link }) => (
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
