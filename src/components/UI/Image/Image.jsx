import React from "react";

import "./Image.scss";

const Image = ({ projectName, url, description }) => (
  <figure>
    <img className="Image" src={url} alt={`${projectName} - ${description}`} />
    <figcaption className="ImageCaption">{description}</figcaption>
  </figure>
);

export default Image;
