import React from "react";

import "./Button.scss";

const Button = ({ color, shape, text }) => (
  <button className={`button${color ? ` button--${color}` : ""}`}>
    Let's work together
  </button>
);

export default Button;
