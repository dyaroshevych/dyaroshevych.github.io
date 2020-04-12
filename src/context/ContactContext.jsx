import React from "react";

const SkillsContext = React.createContext([
  {
    name: "name",
    placeholder: "Your name",
    isRequired: true,
    maxChars: 40,
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your email",
    isRequired: true,
    maxChars: 70,
  },
  {
    name: "name",
    type: "textarea",
    placeholder: "Comments (optional)",
  },
]);

export default SkillsContext;
