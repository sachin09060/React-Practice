import React, { useContext } from "react";
import ThemeContext, { ThemeProvider } from "./ThemeContext";

function Content() {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "#f0f0f0" : "#333",
        padding: "20px",
      }}
    >
      <p>This is some content.</p>
    </div>
  );
}

export default Content;