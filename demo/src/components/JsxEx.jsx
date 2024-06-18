import { useState } from "react";

function JsxEx() {
  {
    /* Syntax Familiarity: JSX looks similar to HTML, making it easier for developers to write and visualize the structure of UI components within JavaScript code. */
  }
  const [name, setName] = useState("");

  const handleClick = () => {
    setName("Sachin");
  };

  return (
    <>
      <h1>Hello, {name}</h1>
      <p>
        Embedding Expressions: JSX allows embedding JavaScript expressions
        inside curly braces {}. This enables dynamic content and logic directly
        within the markup.
      </p>
      <br />
      <h2>Attributes: </h2>
      <p>
        JSX uses HTML-like attributes to specify properties and event handlers.
        These are written similarly to HTML but are actually passed as object
        properties in the background. Ex:
      </p>

      <h1>{name}</h1>

      <button onClick={handleClick}>Button</button>
    </>
  );
}

export default JsxEx;

// JSX (JavaScript XML) is a syntax extension for JavaScript, commonly used with React for defining UI components
