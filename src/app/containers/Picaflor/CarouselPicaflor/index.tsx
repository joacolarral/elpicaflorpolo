import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { memo } from "react";

import Carousel from "@/app/components/Carousel";
import Container from "@/app/components/Container";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";

import styles from "../picaflor.module.scss";

const imageImports = [
  "Picaflor_Carrusel1_Alojamiento1.png",
  "Picaflor_Carrusel2_Alojamiento2.png",
  "Picaflor_Carrusel3_Eventos.png",
  "Picaflor_Carrusel4_Eventos2.png",
  "Picaflor_Carrusel5_Gastronomia1.png",
  "Picaflor_Carrusel6_Gastronomia2.png",
  "Picaflor_Carrusel7_Entrenamiento1.png",
  "Picaflor_Carrusel8-Entrenamiento2.png",
];

const images = imageImports.map((src, index) => ({
  src: require(`@/app/images/picaflor/carousel/${src}`).default,
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

const CarouselPicaflor: React.FC = () => {
  const t = useTranslations("PICAFLOR.CAROUSEL_PICAFLOR");
  const slides = createSlides(t);

  return (
    <Container className={styles.carouselPicaflorContainer} alternativeBg>
      <Carousel
        slides={slides}
        slidesPerView={2}
        spaceBetween={30}
        centeredSlides
        centeredSlidesBounds
        slideToClickedSlide
        normalizeSlideIndex={false}
      />
    </Container>
  );
};

export default memo(CarouselPicaflor);
