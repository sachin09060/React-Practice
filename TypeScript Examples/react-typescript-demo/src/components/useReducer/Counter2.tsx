import React, { useReducer } from "react";

const initialState = { count: 0 };

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'increment' | 'decrement',
  payload: number
}

type ResetAction = {
  type: 'reset'
}

type CountAction = UpdateAction | ResetAction

const reducer = (state: CounterState, action: CountAction) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const Counter2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div style={{textAlign:'center'}}>
      <div>
        <h1>Counter using useReducer Hook with Strict Action Types!</h1>
        <h1>Counter : {state.count}</h1>
      </div>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
      <button onClick={() => dispatch({ type: "reset"})}>
        Reset
      </button>
    </div>
  );
};

export default Counter2;
