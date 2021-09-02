import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title>Ethan Pierce | About</title>
      </Head>
      <div className={styles.container}>
        <h1 className={styles.aboutMeBox}>ABOUT ME</h1>
        <div className={styles.text}>
          <h3>
            Creative problem solver, communicative collaborator with a passion
            for front-end development. Consultative manager with experience in
            high-pressure situations.
          </h3>
        </div>

        <Image
          className={styles.profile}
          src="/profile.jpg"
          width={180}
          height={260}
          alt="profile"
        />

        <div className={styles.text2}>
          <h3>
            Able to work independently and think critically to develop
            human-centered solutions. I am an efficient, fun, and patient
            engineer with excellent communication skills that is able to teach
            and explain complex concepts in a way that relates to and reinforces
            confidence in the individual.
          </h3>
        </div>

        <div className={styles.techStack}>
          <h1>TECH STACK</h1>
        </div>
        <div className={styles.techs}>
          <h2>Languages</h2>
          <pre>HTML CSS Javascript</pre>

          <h2>Front End</h2>
          <pre>React NextJS Socket.IO D3 Material-UI</pre>

          <h2>Back End</h2>
          <pre>Node GraphQL postgreSQL Express</pre>

          <h2>Dev Tools</h2>
          <pre>Netlify Heroku MongoDB Postman PGAdmin</pre>
        </div>
      </div>
    </>
  );
};

export default About;
