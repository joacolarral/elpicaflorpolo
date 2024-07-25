import Image from "next/image";
import React from "react";

import BannerHomePNG from "@/app/images/banner.png";

const BannerHome: React.FC = () => {
  return <Image width="1440" src={BannerHomePNG} alt="PicaflorLogo" />;
};

export default BannerHome;
