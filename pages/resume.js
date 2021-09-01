import Image from "next/image";
import styles from "../styles/Resume.module.css";

const Resume = () => {
  return (
    <div className={styles.resume}>
      <Image
        src="/resume.png"
        alt=""
        layout="responsive"
        width={720}
        height={960}
      />
    </div>
  );
};

export default Resume;
