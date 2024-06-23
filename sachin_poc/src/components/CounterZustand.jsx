import React from "react";
import useCounterStore from "../store/useCounterStore";
import NavBar from "./NavBar";

const CounterZustand = () => {
  const { count, increase, decrease, reset } = useCounterStore();

  return (
    <>
      <NavBar />
      <div className="counter-container">
        <h1 className="container-heading">Counter: {count}</h1>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
};

export default CounterZustand;
