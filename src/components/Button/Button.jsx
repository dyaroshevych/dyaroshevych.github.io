import React from "react";

import "./Button.scss";

const Button = ({ color = "white", shape = "round", text }) => (
  <button
    className={`button${color ? ` button--${color}` : ""}${
      shape ? ` button--${shape}` : ""
    }`}
  >
    {text}
  </button>
);

export default Button;
