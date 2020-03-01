import React from "react";

import List from "../../components/List/List";

import "./Main.scss";

const skills = [
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
const sections = [
  {
    name: "about",
    heading: "About Me",
    Content: (
      <>
        <p className="paragraph">
          2+ years of professional experience designing, coding and modifying
          websites, from layout to function and according to a client's
          specifications. I strive to create visually appealing sites that
          feature user-friendly design and clear navigation.
        </p>
      </>
    )
  },
  {
    name: "skills",
    heading: "My Skills",
    Content: (
      <>
        <List items={skills} />
      </>
    )
  }
];

const Main = () => (
  <main className="main">
    <div className="wrapper main__container">
      <div className="main__info-container">
        {sections.map(({ name, heading, Content }, idx) => (
          <section
            className={`section section--${
              !(idx % 2) ? "gray" : "white"
            } ${name}`}
            key={idx}
          >
            <h2 className="heading-secondary">{heading}</h2>
            {Content}
          </section>
        ))}
      </div>
      <div className="main__projects-container">
        <div className="main__projects-heading">Latest Projects</div>
      </div>
    </div>
  </main>
);

export default Main;
