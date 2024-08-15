import classNames from "classnames";
import React from "react";

import styles from "./TitleAndSubtitle.module.scss";

interface TitleAndSubtitleProps {
  title: string;
  subtitle?: string;
  colorAlternative?: boolean | undefined;
}

const TitleAndSubtitle: React.FC<TitleAndSubtitleProps> = ({
  title,
  subtitle,
  colorAlternative,
}) => {
  const textStyles = classNames(
    styles.container,
    colorAlternative && styles.colorAlternative
  );
  classNames;
  return (
    <div className={textStyles}>
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
  );
};

export default TitleAndSubtitle;
