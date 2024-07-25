import cs from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React from "react";

import Container from "@/app/components/Container";
import PicaflorLogo from "@/app/images/logos/el_picaflor.svg";
import PatagoniaPoloLogo from "@/app/images/logos/patagonia_polo.svg";

import { LANGUAGES, NAVBAR_ITEMS } from "../../constants";

import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const navbarT = useTranslations("NAVBAR");
  const navbarStyles = cs(styles.container, styles.fixedNavbar);

  return (
    <Container className={navbarStyles}>
      <div className={styles.languagesContainer}>
        {Object.entries(LANGUAGES).map(([key, lang]) => (
          <Link className={styles.language} href={`/${lang}`} key={key}>
            {lang.toLocaleUpperCase()}
          </Link>
        ))}
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.logosContainer}>
          <Image width={100} src={PicaflorLogo} alt="PicaflorLogo" />
          <Image width={128} src={PatagoniaPoloLogo} alt="PatagoniaPoloLogo" />
        </div>
        <div className={styles.navbarItemsContainer}>
          {Object.entries(NAVBAR_ITEMS).map(([key, text], index, array) => (
            <Link
              className={styles.navItem}
              href={`#${key.toLocaleLowerCase()}`}
              key={key}
              data-last={index === array.length - 1}
            >
              {navbarT(text).toLocaleUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
