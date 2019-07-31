import React from "react";
import { tsPropertySignature } from "@babel/types";

const Display = ({ displayValue }) => {
  return <div className='display'><span>{ displayValue }</span></div>;
};

export default Display;
/* 

import React from "react";
import Logo from './Logo'

const Display = (props) => {
  return (
  <div><Logo /></div>
  <div className='display'>{props.nums}</div>
  );
};

export default Display;

*/