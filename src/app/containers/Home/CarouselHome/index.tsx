import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useMemo } from "react";

import Carousel from "@/app/components/Carousel";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import useIsMobile from "@/app/hooks/useIsMobile";

import styles from "../home.module.scss";

import { IMAGES_CAROUSEL } from "./importsImages.constants";

const buildSlides = (isMobile: boolean) => {
  const images = isMobile ? IMAGES_CAROUSEL.mobile : IMAGES_CAROUSEL.desktop;
  return images.map((image, index) => ({
    id: index + 1,
    value: (
      <Image
        key={index}
        width={isMobile ? 813 : 1440}
        layout="responsive"
        src={image.src}
        alt={image.alt}
      />
    ),
  }));
};

const CarouselHome: React.FC = () => {
  const isMobile = useIsMobile();
  const carouselHomeT = useTranslations("HOME.CAROUSEL_HOME");

  const slides = useMemo(() => buildSlides(isMobile), [isMobile]);

  return (
    <div className={styles.carouselHomeContainer}>
      <div className={styles.carouselTextContainer}>
        <TitleAndSubtitle
          colorAlternative
          title={carouselHomeT("TITLE")}
          subtitle={carouselHomeT("SUBTITLE")}
        />
      </div>
      <Carousel
        height={800}
        containerClassname={styles.carouselContainer}
        slides={slides}
        scrollbarStylesAlternative
      />
    </div>
  );
};

export default CarouselHome;
