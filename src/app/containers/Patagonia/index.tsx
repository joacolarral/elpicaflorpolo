"use client";

import { useTranslations } from "next-intl";
import React from "react";

import VideoComponent from "@/app/components/VideoComponent";
import { NAVBAR_ITEMS } from "@/app/constants";
import VIDEO_PATAGONIA from "@/app/images/videos/WEB_patagonia.mov";

import CarouselPatagonia from "./CarouselPatagonia";
import MapPatagonia from "./MapPatagonia";
import TournamentPatagonia from "./TournamentsPatagonia";

const Patagonia: React.FC = () => {
  const t = useTranslations("PATAGONIA.VIDEO");
  return (
    <div id={NAVBAR_ITEMS.PATAGONIA}>
      <VideoComponent
        shortTitle={t("SHORT_TITLE")}
        bigTitle={t("BIG_TITLE")}
        videoSrc={VIDEO_PATAGONIA}
      />
      <MapPatagonia />
      <TournamentPatagonia />
      <CarouselPatagonia />
    </div>
  );
};

export default Patagonia;
