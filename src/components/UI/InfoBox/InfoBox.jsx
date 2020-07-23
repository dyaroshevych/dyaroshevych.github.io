import React from "react";
import { connect } from "react-redux";

import "./InfoBox.scss";

const InfoBox = ({ type, text }) =>
  type && (
    <div className="InfoBox" type={type}>
      {text}
    </div>
  );

const mapStateToProps = (state) => {
  return {
    type: state.message.type,
    text: state.message.text,
  };
};

export default connect(mapStateToProps)(InfoBox);
