import React from "react";

import "./Button.scss";

const Button = ({ color = "white", shape = "round", text }) => (
  <button
    className={`Button${color ? ` Button___${color}` : ""}${
      shape ? ` Button___${shape}` : ""
    }`}
  >
    {text}
  </button>
);

export default Button;
