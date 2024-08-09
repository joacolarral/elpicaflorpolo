"use client";

import { useTranslations } from "next-intl";
import React from "react";

import VideoComponent from "@/app/components/VideoComponent";
import { NAVBAR_ITEMS } from "@/app/constants";
// import VIDEO_PATAGONIA from "@/app/images/videos/WEB_patagonia.mov";

import CarouselBreedingTamingTraining from "./Carousel_Breeding";

const BreedingTamingTraining: React.FC = () => {
  const t = useTranslations("BREEDING_TAMING_TRAINING.VIDEO");
  return (
    <div id={NAVBAR_ITEMS.BREEDING}>
      <VideoComponent
        shortTitle={t("SHORT_TITLE")}
        bigTitle={t("BIG_TITLE")}
        // videoSrc={VIDEO_PATAGONIA}
        template
      />
      <CarouselBreedingTamingTraining />
    </div>
  );
};

export default BreedingTamingTraining;
