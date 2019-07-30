import React from "react";
import Logo from './Logo'

const Display = (props) => {
  return (
  <div><Logo /></div>
  <div className='display'>{props.nums}</div>
  );
};

export default Display;