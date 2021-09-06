import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import aurora from "../public/auroraWide.jpg";
import karaoke from "../public/karaokeWide.jpg";
import chatable from "../public/chatableWide.jpg";
import bloom from "../public/bloomWide.jpg";
import styles from "../styles/Work.module.css";
import Circles from "../svg/staticCircles";
import Loading from "./loading";

const auroraTitle = "Aurora Synth";
const karaokeTitle = "Karaoke Roulette";
const chatableTitle = "Chatable";
const bloomTitle = "Bloom Financial";

const auroraCode = "https://github.com/bryanakitchen/aurora";
const karaokeCode = "https://github.com/Karaoke-Roulette";
const chatableCode = "https://github.com/Chatable-2021";
const bloomCode = "https://github.com/Bloom-Financial";

const auroraText =
  "Beautiful interactive web browser synth built with vanilla JavaScript and Web Audio API. I implimented the series of audio nodes and created the different wave shapes and filters as well as used ChartJS to create the dynamic graph";

const karaokeText =
  "Social app utilizing YouTube API to create randomized karaoke videos. We used Javascript, React, SQL, Heroku, Netlify, CSS I created the API call, implemented the authorization, ran tests, and created the CRUD routes.";

const chatableText =
  "Instantaneous live chat app and chat rooms created with Socket.IO and Material-UI. I designed and created the messaging emits and broadcasts. I also wrote the User and Auth models/routes. ";

const bloomText =
  "Stock Trading learning tool using NewsAPI, Live Stock Ticker, Finance Widget and seemlessly integrating Alpaca Finance with your own portfolio. I setup the Oauth, created the landing page and built the entirety of the Alpaca integration.";

const images = { aurora, karaoke, chatable, bloom };

const Work = () => {
  const [selected, setSelected] = useState(images.aurora);
  const [selectedText, setSelectedText] = useState(auroraText);
  const [selectedTitle, setSelectedTitle] = useState(auroraTitle);
  const [loading, setLoading] = useState(true);
  const [selectedCode, setSelectedCode] = useState(auroraCode);

  useEffect(() => {
    setTimeout(() => setLoading(false));
  }, []);

  return (
    <>
      <Head>
        <title>Ethan Pierce | Work</title>
      </Head>
      {loading === false ? (
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
                  setSelectedText(auroraText);
                  setSelectedTitle(auroraTitle);
                  setSelectedCode(auroraCode);
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
                  setSelectedText(karaokeText);
                  setSelectedTitle(karaokeTitle);
                  setSelectedCode(karaokeCode);
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
                  setSelectedText(chatableText);
                  setSelectedTitle(chatableTitle);
                  setSelectedCode(chatableCode);
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
                  setSelectedText(bloomText);
                  setSelectedTitle(bloomTitle);
                  setSelectedCode(bloomCode);
                }}
              >
                Bloom Financial
              </a>
            </Link>
          </div>
          {/* <div className={styles.code}>{selectedCode}</div> */}
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
      ) : (
        <Loading />
      )}
    </>
  );
};

export default Work;
