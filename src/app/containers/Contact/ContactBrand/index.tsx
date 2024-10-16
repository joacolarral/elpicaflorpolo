"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import { useNotification } from "@/app/components/Notifications";
import ADBLICK_LOGO from "@/app/images/logos-sponsor/Sponsor_ADBlick.svg";
import ARELAUQUEN_LOGO from "@/app/images/logos-sponsor/Sponsor_Arelauquen.svg";
import CAVALIER_LOGO from "@/app/images/logos-sponsor/Sponsor_Cavalier.svg";
import ER_LOGO from "@/app/images/logos-sponsor/Sponsor_ER.svg";
import ICONIC_LOGO from "@/app/images/logos-sponsor/Sponsor_Iconic.svg";
import LOGI_LOGO from "@/app/images/logos-sponsor/Sponsor_Logipolo.svg";
import MANIFESTO_LOGO from "@/app/images/logos-sponsor/Sponsor_Manifiesto.svg";
import POLOMADE_LOGO from "@/app/images/logos-sponsor/Sponsor_PoloMade.svg";
import PRENSAPOLO_LOGO from "@/app/images/logos-sponsor/Sponsor_Prensapolo.svg";
import SIXT_LOGO from "@/app/images/logos-sponsor/Sponsor_Sixt.svg";
import { validateEmail } from "@/app/utils";

import styles from "../contact.module.scss";

const Logos = [
  { src: ADBLICK_LOGO, alt: "AD BLICK" },
  { src: ARELAUQUEN_LOGO, alt: "Arelauquen Golf & Country Club" },
  { src: CAVALIER_LOGO, alt: "Cavalier Polo" },
  { src: ER_LOGO, alt: "Emotional Reminder" },
  { src: ICONIC_LOGO, alt: "Iconic" },
  { src: LOGI_LOGO, alt: "Logi" },
  { src: MANIFESTO_LOGO, alt: "Manifiesto" },
  { src: POLOMADE_LOGO, alt: "Polo Made" },
  { src: PRENSAPOLO_LOGO, alt: "Prensa Polo" },
  { src: SIXT_LOGO, alt: "Sixt Rent a Car" },
];

const ContactBrand = () => {
  const t = useTranslations("CONTACT_BRAND");
  const { showError, showSuccess } = useNotification();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const sendRegistrationEmail = async () =>
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        mailFrom: `Sponsor <sponsors@elpicaflorpolo.com>`,
        subject: "Nuevo Sponsor",
      }),
    });

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email");
    } else {
      try {
        setError("");
        const response = await sendRegistrationEmail();
        if (response.ok) {
          showSuccess();
          setEmail("");
        } else {
          showError();
        }
      } catch (error) {
        showError();
      }
    }
  };

  return (
    <Container className={styles.contactBrandContainer}>
      <div className={styles.contactBrandContainerBrands}>
        {Logos.map((logo, i) => (
          <div className={styles.brand} key={i}>
            <Image key={i} src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
      <div className={styles.contactBrandContentContainer}>
        <h5>{t("INPUT_LABEL")}:</h5>
        <input
          type="text"
          name="email"
          placeholder={t("INPUT_MAIL")}
          value={email}
          onChange={handleInputChange}
        />
        <Button onClick={handleClick}>{t("BUTTON_LABEL")}</Button>
        <p
          style={{ visibility: error ? "visible" : "hidden" }}
          className={styles.error}
        >
          {error}
        </p>
      </div>
    </Container>
  );
};

export default ContactBrand;
