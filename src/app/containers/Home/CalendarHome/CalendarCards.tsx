import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction, useMemo } from "react";

import Carousel from "@/app/components/Carousel";
import PatagoniaLogo from "@/app/components/Icons/PatagoniaLogo";
import PicaflorLogo from "@/app/components/Icons/PicaflorLogo";
import {
  TimeLineENAutumn,
  TimeLineENSpring,
  TimeLineENSummer,
} from "@/app/components/Icons/TimeLineEN";
import {
  TimeLineESAutumn,
  TimeLineESSpring,
  TimeLineESSummer,
} from "@/app/components/Icons/TimeLineES";
import { NAVBAR_ITEMS, SEASON } from "@/app/constants";
import styles from "@/app/containers/Home/home.module.scss";
import useIsMobile from "@/app/hooks/useIsMobile";
import AutumnHover from "@/app/images/home/season_autumn_hover.png";
import SpringHover from "@/app/images/home/season_spring_hover.png";
import SummerHover from "@/app/images/home/season_summer_hover.png";
import { SeasonType } from "@/app/types";

import CalendarSingleCard from "./CalendarCard";

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
  const t = useTranslations("HOME.CALENDAR_SECTION");

  const currentLang = useMemo(() => {
    if (pathname.includes("/es")) return "es";
    if (pathname.includes("/en")) return "en";
    return "";
  }, [pathname]);

  const cards = [
    {
      id: SEASON.AUTUMN,
      season: t("AUTUMN.TITLE"),
      logo: PicaflorLogo,
      text: t("AUTUMN.TEXT"),
      timeline: currentLang === "en" ? TimeLineENAutumn : TimeLineESAutumn,
      hoverImage: AutumnHover,
      linkTo: NAVBAR_ITEMS.PICAFLOR,
    },
    {
      id: SEASON.SPRING,
      season: t("SPRING.TITLE"),
      logo: PicaflorLogo,
      text: t("SPRING.TEXT"),
      timeline: currentLang === "en" ? TimeLineENSpring : TimeLineESSpring,
      hoverImage: SpringHover,
      linkTo: NAVBAR_ITEMS.PICAFLOR,
    },
    {
      id: SEASON.SUMMER,
      season: t("SUMMER.TITLE"),
      logo: PatagoniaLogo,
      text: t("SUMMER.TEXT"),
      timeline: currentLang === "en" ? TimeLineENSummer : TimeLineESSummer,
      hoverImage: SummerHover,
      linkTo: NAVBAR_ITEMS.PATAGONIA,
    },
  ];

  const isHovered = (seasonCard: SeasonType) => seasonCard === hoveredCard;

  const slides: Slide[] = cards.map((card, index) => ({
    id: index + 1,
    value: (
      <CalendarSingleCard
        key={card.id}
        card={card}
        setHoveredCard={setHoveredCard}
        isHovered
        t={t}
      />
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
            hide: true,
          }}
          width={253}
          slidesOffsetBefore={1}
          slidesOffsetAfter={-50}
        />
      ) : (
        cards.map((card) => {
          return (
            <CalendarSingleCard
              key={card.id}
              card={card}
              setHoveredCard={setHoveredCard}
              isHovered={isHovered(card.id)}
              t={t}
            />
          );
        })
      )}
    </div>
  );
};

export default CalendarCards;
