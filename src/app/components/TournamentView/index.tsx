"use client";

import classNames from "classnames";
import React, { useState } from "react";

import Button from "@/app/components/Button";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import { validateEmail } from "@/app/utils";

import styles from "./TournamentView.module.scss";

interface TournamentViewProps {
  title: string;
  subtitle: string;
  inputPlaceHolder: string;
  buttonLabel: string;
  mailFrom: string;
}

const TournamentView: React.FC<TournamentViewProps> = ({
  title,
  subtitle,
  inputPlaceHolder,
  buttonLabel,
  mailFrom,
}) => {
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
        mailFrom: `${mailFrom} <torneos@elpicaflorpolo.com>`,
        subject: `Inscripción Torneo`,
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

  const stylesInput = classNames(styles.input, error && styles.inputError);

  return (
    <div className={styles.containerContent}>
      <div>
        <TitleAndSubtitle title={title} subtitle={subtitle} colorAlternative />
        <div className={styles.inputContainer}>
          <input
            type="text"
            name="email"
            placeholder={inputPlaceHolder}
            className={stylesInput}
            value={email}
            onChange={handleInputChange}
          />
          <p
            style={{ visibility: error ? "visible" : "hidden" }}
            className={styles.error}
          >
            {error}
          </p>
        </div>
      </div>
      <Button onClick={handleClick}>{buttonLabel}</Button>
    </div>
  );
};

export default TournamentView;
