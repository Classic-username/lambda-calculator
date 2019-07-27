import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton.js';
//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = () => {
  const [ operatorState, setOperatorState] = useState(operators);
  return (
    <div>
      {
        operatorState.map(opp => {
          return (
            <OperatorButton operator={opp}/>
          )
          
        })
      }
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/}
    </div>
  );
};

export default Operators;