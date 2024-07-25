import React from "react";

import styles from "./TitleAndSubtitle.module.scss";

interface TitleAndSubtitleProps {
  title: string;
  subtitle: string;
}

const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({
  title,
  subtitle,
}) => {
  return (
    <div className={styles.container}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleAndSubtitle;
