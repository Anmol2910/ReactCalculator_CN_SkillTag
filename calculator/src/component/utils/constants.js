// Constants for action types in the reducer
export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    OPERATION: "operation",
    EVALUATE: "evaluate",
    SIGN: "sign"
  };
  
 // Initial state for the reducer
  export const INITIAL_STATE = {
    previousOperand: "",
    currentOperand: "0",
    operator: "",
    sign: ""
  };
  