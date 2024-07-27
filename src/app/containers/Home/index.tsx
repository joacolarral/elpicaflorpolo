import React from "react";

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
    </div>
  );
};

export default Home;
