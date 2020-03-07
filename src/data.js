import project1 from "./assets/img/projects/1.jpg";
import project2 from "./assets/img/projects/2.jpg";
import project3 from "./assets/img/projects/3.jpg";

export const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React.js",
  "SASS/SCSS",
  "Bootstrap 4",
  "Git",
  "Node.js",
  "Express.js",
  "MongoDB",
  "MySQL",
  "jQuery"
];
export const projects = [
  {
    name: "A-A-Agency",
    type: "agency website",
    techStack: [0, 1, 2],
    description: "",
    image: project1
  },
  {
    name: "Orbital View",
    techStack: [0, 1, 2],
    description: "",
    image: project2
  },
  {
    name: "Mathew's Realty",
    techStack: [0, 1, 2],
    description: "",
    image: project3
  }
];
export const contact = [
  {
    name: "name",
    placeholder: "Your name",
    isRequired: true,
    maxChars: 40
  },
  {
    name: "email",
    type: "email",
    placeholder: "Your email",
    isRequired: true,
    maxChars: 70
  },
  {
    name: "name",
    type: "textarea",
    placeholder: "Comments (optional)"
  }
];
