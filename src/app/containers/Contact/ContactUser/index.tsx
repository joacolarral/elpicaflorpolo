"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import React, { useState } from "react";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import { useNotification } from "@/app/components/Notifications";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import { BRAND_NAME, SOCIAL_MEDIA_BRANDS } from "@/app/constants";
import IMAGE_SRC from "@/app/images/contact/Seccion_Contacto_ImgCabalgata.png";
import PICAFLOR_LOGO from "@/app/images/logos-sponsor/contacto_Logo_ElPicaflor_positivo.svg";
import FACEBOOK from "@/app/images/logos-sponsor/contacto_Logo_Fb.svg";
import INSTAGRAM from "@/app/images/logos-sponsor/contacto_Logo_IG.svg";
import PATAGONIA_LOGO from "@/app/images/logos-sponsor/contacto_Logo_Patagonia_positivo.svg";
import { validateEmail } from "@/app/utils";

import styles from "../contact.module.scss";

const logos = {
  [BRAND_NAME.PICAFLOR]: PICAFLOR_LOGO,
  [BRAND_NAME.PATAGONIA]: PATAGONIA_LOGO,
};

const defaultValues = {
  email: "",
  fullName: "",
  message: "",
};

const ContactUser = () => {
  const t = useTranslations("CONTACT_USER");
  const { showError, showSuccess } = useNotification();
  const [formValues, setFormValues] = useState(defaultValues);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target as HTMLInputElement;

    if (name === "email" && error) {
      setError(false);
    }

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const sendForm = async () =>
    await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formValues,
        mailFrom: "Contactate Form <contacto@elpicaflorpolo.com>",
        subject: `Más informacion`,
      }),
    });

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateEmail(formValues.email)) {
      setError(true);
      showError();
    } else {
      try {
        setError(false);
        const response = await sendForm();
        if (response.ok) {
          setFormValues(defaultValues); // Reiniciar los valores del formulario
          showSuccess();
        } else {
          showError();
        }
      } catch (error) {
        showError();
      }
    }
  };

  return (
    <Container className={styles.contactUserContainer} noPaddingRight>
      <div className={styles.contactUserContent}>
        <TitleAndSubtitle title={t("TITLE")} subtitle={t("SUBTITLE")} />
        <form className={styles.formContainer}>
          <input
            value={formValues.fullName}
            onChange={handleChange}
            type="text"
            name="fullName"
            autoComplete="name"
            placeholder={t("INPUT_FULLNAME")}
          />
          <input
            value={formValues.email}
            onChange={handleChange}
            type="text"
            name="email"
            className={error ? styles.inputColorRed : ""}
            autoComplete="email"
            placeholder={t("INPUT_MAIL")}
          />
          <textarea
            value={formValues.message}
            onChange={handleChange}
            name="message"
            placeholder={t("INPUT_TEXTBOX")}
            rows={4}
          />
        </form>
        <Button onClick={handleSubmit} isSecondaryButton>
          {t("BUTTON_LABEL")}
        </Button>
        <div className={styles.contactUserLogosContainer}>
          {Object.entries(BRAND_NAME).map(([key]) => (
            <div key={key} className={styles.contactUser}>
              <div>
                <Image src={logos[key]} alt={`logo_${key}`} />
              </div>
              <div className={styles.horizontalLine} />
              <div className={styles.contactUserSocialMedia}>
                <Link href={SOCIAL_MEDIA_BRANDS[key][1].link} target="_blank">
                  <Image src={FACEBOOK} alt={SOCIAL_MEDIA_BRANDS[key][1].alt} />
                </Link>
                <Link href={SOCIAL_MEDIA_BRANDS[key][0].link} target="_blank">
                  <Image
                    src={INSTAGRAM}
                    alt={SOCIAL_MEDIA_BRANDS[key][0].alt}
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image
        className={styles.imagePlace}
        layout="responsive"
        src={IMAGE_SRC}
        alt="contact_form"
      />
    </Container>
  );
};

export default ContactUser;
