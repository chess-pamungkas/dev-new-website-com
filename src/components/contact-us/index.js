import React, { useCallback } from "react";
import { useEntityPostfix } from "../../helpers/use-entity-postfix";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import {
  CONTACT_EMAIL,
  CONTACT_EMAIL_FSA,
  CONTACT_PHONE,
  CONTACT_PHONE_LINK,
} from "../../helpers/constants";
import ContactUsForm from "./components/contact-us-form";

const ContactUs = ({ className }) => {
  const { isCySEC } = useEntityPostfix();
  const { t } = useTranslation();

  const getEmail = useCallback(() => {
    return isCySEC ? CONTACT_EMAIL : CONTACT_EMAIL_FSA;
  }, [isCySEC]);

  return (
    <section className={cn("contact-us", className)}>
      <div className="contact-us__wrapper">
        <div className="contact-us__block">
          <h2 className="contact-us__title">{t("contact-us_page-title")}</h2>
          <p className="contact-us__text">{t("contact-us_page-text")}</p>
          <div className="contact-us__contact-block">
            <p className="contact-us__contact-block-title">
              {t("contact-us_email")}
            </p>
            <a
              className="contact-us__contact-block-href"
              href={`mailto:${getEmail()}`}
            >
              {getEmail()}
            </a>
          </div>
          {isCySEC && (
            <div className="contact-us__contact-block">
              <p className="contact-us__contact-block-title">
                {t("contact-us_phone")}
              </p>
              <a
                className="contact-us__contact-block-href"
                href={`tel:${CONTACT_PHONE_LINK}`}
              >
                {CONTACT_PHONE}
              </a>
            </div>
          )}
        </div>
        <div className="contact-us__block">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
