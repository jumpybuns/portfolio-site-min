import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`  body, #root, a {
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};

}`;
