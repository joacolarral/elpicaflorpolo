"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { memo, useState } from "react";

import Carousel from "@/app/components/Carousel";
import Container from "@/app/components/Container";

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
    id: index + 2,
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
        <Image layout="responsive" src={image.src} alt={image.alt} />
      </div>
    ),
  }));

  return imageSlides;
};

const CarouselBreedingTamingTraining: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = createSlides(activeIndex);

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
        width={1100}
        slidesOffsetBefore={80}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
      />
    </Container>
  );
};

export default memo(CarouselBreedingTamingTraining);
