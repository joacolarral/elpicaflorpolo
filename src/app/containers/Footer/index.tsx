import Image from "next/image";
import Link from "next/link";

import Container from "@/app/components/Container";
import { LOGOS } from "@/app/constants";
import WHASTAPP_LOGO from "@/app/images/logos-sponsor/whatsapp.svg";
import ANCHOR_MAP_LOGO from "@/app/images/logos-sponsor/zocalo_locacion.svg";
import EMAIL_LOGO from "@/app/images/logos-sponsor/zocalo_mail.svg";

import styles from "./footer.module.scss";

type Logo = {
  src: string;
  link: string;
  alt: string;
};

const BrandSection = ({
  logos,
  email,
  mapLink,
  mapText,
}: {
  logos: Logo[];
  email: string;
  mapLink: string;
  mapText: string;
}) => (
  <div className={styles.socialMediaContainer}>
    <div className={styles.socialMediaWithoutText}>
      {logos.map((logo) => (
        <Link key={logo.alt} target="_blank" href={logo.link}>
          <Image src={logo.src} alt={logo.alt} />
        </Link>
      ))}
    </div>
    <Link className={styles.linksText} href={`mailto:${email}`}>
      <Image src={EMAIL_LOGO} alt="Email" />
      <p>{email}</p>
    </Link>
    <Link className={styles.linksText} href={mapLink}>
      <Image src={ANCHOR_MAP_LOGO} alt="Anchor map" />
      <p>{mapText}</p>
    </Link>
  </div>
);

const Footer = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.sectionBrandsContainer}>
        <div className={styles.sectionBrandSectionContainer}>
          <Image src={LOGOS.PICAFLOR_LOGO} alt="Picaflor logo" />
          <BrandSection
            logos={LOGOS.PICAFLOR}
            email="picaflorpolo@gmail.com"
            mapLink="https://maps.app.goo.gl/EgtodBtFrFGQfgHGA"
            mapText="El Picaflor polo, Capilla del Señor, Provincia de Buenos Aires"
          />
        </div>
        <div>
          <div className={styles.horizontalLine} />
        </div>
        <div className={styles.sectionBrandSectionContainer}>
          <Image src={LOGOS.PATAGONIA_LOGO} alt="Patagonia logo" />
          <BrandSection
            logos={LOGOS.PATAGONIA}
            email="patagoniapoloweek@gmail.com"
            mapLink="https://maps.app.goo.gl/KenpUFgPJFhNzQHH9"
            mapText="Arelauquen Golf & Country Club, Ruta 82 Lago Gutiérrez, R8400 San Carlos de Bariloche, Patagonia Argentina"
          />
        </div>
      </div>
      <div className={styles.whatsapp}>
        <Link
          href="https://api.whatsapp.com/send/?phone=5491156328090&text&app_absent=0"
          target="_blank"
        >
          <Image src={WHASTAPP_LOGO} alt="Whatsapp" />
          <p>+5491156328090</p>
        </Link>
      </div>
    </Container>
  );
};

export default Footer;
