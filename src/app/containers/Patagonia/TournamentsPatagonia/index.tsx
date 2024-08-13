"use client";

import { useTranslations } from "next-intl";
import React from "react";

import Container from "@/app/components/Container";
import TournamentView from "@/app/components/TournamentView";

import styles from "../patagonia.module.scss";

const TournamentPatagonia: React.FC = () => {
  const t = useTranslations("PATAGONIA.TOURNAMENT_SECTION");

  return (
    <Container className={styles.containerTournament}>
      <TournamentView
        title={t("TITLE")}
        subtitle={t("SUBTITLE")}
        buttonLabel={t("BUTTON_LABEL")}
        inputPlaceHolder={t("INPUT_PLACEHOLDER")}
        mailFrom="Torneos Patagonia"
      />
    </Container>
  );
};

export default TournamentPatagonia;
