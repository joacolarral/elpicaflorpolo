"use client";

import classNames from "classnames";
import React from "react";
// Import Swiper React components
import { FreeMode, Mousewheel, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";

import styles from "./Carousel.module.scss";

interface Slide {
  id: number;
  value: any;
}

interface CustomCarouselProps {
  slides: Slide[];
  containerClassname?: string;
  slideClassname?: string;
  scrollbarStylesAlternative?: boolean | undefined;
}

// Intersect SwiperProps with CustomCarouselProps
type CarouselProps = CustomCarouselProps & SwiperProps;

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
        draggable: true,
      }}
      direction="horizontal"
      mousewheel={{
        forceToAxis: true,
        enabled: true,
      }}
      modules={[Scrollbar, FreeMode, Mousewheel]}
      className={carouselsContainerStyles}
      {...rest}
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
