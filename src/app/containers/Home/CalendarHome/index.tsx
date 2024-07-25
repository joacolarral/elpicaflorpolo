"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";

import Container from "@/app/components/Container";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import { SEASON } from "@/app/constants";
import HomeCalendarAutumn from "@/app/images/home/Home_otoño_El_Picaflor.png";
import HomeCalendarSpring from "@/app/images/home/Home_primavera_El_Pica.png";
import HomeCalendarSummer from "@/app/images/home/Home_verano_Patagonia.png";
import { SeasonType } from "@/app/types";

import CalendarCards from "../components/CalendarCards";
import styles from "../home.module.scss";

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
      <Image layout="responsive" src={imageSrc} alt="HomeCalendarPhoto" />
    </Container>
  );
};

export default CalendarHome;
