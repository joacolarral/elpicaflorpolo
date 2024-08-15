import Image, { StaticImageData } from "next/image";
import React from "react";

import Button from "@/app/components/Button";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import useIsMobile from "@/app/hooks/useIsMobile";

import styles from "./MapView.module.scss";

interface MapViewProps {
  imgMap: StaticImageData;
  title: string;
  subtitle: string;
  redirectUrl: string;
  buttonLabel: string;
  imagePlace: StaticImageData;
}

const MapView: React.FC<MapViewProps> = ({
  imgMap,
  title,
  subtitle,
  redirectUrl,
  buttonLabel,
  imagePlace,
}) => {
  const isMobile = useIsMobile();
  return isMobile ? (
    <div className={styles.containerMapView}>
      <TitleAndSubtitle title={title} />
      <div className={styles.imageContainer}>
        <Image layout="responsive" src={imgMap} alt="MapView" />
      </div>
      <p>{subtitle}</p>
      <div className={styles.containerContentMapView}>
        <Button redirect={redirectUrl} isSecondaryButton>
          {buttonLabel}
        </Button>
      </div>
    </div>
  ) : (
    <div className={styles.containerMapView}>
      <div className={styles.imageContainer}>
        <Image layout="responsive" src={imgMap} alt="MapView" />
      </div>
      <div className={styles.containerContentMapView}>
        <TitleAndSubtitle title={title} subtitle={subtitle} />
        <Button redirect={redirectUrl} isSecondaryButton>
          {buttonLabel}
        </Button>
        <Image layout="responsive" src={imagePlace} alt="MapView" />
      </div>
    </div>
  );
};

export default MapView;
