"use client";

import { useTranslations } from "next-intl";
import React from "react";

import VideoComponent from "@/app/components/VideoComponent";
import { NAVBAR_ITEMS } from "@/app/constants";
import useIsMobile from "@/app/hooks/useIsMobile";
import MOBILE_VIDEO_PICAFLOR from "@/app/images/videos/celular_picaflor.mov";
import VIDEO_PICAFLOR from "@/app/images/videos/WEB_picaflor.mov";

import CarouselPicaflor from "./CarouselPicaflor";
import MapPicaflor from "./MapPicaflor";
import TournamentPicaflor from "./TournamentsPicaflor";

const Picaflor: React.FC = () => {
  const isMobile = useIsMobile();

  const t = useTranslations("PICAFLOR.VIDEO");

  return (
    <div id={NAVBAR_ITEMS.PICAFLOR}>
      <VideoComponent
        shortTitle={t("SHORT_TITLE")}
        bigTitle={t("BIG_TITLE")}
        videoSrc={isMobile ? MOBILE_VIDEO_PICAFLOR : VIDEO_PICAFLOR}
      />
      <MapPicaflor />
      <TournamentPicaflor />
      <CarouselPicaflor />
    </div>
  );
};

export default Picaflor;
