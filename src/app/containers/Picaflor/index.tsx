import Image from "next/image";
import React from "react";

import Banner from "@/app/images/picaflor/Banner_picaflor.png";

import MapPicaflor from "./MapPicaflor";

const Picaflor: React.FC = () => {
  return (
    <div id="#picaflor">
      <Image width="1440" src={Banner} alt="Picaflor" />
      <MapPicaflor />
    </div>
  );
};

export default Picaflor;
