import { useTranslations } from "next-intl";
import React from "react";

import Card from "@/app/components/Card";
import Container from "@/app/components/Container";
import styles from "@/app/containers/Home/home.module.scss";
import Card_1 from "@/app/images/home/cards/Home_tarjeta_DiaPolo.png";
import Card_3 from "@/app/images/home/cards/Home_tarjeta_EventoCorporativo.png";
import Card_2 from "@/app/images/home/cards/Home_tarjeta_SemanaPolo.png";

const ExperiencesCardHome: React.FC = () => {
  const experiencesCardHomeT = useTranslations("HOME.EXPERIENCES_CARD_HOME");
  const cardsExperience = [Card_1, Card_2, Card_3];

  return (
    <Container className={styles.experiencesCardHomeContainer}>
      <h2>{experiencesCardHomeT("TITLE")}</h2>
      <div className={styles.cardsContainer}>
        {cardsExperience.map((cardImage, index) => (
          <Card
            key={index}
            srcImage={cardImage.src}
            alt={`experiences-${index}`}
            title={experiencesCardHomeT(`CARD_${index + 1}.TITLE`)}
            description={experiencesCardHomeT(`CARD_${index + 1}.DESCRIPTION`)}
          />
        ))}
      </div>
    </Container>
  );
};

export default ExperiencesCardHome;
