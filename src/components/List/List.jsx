import React from "react";
import { Fade } from "react-reveal";

import "./List.scss";

const List = ({ items, rows }) => (
  <ul className="list">
    {items.map((item, idx) => (
      <Fade delay={idx * 50} duration={500} key={idx}>
        <li className={`list__item list__item-${rows}`}>{item}</li>
      </Fade>
    ))}
  </ul>
);

export default List;
