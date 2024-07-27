import Image from "next/image";
import React from "react";

import Banner from "@/app/images/home/Banner_Home.png";

import BannerHome from "./BannerHome";
import CalendarHome from "./CalendarHome";
import CarouselHome from "./CarouselHome";
import ExperiencesCardHome from "./ExperiencesCardHome";
const Home: React.FC = () => {
  return (
    <div id="#home">
      <BannerHome />
      <CalendarHome />
      <CarouselHome />
      <ExperiencesCardHome />
      <Image width="1440" src={Banner} alt="Banner Home" />
    </div>
  );
};

export default Home;
