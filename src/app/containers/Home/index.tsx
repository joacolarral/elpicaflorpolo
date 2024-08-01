import React from "react";

import { NAVBAR_ITEMS } from "@/app/constants";

import BannerHome from "./BannerHome";
import CalendarHome from "./CalendarHome";
import CarouselHome from "./CarouselHome";
import ExperiencesCardHome from "./ExperiencesCardHome";

const Home: React.FC = () => {
  return (
    <div id={NAVBAR_ITEMS.HOME}>
      <BannerHome />
      <CalendarHome />
      <CarouselHome />
      <ExperiencesCardHome />
    </div>
  );
};

export default Home;
