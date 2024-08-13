/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
"use client";

import cs from "classnames";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import React, { useMemo, useState } from "react";

import Container from "@/app/components/Container";
import useIsMobile from "@/app/hooks/useIsMobile";
import PicaflorLogo from "@/app/images/logos/el_picaflor.svg";
import PatagoniaPoloLogo from "@/app/images/logos/patagonia_polo.svg";
import Menu from "@/app/images/Menu.svg";

import { LANGUAGES, NAVBAR_ITEMS } from "../../constants";

import styles from "./Navbar.module.scss";

const Navbar: React.FC = () => {
  const isMobile = useIsMobile();
  const [menuOpen, setMenuOpen] = useState(false);
  const t = useTranslations("NAVBAR");
  const pathname = usePathname();

  const handleOpenMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const currentLang = useMemo(() => {
    if (pathname.includes("/es")) return "es";
    if (pathname.includes("/en")) return "en";
    return "";
  }, [pathname]);

  const shouldDisplayMenu = !isMobile || (isMobile && menuOpen);

  const navbarStyles = cs(
    styles.container,
    styles.fixedNavbar,
    menuOpen && styles.openMenuMobile
  );

  return (
    <Container className={navbarStyles}>
      <div className={styles.contentContainer}>
        <div className={styles.logosContainer}>
          <div className={styles.containerBrands}>
            <Image
              width={isMobile ? 75 : 100}
              src={PicaflorLogo}
              alt="PicaflorLogo"
            />
            <Image
              width={isMobile ? 90 : 128}
              src={PatagoniaPoloLogo}
              alt="PatagoniaPoloLogo"
            />
          </div>
          <div
            role="button"
            onClick={handleOpenMenu}
            className={styles.menuIcon}
          >
            <Image width={22} src={Menu} alt="menu_burguer" />
          </div>
        </div>
        {shouldDisplayMenu && (
          <>
            <div className={styles.navbarItemsContainer}>
              {Object.entries(NAVBAR_ITEMS).map(([key, text], index, array) => (
                <Link
                  onClick={handleOpenMenu}
                  className={styles.navItem}
                  href={`#${text.toLocaleLowerCase()}`}
                  key={key}
                  data-last={index === array.length - 1}
                >
                  {t(key).toLocaleUpperCase()}
                </Link>
              ))}
            </div>
            <div className={styles.languagesContainer}>
              {Object.entries(LANGUAGES).map(([key, lang]) => (
                <Link
                  className={cs(
                    styles.language,
                    currentLang === lang && styles.languageSelected
                  )}
                  href={`/${lang}`}
                  key={key}
                >
                  {lang.toLocaleUpperCase()}
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Navbar;
