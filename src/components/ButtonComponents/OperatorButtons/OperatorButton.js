import React from "react";



const OperatorButton = ({ operator: { char, value }, clickOperatorBtn }) => {
  return (
    <button onClick={clickOperatorBtn}className='operator-button'>{char}</button>
    // <>
    //   {/* Display a button element rendering the data being passed down from the parent container on props */}
    // </>
  );
};

export default OperatorButton;

//was that post in the channel one of your assignments?