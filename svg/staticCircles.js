import React, { useState, useCallback, useEffect } from "react";
import styles from "../styles/StaticCircles.module.css";

const circleRadius = 240;
const intialMousePosition = { x: 0, y: 0 };
const circleRadius2 = 150;

const Circles = () => {
  const [mousePosition, setMousePosition] = useState(intialMousePosition);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth / 3);
  }, []);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  return (
    <div id="container" className={styles.container}>
      <svg className={styles.mydivheader} width={width} height={height}>
        <circle
          className={styles.circ}
          cx={mousePosition.x}
          cy={mousePosition.y}
          r={circleRadius + circleRadius2}
        />
        <circle
          className={styles.circ}
          cx={mousePosition.x / 4}
          cy={mousePosition.y / 2}
          r={circleRadius}
        />
        <circle
          className={styles.circ}
          cx={mousePosition.x / 2}
          cy={mousePosition.y / 4}
          r={circleRadius}
        />
        <circle
          className={styles.circ}
          cx={mousePosition.x * 2}
          cy={mousePosition.y * 2}
          r={circleRadius - circleRadius2}
        />
        <circle
          className={styles.circ}
          cx={mousePosition.x * 0.4}
          cy={mousePosition.y * 0.4}
          r={circleRadius - circleRadius2}
        />
        <circle
          className={styles.lastCircle}
          cx={mousePosition.x * 0.6}
          cy={mousePosition.y * 0.6}
          r={circleRadius - circleRadius2}
        />
      </svg>
    </div>
  );
};

export default Circles;
