import React from 'react';
import Head from 'next/head';
import Circles from '../svg/staticCircles';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title>Ethan Pierce | About</title>
      </Head>
      {/* Animated Circle SVGs */}
      <Circles />
      {/* ABOUT ME PAGE */}
      <div className={styles.container}>
        {/* ABOUT */}
        <h1 className={styles.aboutMeBox}>ABOUT</h1>
        <div className={styles.text}>
          <h3>
            Creative problem solver, communicative collaborator with a passion
            for front-end development. Consultative manager with experience in
            high-pressure situations.
          </h3>
        </div>
        <div className={styles.text}>
          <h3>
            Able to work independently and think critically to develop
            human-centered solutions. I am an efficient, fun, and patient
            engineer with excellent<br></br> communication skills that is able
            to teach and explain complex concepts in a way that relates to and
            reinforces confidence in the individual.
          </h3>
        </div>
        {/* TECH STACK */}
        <div className={styles.techStack}>
          <h1>TECH STACK</h1>
        </div>
        <div className={styles.text2}>
          <h2>Languages</h2>
          <pre>HTML CSS Typescript</pre>

          <h2>Front End</h2>
          <pre>React NextJS Tailwind THREE.JS</pre>

          <h2>Back End</h2>
          <pre>Node GraphQL postgreSQL Express</pre>

          <h2>Dev Tools</h2>
          <pre>Netlify Vercel Heroku Postman PGAdmin</pre>
        </div>
      </div>
    </>
  );
};

export default About;
