import React from "react";
import Container from "../../components/Container";
import PicaflorLogo from "../../images/logos/el_picaflor.svg";
import PatagoniaPoloLogo from "../../images/logos/patagonia_polo.svg";
import Image from "next/image";
import Link from "next/link";
import { LANGUAGE } from "@/app/utils/constants/text";
import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  return (
    <Container className={styles.container}>
      <div className={styles.languagesContainer}>
        {Object.entries(LANGUAGE).map(([key, lang]) => (
          <Link className={styles.language} href={`/${lang}`} key={key}>
            {lang.toLocaleUpperCase()}
          </Link>
        ))}
      </div>
      <div>
        <Image width={85} src={PicaflorLogo} alt="PicaflorLogo" />
        <Image width={108} src={PatagoniaPoloLogo} alt="PatagoniaPoloLogo" />
      </div>
      <div></div>
    </Container>
  );
};

export default Navbar;
