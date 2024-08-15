"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useMemo } from "react";

import Button from "@/app/components/Button";
import Carousel from "@/app/components/Carousel";
import { NAVBAR_ITEMS, SEASON } from "@/app/constants";
import styles from "@/app/containers/Home/home.module.scss";
import useIsMobile from "@/app/hooks/useIsMobile";
import Autumn from "@/app/images/home/season_autumn.png";
import AutumnHover from "@/app/images/home/season_autumn_hover.png";
import Spring from "@/app/images/home/season_spring.png";
import SpringHover from "@/app/images/home/season_spring_hover.png";
import SummerHover from "@/app/images/home/season_summer_hover.png";
import Summer from "@/app/images/home/season_verano.png";
import Otoño from "@/app/images/home/Temporada_otoño.png";
import OtoñoHover from "@/app/images/home/Temporada_otoño_hover.png";
import Primavera from "@/app/images/home/Temporada_primavera.png";
import PrimaveraHover from "@/app/images/home/Temporada_primavera_hover.png";
import Verano from "@/app/images/home/Temporada_verano.png";
import VeranoHover from "@/app/images/home/Temporada_verano_hover.png";
import { SeasonType } from "@/app/types";

interface CalendarCardsProps {
  setHoveredCard: Dispatch<SetStateAction<SeasonType>>;
  hoveredCard: string;
}

interface Slide {
  id: number;
  value: React.ReactNode;
}

const CalendarCards: React.FC<CalendarCardsProps> = ({
  setHoveredCard,
  hoveredCard,
}) => {
  const isMobile = useIsMobile();
  const pathname = usePathname();
  const calendarHomeT = useTranslations("HOME.CALENDAR_SECTION");

  const currentLang = useMemo(() => {
    if (pathname.includes("/es")) return "es";
    if (pathname.includes("/en")) return "en";
    return "";
  }, [pathname]);

  const cards = [
    {
      season: SEASON.AUTUMN,
      defaultImage: currentLang === "en" ? Autumn : Otoño,
      hoverImage: currentLang === "en" ? AutumnHover : OtoñoHover,
      linkTo: NAVBAR_ITEMS.PICAFLOR,
    },
    {
      season: SEASON.SPRING,
      defaultImage: currentLang === "en" ? Spring : Primavera,
      hoverImage: currentLang === "en" ? SpringHover : PrimaveraHover,
      linkTo: NAVBAR_ITEMS.PICAFLOR,
    },
    {
      season: SEASON.SUMMER,
      defaultImage: currentLang === "en" ? Summer : Verano,
      hoverImage: currentLang === "en" ? SummerHover : VeranoHover,
      linkTo: NAVBAR_ITEMS.PATAGONIA,
    },
  ];

  const isHovered = (seasonCard: SeasonType) => seasonCard === hoveredCard;

  const slides: Slide[] = cards.map((card, index) => ({
    id: index + 1,
    value: (
      <Link href={`#${card.linkTo}`}>
        <div className={styles.calendarCard}>
          <Image src={card.hoverImage} alt={card.season} />
          <Button isSecondaryButton>{calendarHomeT("BUTTON")}</Button>
        </div>
      </Link>
    ),
  }));

  return (
    <div className={styles.calendarCardsContainer}>
      {isMobile ? (
        <Carousel
          slides={slides}
          slidesPerView={1}
          freeMode
          scrollbar={{
            enabled: false,
          }}
          width={265}
          slidesOffsetBefore={1}
          slidesOffsetAfter={-100}
        />
      ) : (
        cards.map((card) => (
          <Link key={card.season} href={`#${card.linkTo}`}>
            <div
              className={styles.calendarCard}
              onMouseEnter={() => setHoveredCard(card.season)}
            >
              <Image
                width={248}
                height={400}
                src={
                  isHovered(card.season) ? card.hoverImage : card.defaultImage
                }
                alt={card.season}
              />
              <Button disabled={!isHovered(card.season)} isSecondaryButton>
                {calendarHomeT("BUTTON")}
              </Button>
            </div>
          </Link>
        ))
      )}
    </div>
  );
};

export default CalendarCards;
