import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { orange, blue } from "../theme/themes";

export const BallThemeContext = createContext({
  isBallTheme: true,
  toggleBalls: () => {},
});

const BallThemeProvider = ({ children }) => {
  const [balls, setBalls] = useState(true);

  const toggleBalls = () => {
    setBalls(!balls);
  };

  return (
    <BallThemeContext.Provider
      value={{
        isBallTheme: balls,
        toggleBalls,
      }}
    >
      <StyledThemeProvider theme={balls ? orange : blue}>
        {children}
      </StyledThemeProvider>
    </BallThemeContext.Provider>
  );
};

export default BallThemeProvider;
