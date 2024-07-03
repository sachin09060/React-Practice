import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const Box = () => {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text, textAlign:'center' }}
    >
      <h1>Theme Context</h1>
    </div>
  );
};

export default Box;
