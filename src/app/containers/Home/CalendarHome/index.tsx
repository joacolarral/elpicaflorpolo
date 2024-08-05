"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";

import Container from "@/app/components/Container";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import { SEASON } from "@/app/constants";
import HomeCalendarAutumn from "@/app/images/home/Home_otoño.png";
import HomeCalendarSpring from "@/app/images/home/Home_primavera.png";
import HomeCalendarSummer from "@/app/images/home/Home_verano.png";
import { SeasonType } from "@/app/types";

import styles from "../home.module.scss";

import CalendarCards from "./CalendarCards";

const CalendarHome: React.FC = () => {
  const calendarHomeT = useTranslations("HOME.CALENDAR_SECTION");
  const [hoveredCard, setHoveredCard] = useState<SeasonType>(SEASON.AUTUMN);

  const imageSrc = useMemo(() => {
    const imageHovered = {
      [SEASON.AUTUMN]: HomeCalendarAutumn,
      [SEASON.SPRING]: HomeCalendarSpring,
      [SEASON.SUMMER]: HomeCalendarSummer,
    };
    return imageHovered[hoveredCard];
  }, [hoveredCard]);

  return (
    <Container className={styles.calendarHomeContainer} noPaddingRight>
      <div className={styles.calendarContent}>
        <TitleAndSubtitle
          title={calendarHomeT("TITLE")}
          subtitle={calendarHomeT("SUBTITLE")}
        />
        <CalendarCards
          hoveredCard={hoveredCard}
          setHoveredCard={setHoveredCard}
        />
      </div>
      <div className={styles.pictureContainer}>
        <Image width={515} src={imageSrc} alt="HomeCalendarPhoto" />
      </div>
    </Container>
  );
};

export default CalendarHome;
