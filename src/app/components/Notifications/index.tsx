import Image from "next/image";
import { useTranslations } from "next-intl";
import { createContext, FC, ReactNode, useContext, useState } from "react";

import ErrorSVG from "@/app/images/check_error.svg";
import SuccessSVG from "@/app/images/check_ok.svg";

import Button from "../Button";
import Modal from "../Modal";

import styles from "./Notifications.module.scss";

interface NotificationContextType {
  showError: () => void;
  showSuccess: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification debe usarse dentro de un NotificationProvider"
    );
  }
  return context;
};

export const NotificationProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<"success" | "error" | null>(null);
  const t = useTranslations("NOTIFICATION");
  const handleClose = () => {
    setMessage(null);
    setType(null);
  };

  const showError = () => {
    setMessage(t("ERROR"));
    setType("error");
  };

  const showSuccess = () => {
    setMessage(t("SUCCESS"));
    setType("success");
  };

  return (
    <NotificationContext.Provider value={{ showError, showSuccess }}>
      {children}
      <Modal isOpen={!!message} onClose={handleClose}>
        <div className={styles.container}>
          <div className={styles.notificationContainer}>
            <p>{message}</p>
            <Image
              src={type === "success" ? SuccessSVG : ErrorSVG}
              alt={type || ""}
            />
          </div>
          <Button onClick={handleClose} isSecondaryButton>
            {t("BUTTON_LABEL")}
          </Button>
        </div>
      </Modal>
    </NotificationContext.Provider>
  );
};
