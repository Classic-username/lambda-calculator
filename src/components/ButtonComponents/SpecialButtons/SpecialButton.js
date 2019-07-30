import React, { PropTypes } from "react";
import { tsPropertySignature } from "@babel/types";
import { ReactComponent } from "*.svg";

const SpecialButton = (props) => {
  return (
    <button className={classNames}>{props.special}</button>
  );
};

export default SpecialButton;