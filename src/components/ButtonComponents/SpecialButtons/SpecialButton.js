import React, { PropTypes } from "react";
import { tsPropertySignature } from "@babel/types";
// import { ReactComponent } from "*.svg";

const SpecialButton = (props) => {
  return (
    <button onClick={props.updateValue} className='special-button' >{props.special}</button>
  );
};

export default SpecialButton;