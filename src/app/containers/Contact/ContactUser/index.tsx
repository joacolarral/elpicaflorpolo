import Image from "next/image";
import { useTranslations } from "next-intl";

import Button from "@/app/components/Button";
import Container from "@/app/components/Container";
import TitleAndSubtitle from "@/app/components/TitleAndSubtitle";
import IMAGE_SRC from "@/app/images/contact/Seccion_Contacto_ImgCabalgata.png";
import PICAFLOR_LOGO from "@/app/images/logos-sponsor/contacto_Logo_ElPicaflor_positivo.svg";
import FACEBOOK from "@/app/images/logos-sponsor/contacto_Logo_Fb.svg";
import INSTAGRAM from "@/app/images/logos-sponsor/contacto_Logo_IG.svg";
import PATAGONIA_LOGO from "@/app/images/logos-sponsor/contacto_Logo_Patagonia_positivo.svg";

import styles from "../contact.module.scss";

const Logos = [PICAFLOR_LOGO, PATAGONIA_LOGO];

const ContactUser = () => {
  const t = useTranslations("CONTACT_USER");
  return (
    <Container className={styles.contactUserContainer} noPaddingRight>
      <div className={styles.contactUserContent}>
        <TitleAndSubtitle title={t("TITLE")} subtitle={t("SUBTITLE")} />
        <form className={styles.formContainer}>
          <input
            type="text"
            name="full_name"
            autoComplete="name"
            placeholder={t("INPUT_FULLNAME")}
          />
          <input
            type="text"
            name="email"
            autoComplete="email"
            placeholder={t("INPUT_MAIL")}
          />
          <textarea name="message" placeholder={t("INPUT_TEXTBOX")} rows={4} />
        </form>
        <Button isSecondaryButton>{t("BUTTON_LABEL")}</Button>

        <div className={styles.contactUserLogosContainer}>
          {Logos.map((logo, i) => (
            <div key={i} className={styles.contactUser}>
              <div>
                <Image src={logo} alt={`logo_${i + 1}`} />
              </div>
              <div className={styles.horizontalLine} />
              <div className={styles.contactUserSocialMedia}>
                <Image src={FACEBOOK} alt="facebook_logo" />
                <Image src={INSTAGRAM} alt="instagram_logo" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Image layout="responsive" src={IMAGE_SRC} alt="contact_form" />
    </Container>
  );
};

export default ContactUser;
