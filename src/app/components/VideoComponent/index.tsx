import Image from "next/image";
import React from "react";

import Banner from "@/app/images/breeding_taming_training/Banner_breeding.png";

import styles from "./VideoComponent.module.scss";

interface VideoComponentProps {
  shortTitle: string;
  bigTitle: string;
  videoSrc?: string;
  template?: boolean;
}

const VideoComponent: React.FC<VideoComponentProps> = ({
  shortTitle,
  bigTitle,
  videoSrc,
  template,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <p>{shortTitle}</p>
        <h1>{bigTitle}</h1>
      </div>
      {template ? (
        <Image
          width="1440"
          layout="responsive"
          src={Banner}
          alt="Breeding Taming Trainig"
        />
      ) : (
        <video src={videoSrc} autoPlay muted loop />
      )}
    </div>
  );
};

export default VideoComponent;
