import React from "react";

import "./Field.scss";

const Field = ({
  name,
  type = "text",
  placeholder = "",
  isRequired = false,
  maxChars = 1000,
}) => (
  <div className="Field">
    <label className="Field_label" htmlFor={`Field_${name}`}>
      {placeholder}
    </label>
    {type === "textarea" ? (
      <textarea
        className="Field_textarea"
        name={name}
        placeholder={placeholder}
        maxLength={maxChars}
        rows="4"
        id={`Field_${name}`}
      ></textarea>
    ) : (
      <input
        className="Field_input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        maxLength={maxChars}
        id={`Field_${name}`}
      />
    )}
  </div>
);

export default Field;
