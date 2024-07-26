import Image from "next/image";
import { useTranslations } from "next-intl";
import React from "react";

import Carousel from "@/app/components/Carousel";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import ImgCarousel_1 from "@/app/images/home/carousel/Home_carrusel1_Experiencia_Polo.png";
import ImgCarousel_2 from "@/app/images/home/carousel/Home_carrusel2_Experiencia_Pesca.png";
import ImgCarousel_3 from "@/app/images/home/carousel/Home_carrusel3_Experiencia_Paisajes.png";
import ImgCarousel_4 from "@/app/images/home/carousel/Home_carrusel4_Experiencia_Gastronomica.png";
import ImgCarousel_5 from "@/app/images/home/carousel/Home_carrusel5_Experiencia_Cascada.png";
import ImgCarousel_6 from "@/app/images/home/carousel/Home_carrusel6_Experiencia_Asador_carretilla.png";
import ImgCarousel_7 from "@/app/images/home/carousel/Home_carrusel7_Experiencia_Trekking.png";
import ImgCarousel_8 from "@/app/images/home/carousel/Home_carrusel8_Experiencia_guitarreada.png";
import ImgCarousel_9 from "@/app/images/home/carousel/Home_carrusel9_Experiencia_Kayak.png";

import styles from "../home.module.scss";

interface Slide {
  id: number;
  value: React.ReactNode;
}

const images = [
  { src: ImgCarousel_1, alt: "Experiencia Polo" },
  { src: ImgCarousel_2, alt: "Experiencia Pesca" },
  { src: ImgCarousel_3, alt: "Experiencia Paisajes" },
  { src: ImgCarousel_4, alt: "Experiencia Gastronómica" },
  { src: ImgCarousel_5, alt: "Experiencia Cascada" },
  { src: ImgCarousel_6, alt: "Experiencia Asador carretilla" },
  { src: ImgCarousel_7, alt: "Experiencia Trekking" },
  { src: ImgCarousel_8, alt: "Experiencia Guitarreada" },
  { src: ImgCarousel_9, alt: "Experiencia Kayak" },
];

const CarouselHome: React.FC = () => {
  const carouselHomeT = useTranslations("HOME.CAROUSEL_HOME");
  const slides: Slide[] = images.map((image, index) => ({
    id: index + 1,
    value: <Image layout="responsive" src={image.src} alt={image.alt} />,
  }));

  return (
    <div className={styles.carouselHomeContainer}>
      <div className={styles.carouselTextContainer}>
        <TitleAndSubtitle
          colorAlternative
          title={carouselHomeT("TITLE")}
          subtitle={carouselHomeT("SUBTITLE")}
        />
      </div>
      <Carousel slides={slides} scrollbarStylesAlternative />
    </div>
  );
};

export default CarouselHome;
