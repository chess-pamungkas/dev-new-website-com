import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../helpers/hooks/use-translation-with-vars";
import {
  DIR_LTR,
  DIR_RTL,
  getContactPhone,
  getContactEmail,
  CONTACT_PHONE_FSA_2,
} from "../../helpers/constants";
import ContactUsForm from "./components/contact-us-form";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { useWindowSize } from "../../helpers/hooks/use-window-size";

// Import icons
import BadgeIcon from "../../assets/images/icons/main-page/badge-security.svg";
import EmailIcon from "../../assets/images/icons/contact-us/email.svg";
import PhoneIcon from "../../assets/images/icons/contact-us/phone.svg";
import AddressIcon from "../../assets/images/icons/contact-us/address.svg";

const ContactUs = ({ className }) => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();
  const isRTL = useRtlDirection();
  const email = getContactEmail();
  const phone = getContactPhone();

  return (
    <section
      className={cn("contact-us-content-section", className, {
        "contact-us-content-section--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="contact-us-content-section__container">
        {/* Left Section - Content */}
        <div className="contact-us__content">
          {/* Badge */}
          <div className="contact-us__badge-group">
            <div className="contact-us__badge">
              <img
                src={BadgeIcon}
                alt="Trade the Next Level"
                className="contact-us__badge-icon"
              />
            </div>
            <div className="contact-us__badge-content">
              <span className="contact-us__badge-message">
                {t("contact-us_badge-text")}
              </span>
              <svg
                className="contact-us__badge-arrow"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
                  stroke="#FF4400"
                  strokeWidth="1.33333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Title */}
          <h2 className="contact-us__title">{t("contact-us_page-title")}</h2>

          {/* Subtitle */}
          <p className="contact-us__subtitle">{t("contact-us_page-text")}</p>

          {/* Contact Information */}
          <div className="contact-us__info">
            {/* Email */}
            <div className="contact-us__info-item">
              <div className="contact-us__info-icon">
                <img src={EmailIcon} alt="Email" />
              </div>
              <div className="contact-us__info-content">
                <h3 className="contact-us__info-title">
                  {t("contact-us_email")}
                </h3>
                <a className="contact-us__info-link" href={`mailto:${email}`}>
                  {email}
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="contact-us__info-item">
              <div className="contact-us__info-icon">
                <img src={PhoneIcon} alt="Phone" />
              </div>
              <div className="contact-us__info-content">
                <h3 className="contact-us__info-title">
                  {t("contact-us_phone")}
                </h3>
                <a className="contact-us__info-link" href={`tel:${phone}`}>
                  +{phone}
                </a>
                <a
                  className="contact-us__info-link"
                  href={`tel:${CONTACT_PHONE_FSA_2}`}
                >
                  +{CONTACT_PHONE_FSA_2}
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="contact-us__info-item">
              <div className="contact-us__info-icon">
                <img src={AddressIcon} alt="Address" />
              </div>
              <div className="contact-us__info-content">
                <h3 className="contact-us__info-title">
                  {t("contact-us_address")}
                </h3>
                <p className="contact-us__info-text">
                  {t("contact-us_address_result")}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div id="contact-us__form-section" className="contact-us__form-section">
          <ContactUsForm />
        </div>
      </div>
    </section>
  );
};

ContactUs.propTypes = {
  className: PropTypes.string,
};

export default ContactUs;
