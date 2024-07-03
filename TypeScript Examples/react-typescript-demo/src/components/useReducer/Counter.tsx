import React, { useReducer } from "react";

const initialState = { count: 0 };

type CounterState = {
  count: number;
};

type CountAction = {
  type: string;
  payload: number;
};

const reducer = (state: CounterState, action: CountAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return { count: state.count = action.payload };
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{textAlign:'center'}}>
      <div>
        <h1>Counter using useReducer Hook without Strict Action Types</h1>
        <h1>Counter : {state.count}</h1>
      </div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset", payload: 0 })}>
        Reset
      </button>
    </div>
  );
};

export default Counter;
