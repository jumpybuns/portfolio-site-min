import React from "react";
import Head from "next/head";
import styles from "../styles/Contact.module.css";
import Circles from "../svg/staticCircles";
import Link from "next/link";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ethan Pierce | Contact</title>
      </Head>
      <div id="contact" className={styles.container}>
        <Circles />
        <div className={styles.contactMe}>
          <h1>Contact Me</h1>
        </div>
        <div className={styles.text}>
          <h3>
            Drop me line! I love to chat about projects, philosphy, games,
            music, art, movies...everything!{" "}
          </h3>
        </div>
        <ul className={styles.socials}>
          <h2>Socials</h2>

          <li>
            <Link
              href={"https://www.linkedin.com/in/ethanpiercepresents/"}
              passHref
            >
              <a target="_blank">LinkedIn</a>
            </Link>
          </li>

          <li>
            <Link href={"https://www.instagram.com/eeebypristine/"} passHref>
              <a target="_blank">Instagram</a>
            </Link>
          </li>

          <li>
            <Link href={"https://github.com/jumpybuns"} passHref>
              <a target="_blank">GitHub</a>
            </Link>
          </li>
        </ul>
        <ul className={styles.contacts}>
          <h2>Contacts</h2>
          <li>
            <Link href={"mailto:ethanpiercepresents@gmail.com"} passHref>
              <a target="_blank">Email</a>
            </Link>
          </li>
          <li>541.999.9714</li>
          <li>
            <Link
              href={
                "https://api.whatsapp.com/send/?phone=%2B15419999714&text=Hi%21&app_absent=0"
              }
              passHref
            >
              <a target="_blank">WhatsApp</a>
            </Link>
          </li>
        </ul>
        <div className={styles.resume}>
          <a
            target="_blank"
            rel="noreferrer"
            href={"https://i.postimg.cc/jdC9sY2q/Ethan-Pierce-Resume.png"}
            download="Ethan Pierce Resume"
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;
