"use client";

import classNames from "classnames";
import React from "react";
// Import Swiper React components
import { FreeMode, Mousewheel, Scrollbar, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide, SwiperProps } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import 'swiper/css/navigation';

// Import component styles
import useDevices from "@/app/hooks/useDevices";

import styles from "./Carousel.module.scss";
import "./Carousel.css";

interface Slide {
  id: number;
  value: any;
}

interface CustomCarouselProps {
  slides: Slide[];
  containerClassname?: string;
  slideClassname?: string;
  scrollbarStylesAlternative?: boolean | undefined;
  disableScrollbar?: boolean;
}

// Intersect SwiperProps with CustomCarouselProps
type CarouselProps = CustomCarouselProps & SwiperProps;

const Carousel: React.FC<CarouselProps> = ({
  slides,
  containerClassname,
  slideClassname,
  scrollbarStylesAlternative,
  disableScrollbar,
  ...rest
}) => {
  const {isDesktop} =  useDevices()
  const carouselsContainerStyles = classNames(
    styles.swiper,
    containerClassname
  );
  const slideStyle = classNames(styles.swiperSlide, slideClassname);

  const scrollBarStyles = classNames({
    [styles.disableScrollbar]: disableScrollbar,
    [styles.scrollbarAlternative]:
      !disableScrollbar && scrollbarStylesAlternative,
    [styles.scrollBarCustom]: !disableScrollbar && !scrollbarStylesAlternative,
  });

  
  return (
    <Swiper
      scrollbar={{
        hide: false,
        horizontalClass: scrollBarStyles,
        draggable: true,
      }}
      navigation={isDesktop}
      direction="horizontal"
      mousewheel={{
        forceToAxis: true,
        enabled: true,
      }}
      modules={[Scrollbar, FreeMode, Mousewheel, Navigation]}
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
