"use client";

import { useTranslations } from "next-intl";
import React from "react";

import TournamentView from "@/app/components/TournamentView";
import TOURNAMENT_PATAGONIA from "@/app/images/patagonia/Img_Torneos_Patagonia.png";

const TournamentPatagonia: React.FC = () => {
  const t = useTranslations("PATAGONIA.TOURNAMENT_SECTION");

  return (
    <TournamentView
      title={t("TITLE")}
      subtitle={t("SUBTITLE")}
      buttonLabel={t("BUTTON_LABEL")}
      inputPlaceHolder={t("INPUT_PLACEHOLDER")}
      imgTournamentSrc={TOURNAMENT_PATAGONIA}
      mailFrom="Torneos Patagonia"
    />
  );
};

export default TournamentPatagonia;
