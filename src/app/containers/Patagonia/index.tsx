import Image from "next/image";
import React from "react";

import Banner from "@/app/images/patagonia/BANNER_patagonia.png";

import CarouselPatagonia from "./CarouselPatagonia";
import MapPatagonia from "./MapPatagonia";
import TournamentPatagonia from "./TournamentsPatagonia";

const Patagonia: React.FC = () => {
  return (
    <div id="#patagonia">
      <Image width="1440" src={Banner} alt="Patagonia" />
      <MapPatagonia />
      <TournamentPatagonia />
      <CarouselPatagonia />
    </div>
  );
};

export default Patagonia;
