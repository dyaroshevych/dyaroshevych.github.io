import React from "react";

import "./Field.scss";

const Field = ({
  name,
  type = "text",
  placeholder = "",
  isRequired = false,
  maxChars = 255
}) => (
  <div className="field">
    {type === "textarea" ? (
      <textarea
        className="field__textarea"
        name={name}
        placeholder={placeholder}
        maxLength={maxChars}
        rows="3"
      ></textarea>
    ) : (
      <input
        className="field__input"
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        maxLength={maxChars}
      />
    )}
  </div>
);

export default Field;
