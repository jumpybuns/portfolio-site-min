import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import aurora from "../public/auroraWide.jpg";
import karaoke from "../public/karaokeWide.jpg";
import chatable from "../public/chatableWide.jpg";
import bloom from "../public/bloomWide.jpg";
import styles from "../styles/Work.module.css";
import Circles from "../svg/staticCircles";
import projects from "./api/workDetails";

const work = projects.map((item) => {
  return item;
});

const images = { aurora, karaoke, chatable, bloom };

const Work = () => {
  const [selected, setSelected] = useState(images.aurora);
  const [selectedText, setSelectedText] = useState(work[0].auroraText);
  const [selectedTitle, setSelectedTitle] = useState(work[0].auroraTitle);

  return (
    <>
      <Head>
        <title>Ethan Pierce | Work</title>
      </Head>

      <div className={styles.container}>
        <Circles />
        <h1 className={styles.work}>WORK</h1>
        <div className={styles.links}>
          <Link
            href={"https://aurora-synth.netlify.app/aurora/index.html"}
            passHref
          >
            <a
              target="_blank"
              className={styles.aurora}
              onMouseOver={() => {
                setSelected(images.aurora);
                setSelectedText(work[0].auroraText);
                setSelectedTitle(work[0].auroraTitle);
              }}
            >
              Aurora Synth
            </a>
          </Link>
          <Link href={"https://karaoke-roulette.netlify.app/"} passHref>
            <a
              target="_blank"
              className={styles.karaoke}
              onMouseOver={() => {
                setSelected(images.karaoke);
                setSelectedText(work[1].karaokeText);
                setSelectedTitle(work[1].karaokeTitle);
              }}
            >
              Karaoke Roulette
            </a>
          </Link>
          <Link
            href={"https://adoring-wright-0eba98.netlify.app/landing-page"}
            passHref
          >
            <a
              target="_blank"
              className={styles.chatable}
              onMouseOver={() => {
                setSelected(images.chatable);
                setSelectedText(work[2].chatableText);
                setSelectedTitle(work[2].chatableTitle);
              }}
            >
              Chatable
            </a>
          </Link>
          <Link href={"https://bloom-financial.netlify.app/"} passHref>
            <a
              target="_blank"
              className={styles.bloom}
              onMouseOver={() => {
                setSelected(images.bloom);
                setSelectedText(work[3].bloomText);
                setSelectedTitle(work[3].bloomTitle);
              }}
            >
              Bloom Financial
            </a>
          </Link>
        </div>
        <Image
          className={styles.images}
          src={selected}
          alt="project"
          width={384}
          height={216}
        />

        <div className={styles.description}>
          <p>{selectedText}</p>
        </div>
      </div>
    </>
  );
};

export default Work;
