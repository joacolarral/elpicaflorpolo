"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import ARELAUQUEN_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Arelauquen.svg";
import CAVALIER_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Cavalier.svg";
import MANIFESTO_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Manifiesto.svg";
import PRENSAPOLO_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_PrensaPolo.svg";
import SIXT_LOGO from "@/app/images/logos-sponsor/Sponsor_Logo_Sixt.svg";
import { validateEmail } from "@/app/utils";

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

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email");
    } else {
      setEmail("");
      setError("");
      sendRegistrationEmail();
    }
  };

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
