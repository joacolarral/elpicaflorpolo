import { useTranslations } from "next-intl";
import React from "react";

import VideoComponent from "@/app/components/VideoComponent";
import useIsMobile from "@/app/hooks/useIsMobile";
import MOBILE_VIDEO_HOME from "@/app/images/videos/celular_home.mov";
import VIDEO_HOME from "@/app/images/videos/WEB_home.mov";

const BannerHome: React.FC = () => {
  const isMobile = useIsMobile();
  const t = useTranslations("HOME.VIDEO");
  return (
    <VideoComponent
      shortTitle={t("SHORT_TITLE")}
      bigTitle={t("BIG_TITLE")}
      videoSrc={isMobile ? MOBILE_VIDEO_HOME : VIDEO_HOME}
    />
  );
};

export default BannerHome;
