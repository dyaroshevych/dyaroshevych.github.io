import React from "react";

import "./Image.scss";

const Image = ({ projectName, url, description }) => (
  <figure>
    <img className="image" src={url} alt={`${projectName} - ${description}`} />
    <figcaption className="image-caption">{description}</figcaption>
  </figure>
);

export default Image;
