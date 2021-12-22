import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import aurora from '../public/auroraWide.jpg';
import karaoke from '../public/karaokeWide.jpg';
import chatable from '../public/chatableWide.jpg';
import drawing from '../public/drawing.jpg';
import styles from '../styles/Work.module.css';
import Circles from '../svg/staticCircles';
import projects from './api/workDetails';

// PROJECT DATA
const work = projects.map((item) => {
  return item;
});

// PROJECT IMAGES
const images = { aurora, karaoke, chatable, drawing };

const Work = () => {
  const [selected, setSelected] = useState(images.drawing);
  const [selectedText, setSelectedText] = useState(work[0].drawText);
  const [selectedTitle, setSelectedTitle] = useState(work[0].drawTitle);

  return (
    <>
      <Head>
        <title>Ethan Pierce | Work</title>
      </Head>
      {/* WORK PAGE */}
      <div className={styles.container}>
        <Circles />
        <h1 className={styles.work}>WORK</h1>
        {/* PROJECT LIST */}
        <div className={styles.links}>
          <Link href={'https://colorfull.vercel.app/'} passHref>
            <a
              target='_blank'
              className={styles.drawing}
              onMouseOver={() => {
                setSelected(images.drawing);
                setSelectedText(work[3].drawText);
                setSelectedTitle(work[3].drawTitle);
              }}
            >
              Colorful
            </a>
          </Link>
          <Link
            href={'https://aurora-synth.netlify.app/aurora/index.html'}
            passHref
          >
            <a
              target='_blank'
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
          <Link href={'https://karaoke-roulette.netlify.app/'} passHref>
            <a
              target='_blank'
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
            href={'https://adoring-wright-0eba98.netlify.app/landing-page'}
            passHref
          >
            <a
              target='_blank'
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
        </div>
        <div className={styles.imageBox}>
          <Image
            className={styles.images}
            src={selected}
            alt='project'
            width={384}
            height={216}
          />
        </div>
        <div className={styles.description}>
          <p>{selectedText}</p>
        </div>
      </div>
    </>
  );
};

export default Work;
