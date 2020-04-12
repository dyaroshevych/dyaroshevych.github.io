import React from "react";
import { Fade } from "react-reveal";

import "./List.scss";

const List = ({ items, columns }) => (
  <ul className="List">
    {items.map((item, idx) => (
      <Fade delay={idx * 50} duration={500} key={idx}>
        <li className={`List_item List_item___${columns}`}>{item}</li>
      </Fade>
    ))}
  </ul>
);

export default List;
