import classNames from "classnames";
import Link from "next/link";
import React, { ButtonHTMLAttributes, FC, MouseEventHandler } from "react";

import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  redirect?: string | undefined;
  isSecondaryButton?: boolean;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  redirect,
  isSecondaryButton = false,
  disabled = false,
  ...rest
}) => {
  const buttonStyles = classNames(
    styles.button,
    isSecondaryButton ? styles.secondaryButton : styles.primaryButton,
    disabled && styles.disabled
  );

  if (redirect) {
    return (
      <Link href={redirect} target="_blank">
        <button className={buttonStyles} onClick={onClick} {...rest}>
          {children}
        </button>
      </Link>
    );
  } else {
    return (
      <button className={buttonStyles} onClick={onClick} {...rest}>
        {children}
      </button>
    );
  }
};

export default Button;
