import Image from "next/image";
import styles from "../styles/Resume.module.css";
import Head from "next/head";

const Resume = () => {
  return (
    <>
      <Head>
        <title>Ethan Pierce | Resume</title>
      </Head>
      <div>
        <Image
          className={styles.resume}
          src="/resume.png"
          alt=""
          layout="responsive"
          width={36}
          height={48}
        />
      </div>
    </>
  );
};

export default Resume;
