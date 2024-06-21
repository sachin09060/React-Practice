import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../actions/counterActions";
import './static/style.css'
import NavBar from "./NavBar";

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <>
    <NavBar/>
    <div className="counter-container">
      <h1 className="container-heading">Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
    </>
  );
};

export default Counter;
