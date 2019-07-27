import React from "react";
import { tsPropertySignature } from "@babel/types";

const SpecialButton = (props) => {
  return (
    <button className='button' className='special-button'>{props.special}</button>
  );
};

export default SpecialButton;