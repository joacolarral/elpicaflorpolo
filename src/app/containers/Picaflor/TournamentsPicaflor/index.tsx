"use client";

import { useTranslations } from "next-intl";
import React from "react";

import TournamentView from "@/app/components/TournamentView";
import TOURNAMENT_PICAFLOR from "@/app/images/picaflor/Img_Torneos_El_Picaflor.png";

const TournamentPicaflor: React.FC = () => {
  const t = useTranslations("PICAFLOR.TOURNAMENT_SECTION");

  return (
    <TournamentView
      title={t("TITLE")}
      subtitle={t("SUBTITLE")}
      buttonLabel={t("BUTTON_LABEL")}
      inputPlaceHolder={t("INPUT_PLACEHOLDER")}
      imgTournamentSrc={TOURNAMENT_PICAFLOR}
      mailFrom="Torneos Picaflor"
    />
  );
};

export default TournamentPicaflor;
