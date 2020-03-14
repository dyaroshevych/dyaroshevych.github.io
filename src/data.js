import project_1_1 from "./assets/img/projects/1_1.jpg";
import project_1_2 from "./assets/img/projects/1_2.jpg";
import project_2_1 from "./assets/img/projects/2_1.jpg";
import project_2_2 from "./assets/img/projects/2_2.jpg";
import project_3_1 from "./assets/img/projects/3_1.jpg";

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
    name: "Mathew's Realty",
    description:
      "This is a website I created for Susan Mathews, a real estate professional and luxury home marketing specialist based in Westlake area. I was responsible for implementing all the markup, styling code and scripts. This website consists of 4 fully responsive and cross browser compatible pages.",
    technologies: ["HTML", "CSS", "Javascript", "animate.css library"],
    techStack: [0, 1, 2],
    repo: "https://github.com/dyaroshevych/mathews-realty",
    link: "https://dyaroshevych.github.io/mathews-realty",
    images: [
      { url: project_1_1, description: "" },
      { url: project_1_2, description: "" }
    ]
  },
  {
    name: "Orbital View",
    description:
      "This is a website I created for Orbital View, an artificial intelligence company focused on roof damage assessment. I was responsible for implementing all the markup and styling code. This website consists of 4 fully responsive and cross browser compatible pages.",
    technologies: ["HTML", "CSS", "Javascript", "animate.css library"],
    techStack: [0, 1, 2],
    repo: "https://github.com/dyaroshevych/orbital-view",
    link: "https://orbitalview.ai",
    images: [
      { url: project_2_1, description: "" },
      { url: project_2_2, description: "" }
    ]
  },

  {
    name: "A-A-Agency",
    techStack: [0, 1, 2],
    description: "",
    images: [{ url: project_3_1, description: "" }]
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
