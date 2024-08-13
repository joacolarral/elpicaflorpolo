import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { memo, useMemo } from "react";

import Carousel from "@/app/components/Carousel";
import Container from "@/app/components/Container";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import useIsMobile from "@/app/hooks/useIsMobile";

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

const createSlides = (t: any, isMobile: boolean): Slide[] => {
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
        <Image src={image.src} alt={image.alt} />
      </div>
    ),
  }));
  return isMobile ? imageSlides : [headerSlide, ...imageSlides];
};

const CarouselPicaflor: React.FC = () => {
  const t = useTranslations("PICAFLOR.CAROUSEL_PICAFLOR");
  const isMobile = useIsMobile();
  const slides = useMemo(() => createSlides(t, isMobile), [isMobile, t]);

  return (
    <Container className={styles.carouselPicaflorContainer} alternativeBg>
      {isMobile && (
        <div className={styles.containerContentHeaderCarousel}>
          <TitleAndSubtitle title={t("TITLE")} subtitle={t("SUBTITLE")} />
        </div>
      )}
      <Carousel
        slides={slides}
        slidesPerView={2}
        spaceBetween={isMobile ? 8 : 30}
        centeredSlides
        centeredSlidesBounds
        slideToClickedSlide
        slidesOffsetBefore={isMobile ? 24 : 0}
        slidesOffsetAfter={isMobile ? 200 : 0}
        normalizeSlideIndex={false}
        freeMode
        width={isMobile ? 600 : 1350}
      />
    </Container>
  );
};

export default memo(CarouselPicaflor);
