import Image from "next/image";
import React from "react";

import Banner from "@/app/images/picaflor/Banner_picaflor.png";

import CarouselPicaflor from "./CarouselPicaflor";
import MapPicaflor from "./MapPicaflor";
import TournamentPicaflor from "./TournamentsPicaflor";

const Picaflor: React.FC = () => {
  return (
    <div id="#picaflor">
      <Image width="1440" src={Banner} alt="Picaflor" />
      <MapPicaflor />
      <TournamentPicaflor />
      <CarouselPicaflor />
    </div>
  );
};

export default Picaflor;
