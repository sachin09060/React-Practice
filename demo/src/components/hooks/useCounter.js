import { useState } from "react";

export const useCounter = (initialValue = 0, value = 0) => {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount(count + value);
  const decrement = () => setCount(count - value);
  const reset = () => setCount(0);

  return [count, increment, decrement, reset];
};
