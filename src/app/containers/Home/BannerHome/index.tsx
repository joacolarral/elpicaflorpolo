import { useTranslations } from "next-intl";
import React from "react";

import VideoComponent from "@/app/components/VideoComponent";
import VIDEO_HOME from "@/app/images/videos/WEB_home.mov";

const BannerHome: React.FC = () => {
  const t = useTranslations("HOME.VIDEO");
  return (
    <VideoComponent
      shortTitle={t("SHORT_TITLE")}
      bigTitle={t("BIG_TITLE")}
      videoSrc={VIDEO_HOME}
    />
  );
};

export default BannerHome;
