"use client";

import cs from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useMemo } from "react";

import Container from "@/app/components/Container";
import PicaflorLogo from "@/app/images/logos/el_picaflor.svg";
import PatagoniaPoloLogo from "@/app/images/logos/patagonia_polo.svg";

import { LANGUAGES, NAVBAR_ITEMS } from "../../constants";

import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const t = useTranslations("NAVBAR");
  const navbarStyles = cs(styles.container, styles.fixedNavbar);
  const pathname = usePathname();

  const currentLang = useMemo(() => {
    if (pathname.includes("/es")) return "es";
    if (pathname.includes("/en")) return "en";
    return "";
  }, [pathname]);

  return (
    <Container className={navbarStyles}>
      <div className={styles.languagesContainer}>
        {Object.entries(LANGUAGES).map(([key, lang]) => (
          <Link
            className={styles.language}
            href={`/${lang}`}
            key={key}
            style={{
              fontWeight: currentLang === lang ? 700 : 500,
            }}
          >
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
              href={`#${text.toLocaleLowerCase()}`}
              key={key}
              data-last={index === array.length - 1}
            >
              {t(key).toLocaleUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Navbar;
