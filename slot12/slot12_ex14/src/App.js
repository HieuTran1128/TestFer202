import React from "react";
import { ThemeProvider } from "./components/ThemeProvider";
import Theme from "./components/Theme";

const App = () => {
  return (
    <ThemeProvider>
      <Theme />
    </ThemeProvider>
  );
};

export default App;
