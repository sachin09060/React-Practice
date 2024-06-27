import { useEffect, useInsertionEffect, useLayoutEffect, useState } from "react";

export const Child = () => {
    const [show, setShow] = useState(false);
  
    useInsertionEffect(function () {
      console.log("[insertion 1]");
      return function () {
        console.log("[destruction 1]");
      };
    });
  
    useInsertionEffect(function () {
      console.log("[insertion 2]");
      return function () {
        console.log("[destruction 2]");
      };
    });
  
    useLayoutEffect(function () {
      console.log("[LayoutEffect 1]");
      return function () {
        console.log("[LayoutEffect cleanup 1]");
      };
    });
  
    useLayoutEffect(function () {
      console.log("[LayoutEffect 2]");
      return function () {
        console.log("[LayoutEffect cleanup 2]");
      };
    });
  
    useEffect(function () {
      console.log("[useEffect 1]");
      return function () {
        console.log("[useEffect cleanup 1]");
      };
    });
  
    return (
      <div>
        <h2>Child 1</h2>
        <button onClick={() => setShow(!show)}>Toggle</button>
      </div>
    );
  };