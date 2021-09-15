import { Moon, Sun } from "@styled-icons/evaicons-solid";
import React, { useContext } from "react";
import Switch from "react-switch";
import styled from "styled-components";
import { BallThemeContext } from "./BallProvider";
import styles from "../styles/Home.module.css";

const Icon = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SunIcon = styled(Sun)`
  color: #f28c38;
`;

const MoonIcon = styled(Moon)`
  color: #373741;
`;

const BallToggler = () => {
  const { isBallTheme, toggleBalls } = useContext(BallThemeContext);

  return (
    <div className={styles.toggler}>
      <Switch
        onChange={toggleBalls}
        checked={isBallTheme}
        handleDiameter={20}
        checkedIcon={
          <Icon>
            <MoonIcon size="20px" />
          </Icon>
        }
        onColor="#fce5a6"
        uncheckedIcon={
          <Icon>
            <SunIcon size="20px" />
          </Icon>
        }
        offColor="#373741"
      />
    </div>
  );
};

export default BallToggler;
