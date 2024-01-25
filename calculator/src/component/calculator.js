// Import necessary dependencies and styles

import { useReducer } from "react";

import style from "../styles/calculator.module.css";
import DigitButton from "./DigitButton";
import OperationButton from "./OperationButton";
import { ACTIONS, INITIAL_STATE } from "./utils/constants";
import { reducer } from "./utils/reducer";

// Calculator component using useReducer

const Calculator = () => {
  // Use useReducer to manage state using the defined reducer
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  console.log("STATE", state);

  // Destructure state for easy access

  const { previousOperand, operator, currentOperand, sign } = state;
  return (
    <div className={style.calculator}>
      {/* display for output */}
      <div className={style.output}>
        <div className={style.previousOperand}>
          {`${previousOperand + operator}`}
        </div>
        <div className={style.currentOperand}>{`${sign}${currentOperand}`}</div>
      </div>
      {/* all buttons */}
      <button onClick={() => dispatch({ type: ACTIONS.CLEAR })}>C</button>
      <OperationButton operator="%" dispatch={dispatch} />
      <button onClick={() => dispatch({ type: ACTIONS.SIGN })}>+/-</button>
      <OperationButton operator="/" dispatch={dispatch} />
      <DigitButton digit="7" dispatch={dispatch} />
      <DigitButton digit="8" dispatch={dispatch} />
      <DigitButton digit="9" dispatch={dispatch} />
      <OperationButton operator="*" dispatch={dispatch} />
      <DigitButton digit="4" dispatch={dispatch} />
      <DigitButton digit="5" dispatch={dispatch} />
      <DigitButton digit="6" dispatch={dispatch} />
      <OperationButton operator="-" dispatch={dispatch} />
      <DigitButton digit="1" dispatch={dispatch} />
      <DigitButton digit="2" dispatch={dispatch} />
      <DigitButton digit="3" dispatch={dispatch} />
      <OperationButton operator="+" dispatch={dispatch} />
      <DigitButton digit="0" dispatch={dispatch} />
      <DigitButton digit="." dispatch={dispatch} />
      <button
        className={style.spanTwo}
        onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
      >
        =
      </button>
    </div>
  );
};
export default Calculator;
