import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import desktopPaymentSystemsSVG from "../../../../assets/images/bg/funding-withdrawals/payment-systems-desktop.svg";
import mobilePaymentSystemsSVG from "../../../../assets/images/bg/funding-withdrawals/payment-systems-mobile.svg";

const PaymentSystemsContent = () => {
  const { isMobile } = useWindowSize();
  const { t } = useTranslationWithVariables();

  const backgroundSrc = isMobile
    ? mobilePaymentSystemsSVG
    : desktopPaymentSystemsSVG;

  return (
    <div className="payment-systems-section">
      <div className="payment-systems-section__container">
        {/* Payment Systems Background with Logos */}
        <div className="payment-systems-section__background">
          <img
            src={backgroundSrc}
            alt="Payment Systems"
            className="payment-systems-section__background-image"
          />
        </div>

        {/* Informational Text */}
        <div className="payment-systems-section__info">
          <div className="payment-systems-section__info-text">
            <p>
              {t("payment_systems_info_1", {
                defaultValue:
                  "The finance processing team are fast!!! but sometimes there are delays that are outside of our control. We promise to keep you informed on the status of your deposit/withdrawal.",
              })}
            </p>
            <p>
              {t("payment_systems_info_2", {
                defaultValue:
                  "We are here for you any time of the day but not all financial institutions work around the clock. Our processing team will make sure your withdrawals are processed within the working day, Monday to Friday 9am - 3pm (Eastern European Standard Time).",
              })}
            </p>
            <p>
              {t("payment_systems_info_3", {
                defaultValue:
                  "We won't charge you a cent from our side but your bank or funding method may charge a fee from their side which is beyond our control.",
              })}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentSystemsContent;
