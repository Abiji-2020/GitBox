// components/Loading.js
import styles from "./styles/Loading.module.css";

const Loading = () => {
  return (
    <div className={styles.loadingScreen}>
      <p className={styles.loadingText}>Loading...</p>
    </div>
  );
};

export default Loading;
