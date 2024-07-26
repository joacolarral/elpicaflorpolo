"use client";

import classNames from "classnames";
import React from "react";
// Import Swiper React components
import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import styles from "./Carousel.module.scss";

// Define the type for the slides prop
interface Slide {
  id: number;
  value: any;
}

interface CarouselProps {
  slides: Slide[];
  containerClassname?: string;
  slideClassname?: string;
  scrollbarStylesAlternative?: boolean | undefined;
}

const Carousel: React.FC<CarouselProps> = ({
  slides,
  containerClassname,
  slideClassname,
  scrollbarStylesAlternative,
  ...rest
}) => {
  const carouselsContainerStyles = classNames(
    styles.swiper,
    containerClassname
  );
  const slideStyle = classNames(styles.swiperSlide, slideClassname);
  const scrollBarStyles = classNames(
    scrollbarStylesAlternative
      ? styles.scrollbarAlternative
      : styles.scrollBarCustom
  );
  return (
    <Swiper
      scrollbar={{
        hide: false,
        horizontalClass: scrollBarStyles,
      }}
      modules={[Scrollbar]}
      className={carouselsContainerStyles}
      {...rest}
      grabCursor
    >
      {slides.map((slide) => {
        return (
          <SwiperSlide className={slideStyle} key={slide.id}>
            {slide.value}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Carousel;
