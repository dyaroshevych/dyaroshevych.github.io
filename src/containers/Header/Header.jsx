import React from "react";

import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import { Button, IconLink } from "../../components";

const Header = () => {
  const links = [
    {
      component: FaGithub,
      link: "https://github.com/dyaroshevych"
    },
    {
      component: FaLinkedinIn,
      link: "https://www.linkedin.com/in/dyaroshevych"
    },
    {
      component: FaEnvelope,
      link: "mailto:dyaroshevych@gmail.com"
    }
  ];

  return (
    <header className="header">
      <div className="wrapper">
        <Logo className="logo" />
        <h1 className="heading-primary">Dmitrii Yaroshevych</h1>
        <span className="subheading-primary">Frontend Developer</span>
        <ul className="header__social-list">
          {links.map(({ component, link }, idx) => (
            <li className="header__social-item" key={idx}>
              <IconLink Icon={component} link={link} />
            </li>
          ))}
          <li className="header__social-item">
            <Button color="white" text="Let's work together" />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
