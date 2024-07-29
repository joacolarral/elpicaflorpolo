import { useTranslations } from "next-intl";
import React from "react";

import Container from "@/app/components/Container";
import MapView from "@/app/components/MapView";
import HOUSE_MAP from "@/app/images/patagonia/Img_Donde_estamos_Alojamiento_Patagonia.png";
import MAP_IMG from "@/app/images/patagonia/mapaPatagonia_curvas_mapa_Patagonia.svg";

const MapPatagonia: React.FC = () => {
  const t = useTranslations("PATAGONIA.MAP_SECTION");

  return (
    <Container>
      <MapView
        imgMap={MAP_IMG}
        title={t("TITLE")}
        subtitle={t("SUBTITLE")}
        redirectUrl="https://maps.app.goo.gl/Wsznwspe7APe1aAn8"
        buttonLabel={t("BUTTON_LINK")}
        imagePlace={HOUSE_MAP}
      />
    </Container>
  );
};

export default MapPatagonia;
