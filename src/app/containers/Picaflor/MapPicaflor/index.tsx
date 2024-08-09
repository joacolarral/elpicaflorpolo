import { useTranslations } from "next-intl";
import React from "react";

import Container from "@/app/components/Container";
import MapView from "@/app/components/MapView";
import HOUSE_MAP from "@/app/images/picaflor/Img_Donde_estamos_Alojamiento_ElPicaflor.png";
import MAP_IMG from "@/app/images/picaflor/Picaflor_mapa.svg";

const MapPicaflor: React.FC = () => {
  const t = useTranslations("PICAFLOR.MAP_SECTION");

  return (
    <Container>
      <MapView
        imgMap={MAP_IMG}
        title={t("TITLE")}
        subtitle={t("SUBTITLE")}
        redirectUrl="https://maps.app.goo.gl/EfGpELvQvZhMv3s27"
        buttonLabel={t("BUTTON_LINK")}
        imagePlace={HOUSE_MAP}
      />
    </Container>
  );
};

export default MapPicaflor;
