import React from "react";

import "./FormField.scss";

const FormField = ({
  label,
  elementType,
  elementConfig,
  value,
  change,
  shouldValidate,
  valid,
  error,
}) => {
  let input = null;

  switch (elementType) {
    case "input":
      input = (
        <input
          className="FormField_input"
          data-invalid={!!(shouldValidate && !valid)}
          {...elementConfig}
          value={value}
          onChange={(event) => change(event, label)}
          id={`Input_${label}`}
        />
      );
      break;
    case "textarea":
      input = (
        <textarea
          className="FormField_textarea"
          {...elementConfig}
          value={value}
          onChange={(event) => change(event, label)}
          rows="4"
          id={`Input_${label}`}
        ></textarea>
      );
      break;
    default:
  }

  return (
    <div className="FormField">
      {input}
      {error && !valid && <p className="FormField_error">{error}</p>}
    </div>
  );
};

export default FormField;
