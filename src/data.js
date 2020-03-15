import project_1_1 from "./assets/img/projects/1_1.jpg";
import project_1_2 from "./assets/img/projects/1_2.jpg";
import project_1_3 from "./assets/img/projects/1_3.jpg";
import project_2_1 from "./assets/img/projects/2_1.jpg";
import project_2_2 from "./assets/img/projects/2_2.jpg";
import project_2_3 from "./assets/img/projects/2_3.jpg";
import project_4_1 from "./assets/img/projects/4_1.jpg";
import project_4_2 from "./assets/img/projects/4_2.jpg";
import project_4_3 from "./assets/img/projects/4_3.jpg";

export const skills = [
  "HTML5",
  "CSS3",
  "Javascript",
  "React.js",
  "SASS",
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
      "Having discussed basic information about the website such as example websites, target audience, general structure and preferable color scheme, I created a website with thumbnail images and added content after receiving it from the client.",
      "After publishing my work to the clients' domain, I did some minor changes in it and made the website responsive after the client was satisfied."
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
      "Having discussed basic information about the website such as example websites, target audience, general structure and preferable color scheme, I created a website with thumbnail images and added content after receiving it from the client.",
      "After publishing my work to the clients' domain, I did some minor changes in it and made the website responsive after the client was satisfied."
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
      "Having discussed basic information about the website such as example websites, target audience, general structure and preferable color scheme, I created a website with thumbnail images and added content after receiving it from the client.",
      "After publishing my work to the clients' domain, I did some minor changes in it and made the website responsive after the client was satisfied."
    ],
    techStack: [0, 1, 2],
    repo: "https://github.com/dyaroshevych/orbital-view",
    link: "https://orbitalview.ai",
    images: [
      { url: project_2_1, description: "Home page" },
      { url: project_2_2, description: "FAQ page" },
      { url: project_2_3, description: "How it works page" }
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
