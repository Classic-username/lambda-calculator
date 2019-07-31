import React, { useState } from "react";

//import any components needed
import NumberButton from './NumberButton.js';
//Import your array data to from the provided data file
import { numbers } from '../../../data.js';

const Numbers = ({ updateValue }) => {
  // STEP 2 - add the imported data to state
  const [numberState, setNumberState] = useState(numbers);
  
  return (
    <div>
      {numberState.map(num=> {
        return (
        <NumberButton number={num} clickNumberBtn={()=> updateValue(num)} />)
        })}
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Numbers;
