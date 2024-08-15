"use client";

import { useTranslations } from "next-intl";
import React from "react";

import Card from "@/app/components/Card";
import Carousel from "@/app/components/Carousel";
import Container from "@/app/components/Container";
import styles from "@/app/containers/Home/home.module.scss";
import useDevices from "@/app/hooks/useDevices";
import useIsMobile from "@/app/hooks/useIsMobile";
import Card_1 from "@/app/images/home/cards/Home_tarjeta_DiaPolo.png";
import Card_3 from "@/app/images/home/cards/Home_tarjeta_EventoCorporativo.png";
import Card_2 from "@/app/images/home/cards/Home_tarjeta_SemanaPolo.png";
import CardMobile_1 from "@/app/images/home/cards/TarjetaMobile_DiaPolo.png";
import CardMobile_3 from "@/app/images/home/cards/TarjetaMobile_EventoCorporativo.png";
import CardMobile_2 from "@/app/images/home/cards/TarjetaMobile_SemanaPolo.png";

interface Slide {
  id: number;
  value: React.ReactNode;
}

const ExperiencesCardHome: React.FC = () => {
  const isMobile = useIsMobile();
  const { isSmallMobile } = useDevices();
  const experiencesCardHomeT = useTranslations("HOME.EXPERIENCES_CARD_HOME");
  const cardsExperience = isMobile
    ? [CardMobile_1, CardMobile_2, CardMobile_3]
    : [Card_1, Card_2, Card_3];

  const slides: Slide[] = cardsExperience.map((cardImage, index) => ({
    id: index + 1,
    value: (
      <div className={styles.cardContainer} key={index}>
        <Card
          srcImage={cardImage.src}
          alt={`experiences-${index}`}
          title={experiencesCardHomeT(`CARD_${index + 1}.TITLE`)}
          description={experiencesCardHomeT(`CARD_${index + 1}.DESCRIPTION`)}
        />
      </div>
    ),
  }));

  return (
    <Container
      className={styles.experiencesCardHomeContainer}
      alternativeBg
      noPaddingRight={isMobile}
    >
      <h2>{experiencesCardHomeT("TITLE")}</h2>
      <div className={styles.cardsContainer}>
        {isMobile ? (
          <Carousel
            slides={slides}
            slidesPerView={1}
            freeMode
            scrollbar={{
              enabled: false,
            }}
            width={isSmallMobile ? 285 : 360}
            slidesOffsetBefore={12}
          />
        ) : (
          cardsExperience.map((cardImage, index) => (
            <Card
              key={index}
              srcImage={cardImage.src}
              alt={`experiences-${index}`}
              title={experiencesCardHomeT(`CARD_${index + 1}.TITLE`)}
              description={experiencesCardHomeT(
                `CARD_${index + 1}.DESCRIPTION`
              )}
            />
          ))
        )}
      </div>
    </Container>
  );
};

export default ExperiencesCardHome;
