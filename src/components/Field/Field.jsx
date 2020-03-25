import React from "react";

import "./Field.scss";

const Field = ({
  name,
  type = "text",
  placeholder = "",
  isRequired = false,
  maxChars = 1000
}) => (
  <div className="field">
    <label className="field__label" htmlFor={`field__${name}`}>{placeholder}</label>
    {type === "textarea" ? (
      <textarea
        className="field__textarea"
        name={name}
        placeholder={placeholder}
        maxLength={maxChars}
        rows="4"
        id={`field__${name}`}
      ></textarea>
    ) : (
      <input
        className="field__input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        maxLength={maxChars}
        id={`field__${name}`}
      />
    )}
  </div>
);

export default Field;
