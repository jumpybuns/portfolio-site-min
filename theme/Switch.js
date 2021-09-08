import React, { useContext } from "react";
import Context from "./context";

import { ACTIONS } from "./Actions";
import { Container, Slider, Input } from "./Styles";

const Switch = () => {
  const { dispatch } = useContext(Context);

  const handleOnClick = () => {
    // Dispatch action
    dispatch({ type: ACTIONS.DARK_MODE });
  };

  return (
    <Container>
      <Input type="checkbox" onClick={handleOnClick} />
      <Slider />
    </Container>
  );
};

export default Switch;
