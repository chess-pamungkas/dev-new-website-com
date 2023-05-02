import React, { useCallback } from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import {
  CONTACT_ADDRESS,
  CONTACT_EMAIL,
  CONTACT_EMAIL_FSA,
  CONTACT_PHONE,
  CONTACT_PHONE_FSA,
  DIR_LTR,
  DIR_RTL,
} from "../../helpers/constants";
import ContactUsForm from "./components/contact-us-form";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { isCySEC } from "../../helpers/entity-resolver";

const ContactUs = ({ className }) => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
  const email = isCySEC ? CONTACT_EMAIL : CONTACT_EMAIL_FSA;
  const phone = isCySEC ? CONTACT_PHONE : CONTACT_PHONE_FSA;

  return (
    <section
      className={cn("contact-us", className, {
        "contact-us--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
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
              href={`mailto:${email}`}
            >
              {email}
            </a>
          </div>
          <div className="contact-us__contact-block">
            <p className="contact-us__contact-block-title">
              {t("contact-us_phone")}
            </p>
            <a
              className="contact-us__contact-block-href"
              href={`tel:${phone}`}
            >
              {`+${phone}`}
            </a>
          </div>
          {isCySEC && (
            <div className="contact-us__contact-block">
              <p className="contact-us__contact-block-title">
                {t("contact-us_address")}
              </p>
              <p className="contact-us__contact-block-text">
                {CONTACT_ADDRESS}
              </p>
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
