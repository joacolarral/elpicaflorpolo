import Image from "next/image";
import React from "react";

import Banner from "@/app/images/breeding_taming_training/Banner_breeding.png";

import CarouselBreedingTamingTraining from "./Carousel_Breeding";

const BreedingTamingTraining: React.FC = () => {
  return (
    <div id="#breeding_taming_training">
      <Image width="1440" src={Banner} alt="Breeding Taming Trainig" />
      <CarouselBreedingTamingTraining />
    </div>
  );
};

export default BreedingTamingTraining;
