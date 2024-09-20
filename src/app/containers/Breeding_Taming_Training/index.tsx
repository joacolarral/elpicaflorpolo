"use client";

import { useTranslations } from "next-intl";
import React from "react";

import VideoComponent from "@/app/components/VideoComponent";
import { NAVBAR_ITEMS } from "@/app/constants";
import useIsMobile from "@/app/hooks/useIsMobile";
import MOBILE_VIDEO_CRIA from "@/app/images/videos/celular_cria.mov";
import VIDEO_CRIA from "@/app/images/videos/WEB_cria.mov";

import CarouselBreedingTamingTraining from "./Carousel_Breeding";

const BreedingTamingTraining: React.FC = () => {
  const isMobile = useIsMobile();
  const t = useTranslations("BREEDING_TAMING_TRAINING.VIDEO");
  return (
    <div id={NAVBAR_ITEMS.BREEDING}>
      <VideoComponent
        shortTitle={t("SHORT_TITLE")}
        bigTitle={t("BIG_TITLE")}
        videoSrc={isMobile ? MOBILE_VIDEO_CRIA : VIDEO_CRIA}
      />
      <CarouselBreedingTamingTraining />
    </div>
  );
};

export default BreedingTamingTraining;
