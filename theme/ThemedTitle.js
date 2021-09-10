import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: ${(props) => props.theme.colors.text};
  background: ${(props) => props.theme.colors.background};
`;

const ThemedTitle = ({ children }) => {
  return <H1>{children}</H1>;
};

export default ThemedTitle;