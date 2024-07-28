"use client";

import classNames from "classnames";
import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";

import styles from "./TournamentView.module.scss";

interface TournamentViewProps {
  title: string;
  subtitle: string;
  inputPlaceHolder: string;
  buttonLabel: string;
  imgTournamentSrc: StaticImageData;
  handleSubmit: () => void;
}

const TournamentView: React.FC<TournamentViewProps> = ({
  title,
  subtitle,
  inputPlaceHolder,
  buttonLabel,
  imgTournamentSrc,
  handleSubmit,
}) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email: string) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) {
      setError("Invalid email");
    } else {
      setEmail("");
      setError("");
      handleSubmit();
    }
  };

  const stylesInput = classNames(styles.input, error && styles.inputError);

  return (
    <div className={styles.containerTournament}>
      <Container className={styles.containerContent}>
        <div>
          <TitleAndSubtitle
            title={title}
            subtitle={subtitle}
            colorAlternative
          />
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
      </Container>
      <Image
        src={imgTournamentSrc}
        width={1440}
        alt="Tournament"
        layout="responsive"
      />
    </div>
  );
};

export default TournamentView;
