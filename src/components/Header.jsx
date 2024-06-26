import styles from "../styles/Header.module.css";
import { useState, useEffect } from "react";

function Header({ title, score, highscore }) {
  const [shrinkHeader, setShrinkHeader] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShrinkHeader(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className={`${styles.header} ${shrinkHeader ? styles.shrink : ""}`}>
      <div className={styles.title_container}>
        <h1 className={styles.title}>{title}</h1>
      </div>

      <div className={styles.scores_container}>
        <p className={styles.score}>Score: {score}</p>
        <p className={`${styles.score} ${styles.highscore}`}>
          High Score: {highscore}
        </p>
      </div>
    </header>
  );
}

export default Header;
