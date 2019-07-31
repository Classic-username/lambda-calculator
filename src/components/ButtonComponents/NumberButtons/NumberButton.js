import React from "react";


const NumberButton = (props) => {
  
  return (
    <>
    {props.number === '0'
      ? <button onClick={props.clickNumberBtn} name='zero'>{props.number}</button>
      :

    <button onClick={props.clickNumberBtn} className='number-button' >{props.number}</button>
  }
  </>
  );
};

export default NumberButton;