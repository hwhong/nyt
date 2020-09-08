import React from "react";
import styles from "./main.module.css";
import logoPath from "./asset/logo.svg";

function App() {
  const tabs = [
    "",
    "World",
    "U.S.",
    "Politics",
    "N.Y.",
    "Business",
    "Opinion",
    "Tech",
    "Science",
    "Health",
    "Sports",
    "Arts",
    "Books",
    "Style",
    "Food",
    "Travel",
    "Magazine",
    "T Magazine",
    "Real Estate",
    "Video",
    "",
  ];

  const podcasts = ["The Morning", "Modern Love", 'Listen to "The Daily"'];

  return (
    <div className={styles.root}>
      <div className={styles.topBanner}>
        <div className={styles.left}>Tuesday, September 8, 2020</div>
        <div className={styles.mid}>
          <a className={styles.imageContainer}>
            <img src={logoPath} className={styles.image} />
          </a>
        </div>
        <div className={styles.right}>Today's Paper</div>
        <div className={styles.tabs}>
          {tabs.map((tab) => (
            <p className={styles.tabName}>{tab}</p>
          ))}
        </div>
      </div>
      <div className={styles.midBanner}>
        {podcasts.map((pc) => (
          <div className={styles.podcast}>{pc}</div>
        ))}
        <div>Weather</div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}

export default App;

// 1fr means that it will take up the available space left.
// grid-column: 1 / -1; makes content span entire row
// grid-template-columns: repeat(21, minmax(0, 1fr)); for equally sized width columns
