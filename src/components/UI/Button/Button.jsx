import React from "react";

import "./Button.scss";

const Button = ({ color = "white", shape = "round", text }) => {
  const buttonClasses = ["Button"];

  if (color) {
    buttonClasses.push(`Button___${color}`);
  }

  if (shape) {
    buttonClasses.push(`Button___${shape}`);
  }

  return <button className={buttonClasses.join(" ")}>{text}</button>;
};

export default Button;
