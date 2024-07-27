import React from "react";

import styles from "./Card.module.scss";

interface CardProps {
  srcImage: string;
  alt: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ srcImage, alt, title, description }) => {
  const formatDescription = (desc: string) => {
    return desc.split("\n").map((line, index) => <p key={index}>{line}</p>);
  };

  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url(${srcImage})` }}
      role="img"
      aria-label={alt}
    >
      <div className={styles.titleContainer}>
        <h2>{title}</h2>
      </div>

      <div className={styles.hoveredContentContainer}>
        <h2>{title}</h2>
        <div className={styles.horizontalLine} />
        <div className={styles.paragraphContainer}>
          {formatDescription(description)}
        </div>
      </div>
    </div>
  );
};

export default Card;
