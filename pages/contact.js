import React from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ethan Pierce | Contact</title>
      </Head>
      <div id="contact" className={styles.container}>
        <div className={styles.contactMe}>
          <h1>Contact Me</h1>
        </div>
        <ul className={styles.links}>
          <li>EthanPiercePresents@gmail.com</li>
          <li>GitHub</li>
          <li>LinkedIn</li>
        </ul>
        <div className={styles.downloadButton}>
          <a
            className={styles.myButton}
            href="../public/resume.png"
            download="Ethan Pierce Resume"
          >
            Download Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
