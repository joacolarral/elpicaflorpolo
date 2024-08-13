"use client";

import { useTranslations } from "next-intl";
import React from "react";

import Card from "@/app/components/Card";
import Carousel from "@/app/components/Carousel";
import Container from "@/app/components/Container";
import styles from "@/app/containers/Home/home.module.scss";
import useIsMobile from "@/app/hooks/useIsMobile";
import Card_1 from "@/app/images/home/cards/Home_tarjeta_DiaPolo.png";
import Card_3 from "@/app/images/home/cards/Home_tarjeta_EventoCorporativo.png";
import Card_2 from "@/app/images/home/cards/Home_tarjeta_SemanaPolo.png";

const ExperiencesCardHome: React.FC = () => {
  const isMobile = useIsMobile();
  const experiencesCardHomeT = useTranslations("HOME.EXPERIENCES_CARD_HOME");
  const cardsExperience = [Card_1, Card_2, Card_3];

  interface Slide {
    id: number;
    value: React.ReactNode;
  }

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
            width={385}
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
