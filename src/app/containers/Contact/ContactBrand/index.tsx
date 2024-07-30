import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import ARELAUQUEN_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Arelauquen.svg";
import CAVALIER_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Cavalier.svg";
import MANIFESTO_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Manifiesto.svg";
import PRENSAPOLO_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_PrensaPolo.svg";
import SIXT_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Sixt.svg";

import styles from "../contact.module.scss";

const Logos = [
  { src: ARELAUQUEN_LOGO, alt: "Arelauquen Golf & Country Club" },
  { src: CAVALIER_LOGO, alt: "Cavalier Polo" },
  { src: MANIFESTO_LOGO, alt: "Manifiesto" },
  { src: PRENSAPOLO_LOGO, alt: "Prensa Polo" },
  { src: SIXT_LOGO, alt: "Sixt Rent a Car" },
];

const ContactBrand = () => {
  const t = useTranslations("CONTACT_BRAND");
  return (
    <Container className={styles.contactBrandContainer}>
      <div className={styles.contactBrandContainerBrands}>
        {Logos.map((logo, i) => (
          <div key={i}>
            <Image key={i} src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <div className={styles.contactBrandContentContainer}>
        <h5>{t("INPUT_LABEL")}:</h5>
        <input placeholder={t("INPUT_MAIL")} />
        <Button>{t("BUTTON_LABEL")}</Button>
      </div>
    </Container>
  );
};

export default ContactBrand;
