import project_1_1 from "./assets/img/projects/1_1.jpg";
import project_1_2 from "./assets/img/projects/1_2.jpg";
import project_1_3 from "./assets/img/projects/1_3.jpg";
import project_2_1 from "./assets/img/projects/2_1.jpg";
import project_2_2 from "./assets/img/projects/2_2.jpg";
import project_2_3 from "./assets/img/projects/2_3.jpg";
import project_4_1 from "./assets/img/projects/4_1.jpg";
import project_4_2 from "./assets/img/projects/4_2.jpg";
import project_4_3 from "./assets/img/projects/4_3.jpg";
import project_5_1 from "./assets/img/projects/5_1.jpg";
import project_5_2 from "./assets/img/projects/5_2.jpg";
import project_5_3 from "./assets/img/projects/5_3.jpg";

export const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React.js",
  "SCSS",
  "Sass",
  "Bootstrap 4",
  "Git",
  "jQuery"
];
export const projects = [
  {
    name: "Mathew's Realty",
    description:
      "This is a website I created for Susan Mathews, a real estate professional and luxury home marketing specialist based in Westlake area. I was responsible for implementing all the markup, styling code and scripts. This website consists of 4 fully responsive and cross browser compatible pages.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["HTML", "CSS", "Javascript"]
      },
      {
        name: "External libraries",
        technologies: ["animate.css"]
      }
    ],
    process: [
      "Having discussed basic information such as target audience, preferable color scheme and general structure, I created a website with thumbnail images and added content after receiving it from the client.",
      "After publishing the product using GitHub Pages, I did some minor design changes in it and made the website responsive. Eventually, I published the final product to the clients' domain."
    ],
    techStack: [0, 1, 2],
    repo: "https://github.com/dyaroshevych/mathews-realty",
    link: "https://dyaroshevych.github.io/mathews-realty",
    images: [
      { url: project_1_1, description: "Properties page" },
      { url: project_1_2, description: "Contact page" },
      { url: project_1_3, description: "Home page" }
    ]
  },
  {
    name: "Advanced Trailer",
    description:
      "This is a single page application I created for Advanced Hemp Trailer, the largest supplier of processing machinery for the peanut, almond, and hazelnut industries. I was responsible for implementing all the markup, styling code and scripts. This website consists of a header and 5 responsive and cross browser compatible sections.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["React.js", "SCSS", "Javascript"]
      },
      {
        name: "External libraries",
        technologies: [
          "react-reveal",
          "react-scroll",
          "react-player",
          "react-icons"
        ]
      }
    ],
    process: [
      "Having discussed basic information such as target audience, preferable color scheme and general structure, I created a website with provided images and videos and added text content after receiving it from the client.",
      "After publishing the product using GitHub Pages, I did some minor design changes in it and made the website responsive. Eventually, I published the final product to the clients' domain."
    ],
    techStack: [3, 4, 2],
    repo: "https://github.com/dyaroshevych/advanced-hemp-trailer",
    link: "https://dyaroshevych.github.io/advanced-hemp-trailer",
    images: [
      { url: project_4_1, description: "Product section" },
      { url: project_4_2, description: "Header" },
      { url: project_4_3, description: "Image slider" }
    ]
  },
  {
    name: "Planner Plus",
    description:
      "This is one of my pet projects, a web application meant for taking notes and separating them in different folders. Having seen many todo apps with basic design and functionality, I decided to build a more advanced one.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["React.js", "SCSS", "Javascript"]
      },
      {
        name: "External libraries",
        technologies: ["react-router-dom (useHistory hook, Switch, Route)"]
      }
    ],
    process: [
      "I planned the structure and functionality of this web application. These include creating, editing and deleting folders and tasks and switching between lists.",
      "Then, I built the app itself and provided a mobile version for it with convenient menu."
    ],
    techStack: [3, 4, 2],
    repo: "https://github.com/dyaroshevych/planner-plus",
    link: "https://dyaroshevych.github.io/planner-plus",
    images: [
      { url: project_5_1, description: "Desktop view" },
      { url: project_5_2, description: "Mobile menu" },
      { url: project_5_3, description: "Adding new folder" }
    ]
  },
  {
    name: "Orbital View",
    description:
      "This is a website I created for Orbital View, an artificial intelligence company focused on roof damage assessment. I was responsible for implementing all the markup and styling code. This website consists of 4 fully responsive and cross browser compatible pages.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["HTML", "CSS", "Javascript"]
      },
      {
        name: "External libraries",
        technologies: ["animate.css"]
      }
    ],
    process: [
      "Having discussed basic information such as target audience, preferable color scheme and general structure, I created a website with thumbnail images and added content after receiving it from the client.",
      "After publishing the product using GitHub Pages, I did some minor design changes in it and made the website responsive. Eventually, I published the final product to the clients' domain."
    ],
    techStack: [0, 1, 2],
    repo: "https://github.com/dyaroshevych/orbital-view",
    link: "https://dyaroshevych.github.io/orbital-view",
    images: [
      { url: project_2_1, description: "Home page" },
      { url: project_2_2, description: "FAQ page" },
      { url: project_2_3, description: "'How it works' page" }
    ]
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

// import project_3_1 from "./assets/img/projects/3_1.jpg";
// {
//   name: "A-A-Agency",
//   techStack: [0, 1, 2],
//   description: "",
//   images: [{ url: project_3_1, description: "" }]
// }
