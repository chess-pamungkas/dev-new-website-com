import React from "react";
import Lottie from "lottie-react";
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import ButtonLink from "../shared/button-link";
import { REGISTRATION_LINK } from "../../helpers/constants";
import { useTranslation } from "gatsby-plugin-react-i18next";

export const MarketingCircle = ({
  animation,
  upper,
  bottom,
  leftUpper,
  leftBottom,
  rightUpper,
  rightBottom,
}) => {
  const { isMobile, isMD, isLG } = useWindowSize();
  const { t } = useTranslation();

  let animationHeight = 492;
  if (isMobile) {
    animationHeight = 169;
  }
  if (isMD) {
    animationHeight = 242;
  }
  if (isLG) {
    animationHeight = 361;
  }

  return (
    <div className="marketing-circle">
      <Lottie
        className="promotion-markets__svg"
        animationData={animation}
        style={{ height: animationHeight }}
      />
      <ButtonLink
        link={REGISTRATION_LINK}
        className="button-link button-link--red marketing-circle__btn"
      >
        {t("button-start-now")}
      </ButtonLink>
      <div className="marketing-circle__wrapper">
        <div className="marketing-circle__item marketing-circle__upper-item">
          <p className="marketing-circle__item-text">{upper}</p>
        </div>
        <div className="marketing-circle__item marketing-circle__left-upper-item">
          <p className="marketing-circle__item-text">{leftUpper}</p>
        </div>
        <div className="marketing-circle__item marketing-circle__left-bottom-item">
          <p className="marketing-circle__item-text">{leftBottom}</p>
        </div>
        <div className="marketing-circle__item marketing-circle__right-upper-item">
          <p className="marketing-circle__item-text">{rightUpper}</p>
        </div>
        <div className="marketing-circle__item marketing-circle__right-bottom-item">
          <p className="marketing-circle__item-text">{rightBottom}</p>
        </div>
        <div className="marketing-circle__item marketing-circle__bottom-item">
          <p className="marketing-circle__item-text">{bottom}</p>
        </div>
      </div>
    </div>
  );
};

export default MarketingCircle;
