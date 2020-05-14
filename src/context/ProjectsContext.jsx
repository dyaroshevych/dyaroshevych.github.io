import React from "react";

import * as projectImages from "../assets/img/projects";

const ProjectsContext = React.createContext([
  {
    name: "Remote Roofing",
    description:
      "This is a website I created for Remote Roofing, the first roofing company to use computer vision to remotely inspect and assess roof damage. I was responsible for implementing all the markup, styling code and scripts. This website consists of 5 fully responsive and cross browser compatible pages.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["React.js", "SCSS", "Javascript"],
      },
      {
        name: "External libraries",
        technologies: ["React Router", "Algolia Places API", "lodash"],
      },
    ],
    process: [
      "Having discussed basic information such as target audience, preferable color scheme and general structure, I created a website with content received from the client.",
      "After publishing the product using GitHub Pages, I worked with a designer to fix minor problems and made the website responsive. Eventually, I published the final product using Firebase.",
    ],
    techStack: [3, 4, 2],
    repo: "https://github.com/dyaroshevych/remote-roofing",
    link: "https://remoteroofing.com",
    images: [
      {
        url: projectImages.remoteroofing1,
        description: "Types of Roofing section",
      },
      { url: projectImages.remoteroofing2, description: "Contact page" },
      { url: projectImages.remoteroofing3, description: "Login page" },
    ],
  },
  {
    name: "Mathew's Realty",
    description:
      "This is a website I created for Susan Mathews, a real estate professional and luxury home marketing specialist based in Westlake area. I was responsible for implementing all the markup, styling code and scripts. This website consists of 4 fully responsive and cross browser compatible pages.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "External libraries",
        technologies: ["animate.css"],
      },
    ],
    process: [
      "Having discussed basic information such as target audience, preferable color scheme and general structure, I created a website with thumbnail images and added content after receiving it from the client.",
      "After publishing the product using GitHub Pages, I did some minor design changes in it and made the website responsive. Eventually, I published the final product to the clients' domain.",
    ],
    techStack: [0, 1, 2],
    repo: "https://github.com/dyaroshevych/mathews-realty",
    link: "https://dyaroshevych.github.io/mathews-realty",
    images: [
      { url: projectImages.mathewsrealty1, description: "Properties page" },
      { url: projectImages.mathewsrealty2, description: "Home page" },
      { url: projectImages.mathewsrealty3, description: "Contact page" },
    ],
  },
  {
    name: "Advanced Hemp Dryer",
    description:
      "This is a single page application I created for Advanced Hemp Dryer, the largest supplier of processing machinery for the peanut, almond, and hazelnut industries. I was responsible for implementing all the markup, styling code and scripts. This website consists of a header and 5 responsive and cross browser compatible sections.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["React.js", "SCSS", "Javascript"],
      },
      {
        name: "External libraries",
        technologies: [
          "react-reveal",
          "react-scroll",
          "react-player",
          "react-icons",
        ],
      },
    ],
    process: [
      "Having discussed basic information such as target audience, preferable color scheme and general structure, I created a website with provided images and videos and added text content after receiving it from the client.",
      "After publishing the product using GitHub Pages, I did some minor design changes in it and made the website responsive. Eventually, I published the final product to the clients' domain and connected analytics that were needed.",
    ],
    techStack: [3, 4, 2],
    repo: "https://github.com/dyaroshevych/advanced-hemp-trailer",
    link: "https://advancedhempdryer.com/",
    images: [
      { url: projectImages.advancedhemp1, description: "Benefits section" },
      { url: projectImages.advancedhemp2, description: "Header" },
      { url: projectImages.advancedhemp3, description: "Image slider" },
    ],
  },
  {
    name: "Planner Plus",
    description:
      "This is one of my pet projects, a web application meant for taking notes and separating them in different folders. Having seen many todo apps with basic design and functionality, I decided to build a more advanced one.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["React.js", "SCSS", "Javascript"],
      },
      {
        name: "External libraries",
        technologies: ["React Router (+useHistory hook)"],
      },
    ],
    process: [
      "I planned the structure and functionality of this web application. These include creating, editing and deleting folders and tasks and switching between lists.",
      "Then, I built the app itself and provided a mobile version for it with convenient menu.",
    ],
    techStack: [3, 4, 2],
    repo: "https://github.com/dyaroshevych/planner-plus",
    link: "https://dyaroshevych.github.io/planner-plus",
    images: [
      { url: projectImages.plannerplus1, description: "Desktop view" },
      { url: projectImages.plannerplus2, description: "Mobile menu" },
      { url: projectImages.plannerplus3, description: "Adding new folder" },
    ],
  },
  {
    name: "Orbital View",
    description:
      "This is a website I created for Orbital View, an artificial intelligence company focused on roof damage assessment. I was responsible for implementing all the markup and styling code. This website consists of 4 fully responsive and cross browser compatible pages.",
    technologies: [
      {
        name: "Tech stack",
        technologies: ["HTML", "CSS", "Javascript"],
      },
      {
        name: "External libraries",
        technologies: ["animate.css"],
      },
    ],
    process: [
      "Having discussed basic information such as target audience, preferable color scheme and general structure, I created a website with thumbnail images and added content after receiving it from the client.",
      "After publishing the product using GitHub Pages, I did some minor design changes in it and made the website responsive. Eventually, I published the final product to the clients' domain.",
    ],
    techStack: [0, 1, 2],
    repo: "https://github.com/dyaroshevych/orbital-view",
    link: "https://dyaroshevych.github.io/orbital-view",
    images: [
      { url: projectImages.orbitalview1, description: "Home page" },
      { url: projectImages.orbitalview2, description: "FAQ page" },
      { url: projectImages.orbitalview3, description: "'How it works' page" },
    ],
  },
]);

export default ProjectsContext;
