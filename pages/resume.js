import Image from "next/image";
import styles from "../styles/Resume.module.css";

const Resume = () => {
  return (
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
  );
};

export default Resume;
