import React from "react";
import { Link } from "react-scroll";
import { Fade } from "react-reveal";
import { FaGithub, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

import { Button, IconLink } from "../../components";

import { ReactComponent as Logo } from "../../assets/img/logo.svg";
import "./Header.scss";

const Header = () => {
  const links = [
    {
      component: FaGithub,
      link: "https://github.com/dyaroshevych",
      label: "My GitHub account"
    },
    {
      component: FaLinkedinIn,
      link: "https://www.linkedin.com/in/dyaroshevych",
      label: "My LinkedIn account"
    },
    {
      component: FaEnvelope,
      link: "contact",
      label: "Contact me"
    }
  ];

  return (
    <header className="header">
      <div className="wrapper">
        <Fade bottom duration={500}>
          <Logo className="logo" />
        </Fade>
        <Fade bottom delay={50} duration={500}>
          <h1 className="heading-primary">Dmitrii Yaroshevych</h1>
        </Fade>
        <Fade bottom delay={100} duration={500}>
          <span className="subheading-primary">Frontend Developer</span>
        </Fade>
        <ul className="header__social-list">
          {links.map(({ component, link, label }, idx) => (
            <Fade bottom delay={150 + 50 * idx} duration={500} key={idx}>
              <li className="header__social-item">
                <IconLink Icon={component} link={link} ariaLabel={label} />
              </li>
            </Fade>
          ))}
          <Fade bottom delay={300} duration={500}>
            <li className="header__social-item">
              <Link to="contact" smooth>
                <Button color="white" text="Let's work together" />
              </Link>
            </li>
          </Fade>
        </ul>
      </div>
    </header>
  );
};

export default Header;
