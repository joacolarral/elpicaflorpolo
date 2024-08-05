import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { memo } from "react";

import Carousel from "@/app/components/Carousel";
import Container from "@/app/components/Container";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";

import styles from "../patagonia.module.scss";

const imageImports = [
  "Patagonia_Carrusel1_Paisaje.png",
  "Patagonia_Carrusel2_Noche.png",
  "Patagonia_Carrusel3_Agua.png",
  "Patagonia_Carrusel4_Gastronomia.png",
  "Patagonia_Carrusel5_Evento.png",
  "Patagonia_Carrusel6_Pesca.png",
  "Patagonia_Carrusel7_Arte.png",
  "Patagonia_Carrusel8_Cabalgata.png",
];

const images = imageImports.map((src, index) => ({
  src: require(`@/app/images/patagonia/carousel/${src}`).default,
  alt: `Image ${index + 1}`,
}));

interface Slide {
  id: number;
  value: React.ReactNode;
}

const createSlides = (t: any): Slide[] => {
  const headerSlide = {
    id: 1,
    value: (
      <div className={styles.containerContentHeaderCarousel}>
        <TitleAndSubtitle title={t("TITLE")} subtitle={t("SUBTITLE")} />
      </div>
    ),
  };

  const imageSlides = images.map((image, index) => ({
    id: index + 2,
    value: (
      <div className={styles.containerImageCarousel}>
        <Image layout="responsive" src={image.src} alt={image.alt} />
      </div>
    ),
  }));

  return [headerSlide, ...imageSlides];
};

const CarouselPatagonia: React.FC = () => {
  const t = useTranslations("PATAGONIA.CAROUSEL_PATAGONIA");
  const slides = createSlides(t);

  return (
    <Container className={styles.carouselPatagoniaContainer} alternativeBg>
      <Carousel
        slides={slides}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides
        centeredSlidesBounds
        slideToClickedSlide
        normalizeSlideIndex={false}
        freeMode
        width={1350}
      />
    </Container>
  );
};

export default memo(CarouselPatagonia);
