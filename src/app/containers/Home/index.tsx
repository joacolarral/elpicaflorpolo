import React from "react";

import BannerHome from "./BannerHome";
import CalendarHome from "./CalendarHome";
import CarouselHome from "./CarouselHome";

const Home: React.FC = () => {
  return (
    <div id="#home">
      <BannerHome />
      <CalendarHome />
      <CarouselHome />
    </div>
  );
};

export default Home;
