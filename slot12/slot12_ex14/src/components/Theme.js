import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const Theme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ height: "100vh", background: theme.background, padding: "20px" }}>
      <button
        onClick={toggleTheme}
        style={{
          color: theme.foreground,
          background: theme.background,
          border: "2px solid black",
          padding: "10px 20px",
          cursor: "pointer",
        }}
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Theme;
