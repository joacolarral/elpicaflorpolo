import classNames from "classnames";
import Link from "next/link";
import React from "react";

import Button from "@/app/components/Button";
import styles from "@/app/containers/Home/home.module.scss";

type Card = {
  id: string;
  linkTo: string;
  hoverImage: {
    src: string;
  };
  season: string;
  logo: React.FC;
  timeline: React.FC;
  text: string;
};

type Props = {
  card: Card;
  setHoveredCard: React.Dispatch<React.SetStateAction<string>>;
  isHovered: boolean;
  t: any;
};

const CalendarSingleCard: React.FC<Props> = ({
  card,
  setHoveredCard,
  isHovered,
  t,
}) => {
  const stylesCard = classNames(
    styles.calendarCard,
    isHovered && styles.cardHovered
  );
  return (
    <Link key={card.id} href={`#${card.linkTo}`}>
      <div
        className={stylesCard}
        onMouseEnter={() => setHoveredCard(card.id)}
        style={{
          backgroundImage: isHovered ? `url(${card.hoverImage.src})` : "none",
        }}
      >
        <h3>{card.season}</h3>
        <div className={styles.logoContainer}>
          <card.logo />
        </div>
        {/* <div className={styles.timeline}>
          <card.timeline />
        </div> */}
        <p>{card.text}</p>

        <Button disabled={!isHovered} isSecondaryButton>
          {t("BUTTON")}
        </Button>
      </div>
    </Link>
  );
};

export default CalendarSingleCard;
