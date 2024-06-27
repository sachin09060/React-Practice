import { useInsertionEffect, useLayoutEffect, useState } from "react";

export const Child2 = () => {
    const [show, setShow] = useState(false);
  
    useInsertionEffect(function () {
      console.log("[insertion 3]");
      return function () {
        console.log("[destruction 3]");
      };
    });
  
    useLayoutEffect(function () {
      console.log("[LayoutEffect 3]");
      return function () {
        console.log("[LayoutEffect cleanup 3]");
      };
    });
    return (
      <div>
        <h2>Child 2</h2>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
    );
  };
  