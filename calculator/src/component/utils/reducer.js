import { ACTIONS, INITIAL_STATE } from "./constants";
import { evaluate } from "./evaluate";

// Reducer function for useReducer hook
export const reducer = (state = INITIAL_STATE, action) => {
  // State destructuring
  const { previousOperand, currentOperand, operator, sign } = state;
  switch (action.type) {
    case ACTIONS.ADD_DIGIT:
      // Handle adding digits to the current operand
      // Prevent multiple decimal points in the current operand
      // Update current operand based on user input
      if (action.payload === "." && currentOperand.includes(".")) {
        return state;
      }
      return {
        ...state,
        currentOperand: `${currentOperand === "0" ? "" : currentOperand}${
          action.payload
        }`,
      };
    // if user pressed any opearator
    case ACTIONS.OPERATION:
      // if user wants to change operation
      if (previousOperand !== "" && operator !== "" && currentOperand === "0") {
        return {
          ...state,
          operator: action.payload,
        };
      }
      // without any operand try to insert operation then return state
      if (currentOperand === "0") {
        return state;
      }
      // contineous operation
      if (previousOperand !== "" && operator !== "" && currentOperand !== "0") {
        return {
          ...state,
          operator: action.payload,
          previousOperand: evaluate({ ...state }),
          currentOperand: "0",
        };
      }
      return {
        ...state,
        operator: action.payload,
        previousOperand: sign + currentOperand,
        currentOperand: "0",
        sign: "",
      };
      
    case ACTIONS.SIGN:
      // Handle toggling the sign of the current operand
      if (sign === "" || sign === "+") {
        return {
          ...state,
          sign: "-",
        };
      } else if (sign === "-") {
        return {
          ...state,
          sign: "+",
        };
      }
      break;
     // Handle evaluating the result and updating the state accordingly
    case ACTIONS.EVALUATE:
      const result = evaluate(state);
      let singValue = "";
      let current = "";
      // if result is negative then assign the signValue to sign
      if (parseFloat(result) < 0) {
        current = result.slice(1, result.length);
        singValue = result.slice(0, 1);
      }
      return {
        ...state,
        currentOperand: `${current || result}`,
        previousOperand: "",
        operator: "",
        sign: singValue,
      };
     // Handle clearing the calculator and return the initial state
    case ACTIONS.CLEAR:
      return INITIAL_STATE;
       // Default case: return the current state if the action type is not recognized
    default:
      return state;
  }
};
