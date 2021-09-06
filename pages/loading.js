import Image from "next/image";
import loading from "../public/loading.gif";
import styles from "../styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.container}>
      <Image src={loading} alt="Loading..." height={50} width={50} />
    </div>
  );
};

export default Loading;
