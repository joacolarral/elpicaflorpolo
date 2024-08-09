import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { Dispatch, SetStateAction } from "react";

import Button from "@/app/components/Button";
import { NAVBAR_ITEMS, SEASON } from "@/app/constants";
import styles from "@/app/containers/Home/home.module.scss";
import Autumn from "@/app/images/home/Temporada_otoño.png";
import AutumnHover from "@/app/images/home/Temporada_otoño_hover.png";
import Spring from "@/app/images/home/Temporada_primavera.png";
import SpringHover from "@/app/images/home/Temporada_primavera_hover.png";
import Summer from "@/app/images/home/Temporada_verano.png";
import SummerHover from "@/app/images/home/Temporada_verano_hover.png";
import { SeasonType } from "@/app/types";

interface CalendarCardsProps {
  setHoveredCard: Dispatch<SetStateAction<SeasonType>>;
  hoveredCard: string;
}

const CalendarCards: React.FC<CalendarCardsProps> = ({
  setHoveredCard,
  hoveredCard,
}) => {
  const calendarHomeT = useTranslations("HOME.CALENDAR_SECTION");
  const cards = [
    {
      season: SEASON.AUTUMN,
      defaultImage: Autumn,
      hoverImage: AutumnHover,
      linkTo: NAVBAR_ITEMS.PICAFLOR,
    },
    {
      season: SEASON.SPRING,
      defaultImage: Spring,
      hoverImage: SpringHover,
      linkTo: NAVBAR_ITEMS.PICAFLOR,
    },
    {
      season: SEASON.SUMMER,
      defaultImage: Summer,
      hoverImage: SummerHover,
      linkTo: NAVBAR_ITEMS.PATAGONIA,
    },
  ];

  const isHovered = (seasonCard: SeasonType) => seasonCard === hoveredCard;

  return (
    <div className={styles.calendarCardsContainer}>
      {cards.map((card) => (
        <Link key={card.season} href={`#${card.linkTo}`}>
          <div
            className={styles.calendarCard}
            onMouseEnter={() => setHoveredCard(card.season)}
          >
            <Image
              width={248}
              height={400}
              src={isHovered(card.season) ? card.hoverImage : card.defaultImage}
              alt={card.season}
            />
            <Button disabled={!isHovered(card.season)} isSecondaryButton>
              {calendarHomeT("BUTTON")}
            </Button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CalendarCards;
