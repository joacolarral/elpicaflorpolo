import React from "react";

import BannerHome from "./BannerHome";
import CalendarHome from "./CalendarHome";

const Home: React.FC = () => {
  return (
    <div id="#home">
      <BannerHome />
      <CalendarHome />
    </div>
  );
};

export default Home;
