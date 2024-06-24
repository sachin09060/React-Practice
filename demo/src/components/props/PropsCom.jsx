import React from "react";
import PropTypes from "prop-types";

export const PropsCom = (props) => {
  return (
    <>
      <p>From Child Props</p>
      <h1>Hello Mr. {props.name} </h1>
    </>
  );
};

PropsCom.propTypes = { name: PropTypes.string };