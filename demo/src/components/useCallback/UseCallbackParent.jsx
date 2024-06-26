import { useCallback, useState } from "react";
import { Child } from "./Child";

export const UseCallbackParent = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);
  
  return (
    <>
      <p>Parent Component</p>
      <h1>Count: {count}</h1>
      <Child onClick={handleClick} />
    </>
  );
};
