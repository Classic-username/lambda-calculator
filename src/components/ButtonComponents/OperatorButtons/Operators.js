import React, { useState } from "react";

//import any components needed
import OperatorButton from './OperatorButton.js';
//Import your array data to from the provided data file
import { operators } from '../../../data';

const Operators = ({ updateValue, calculateValue }) => {
  const [ operatorState, setOperatorState] = useState(operators);

  const clickOperatorBtn = btn => {
    if(btn === '=') {
      calculateValue();
    } else {
      updateValue(btn);
    }
  }
  return (
    <div>
      {
        operatorState.map(opp => {
          return (
            <OperatorButton operator={opp} clickOperatorBtn={() => clickOperatorBtn(opp.value)} />
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