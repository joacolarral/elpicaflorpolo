import classNames from "classnames";
import React from "react";

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
  const containerStyles = classNames(
    styles.container,
    template && styles.template
  );
  return (
    <div className={containerStyles}>
      <div className={styles.titleContainer}>
        <p>{shortTitle}</p>
        <h1>{bigTitle}</h1>
      </div>
      {!template && (
        <video
          src={videoSrc}
          autoPlay
          loop
          playsInline
          muted
          onClick={(e) => (e.target as HTMLVideoElement).play()}
          onTouchStart={(e) => (e.target as HTMLVideoElement).play()}
        />
      )}
    </div>
  );
};

export default VideoComponent;
