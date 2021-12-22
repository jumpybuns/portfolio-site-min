import React, { useState, useCallback, useEffect } from 'react';
import styles from '../styles/Circles.module.css';

// INITIAL CIRCLE POSITION

const circleRadius = 240;
const intialMousePosition = { x: 0, y: 0 };
const circleRadius2 = 150;

const Circles = () => {
  const [mousePosition, setMousePosition] = useState(intialMousePosition);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  // SET THE CIRCLE SIZE TO SCREEN
  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    setHeight(window.innerHeight);
  }, []);

  // GET MOUSE COORDINATES

  const handleMouseMove = useCallback(
    (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    },
    [setMousePosition]
  );

  return (
    <>
      {/* CIRCLE SVGs */}
      <div id='container' className={styles.container}>
        <svg
          className={styles.mydivheader}
          width={width}
          height={height}
          onMouseDown={handleMouseMove}
        >
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
            cx={mousePosition.x}
            cy={mousePosition.y}
            r={circleRadius - circleRadius2}
          />
        </svg>
      </div>
    </>
  );
};

export default Circles;
