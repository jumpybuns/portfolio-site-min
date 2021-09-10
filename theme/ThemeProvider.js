import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme/themes";

export const ThemeContext = createContext({
  isDarkTheme: true,
  toggleTheme: () => {},
});

const ThemeProvider = ({ children }) => {
  const [dark, setDark] = useState(true);

  const toggleTheme = () => {
    setDark(!dark);
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkTheme: dark,
        toggleTheme,
      }}
    >
      <StyledThemeProvider theme={dark ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
