import { useLayoutEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UseLayoutEffect = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      <h2>"useLayoutEffect" Hook Component</h2>
      <h1>Window width: {width}px</h1>
      <button onClick={handleBack}>Back</button>
    </>
  );
};

// Explanation:

// In this example, useLayoutEffect is used to update the component state (width) whenever the window is resized.

// The effect function adds an event listener to the window for the 'resize' event.

// Inside the event listener (handleResize function), it updates the width state with the current window's inner width.

// The effect function returns a cleanup function (removeEventListener) to remove the event listener
// when the component unmounts or when the dependency array changes.

// Note that the empty dependency array ([]) ensures that the effect runs only once after the initial render and
// cleans up when the component is unmounted.
