import Head from 'next/head';
import Circles from '../svg/circles';
import styles from '../styles/Home.module.css';
import ThemeToggler from '../theme/ThemeToggler';

export default function Home() {
  return (
    <>
      {/* HOME PAGE */}
      <div className={styles.container}>
        <Head>
          <title>Ethan Pierce | Home</title>
          <meta name='description' content='Generated by create next app' />
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {/* SVG Circles */}
        <Circles />
        {/* TITLE SECTION */}
        <main className={styles.main}>
          <pre className={styles.ethan}>Ethan </pre>
          <pre className={styles.pierce}>Pierce </pre>
          {/* DARK MODE BUTTON */}
          <ThemeToggler />
          <p className={styles.phrase}>
            CLICK AROUND TO SEE THE FLUIDITY OF COLLABORATION IN ACTION
          </p>
          {/* DESCRIPTION */}
          <h2 className={styles.description}>
            Software Developer Based in Portland, OR
          </h2>
        </main>
      </div>
    </>
  );
}
