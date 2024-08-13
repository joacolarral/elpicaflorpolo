"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { memo, useState } from "react";

import Carousel from "@/app/components/Carousel";
import Container from "@/app/components/Container";
import useIsMobile from "@/app/hooks/useIsMobile";

import styles from "../breeding.module.scss";

const imageImports = [
  "Cria_Carrusel1_FotoPolo.png",
  "Cria_Carrusel2_FotoGaucho.png",
  "Cria_Carrusel3_FotoCaballos.png",
  "Cria_Carrusel4_FotoMontura.png",
  "Cria_Carrusel5_FotoVendaje.png",
  "Cria_Carrusel6_FotoFilete.png",
];

const images = imageImports.map((src, index) => ({
  src: require(`@/app/images/breeding_taming_training/carousel/${src}`).default,
  alt: `Image ${index + 1}`,
}));

interface Slide {
  id: number;
  value: React.ReactNode;
}

const createSlides = (activeIndex: number): Slide[] => {
  const imageSlides = images.map((image, index) => ({
    id: index + 1,
    value: (
      <div
        className={classNames(styles.containerImageCarousel, {
          [styles.inactiveImage]: index > activeIndex,
        })}
      >
        {index === 0 && (
          <p>
            Nos dedicamos a la cría de caballos de polo de alta calidad.
            Nuestros caballos reciben el mejor cuidado y entrenamiento para
            garantizar un rendimiento óptimo.
          </p>
        )}
        <Image src={image.src} alt={image.alt} />
      </div>
    ),
  }));

  return imageSlides;
};

const CarouselBreedingTamingTraining: React.FC = () => {
  const isMobile = useIsMobile();
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = createSlides(activeIndex);

  const activeImgs = (swiper) => {
    console.log("[swiper]", swiper);
    if (swiper.isBeginning) return setActiveIndex(0);
    if (swiper.isEnd) return setActiveIndex(slides.length);
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <Container className={styles.carouselPicaflorContainer} alternativeBg>
      <Carousel
        slides={slides}
        slidesPerView={2}
        spaceBetween={30}
        slideToClickedSlide
        normalizeSlideIndex={false}
        width={isMobile ? 1000 : 1150}
        slidesOffsetBefore={isMobile ? 40 : 80}
        slidesOffsetAfter={isMobile ? 600 : -200}
        freeMode
        onScroll={(swiper) => activeImgs(swiper)}
      />
    </Container>
  );
};

export default memo(CarouselBreedingTamingTraining);
