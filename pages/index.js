import Head from "next/head";
import Circles from "../svg/circles";
import ThemedTitle from "../theme/ThemedTitle";
import ThemeToggler from "../theme/ThemeToggler";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Ethan Pierce | Home</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <pre className={styles.title}> Ethan Pierce</pre>
          <p className={styles.phrase}>
            CLICK AROUND TO HELP ME DESIGN MY HOME PAGE
          </p>
          <h2 className={styles.description}>
            Software Developer Based in Portland, OR
          </h2>
        </main>
      </div>
    </>
  );
}
