import React, { useContext } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import Lottie from "lottie-react";
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import ButtonLink from "../shared/button-link";
import { BIGGER_LANGUAGES, GetRegistrationLink } from "../../helpers/constants";
import { useTranslationWithVariables } from "../../helpers/hooks/use-translation-with-vars";
import LanguageContext from "../../context/language-context";

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
  const { t } = useTranslationWithVariables();
  const { selectedLanguage } = useContext(LanguageContext);

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

  const itemClass =
    "marketing-circle__item " +
    `${
      BIGGER_LANGUAGES.includes(selectedLanguage.id)
        ? "marketing-circle__item--bigger-lang"
        : ""
    }`;

  return (
    <div className="marketing-circle">
      <Lottie
        className="promotion-markets__svg"
        animationData={animation}
        style={{ height: animationHeight }}
      />
      <ButtonLink
        link={GetRegistrationLink()}
        className="button-link button-link--red marketing-circle__btn"
      >
        {t("button-start-now")}
      </ButtonLink>
      <div
        className={cn("marketing-circle__wrapper", {
          "marketing-circle__wrapper--bigger-lang": BIGGER_LANGUAGES.includes(
            selectedLanguage.id
          ),
        })}
      >
        <div className={`${itemClass} marketing-circle__upper-item`}>
          <p className="marketing-circle__item-text">{upper}</p>
        </div>
        <div className={`${itemClass} marketing-circle__left-upper-item`}>
          <p className="marketing-circle__item-text">{leftUpper}</p>
        </div>
        <div className={`${itemClass} marketing-circle__left-bottom-item`}>
          <p className="marketing-circle__item-text">{leftBottom}</p>
        </div>
        <div className={`${itemClass} marketing-circle__right-upper-item`}>
          <p className="marketing-circle__item-text">{rightUpper}</p>
        </div>
        <div className={`${itemClass} marketing-circle__right-bottom-item`}>
          <p className="marketing-circle__item-text">{rightBottom}</p>
        </div>
        <div className={`${itemClass} marketing-circle__bottom-item`}>
          <p className="marketing-circle__item-text">{bottom}</p>
        </div>
      </div>
    </div>
  );
};

MarketingCircle.propTypes = {
  animation: PropTypes.object.isRequired,
  upper: PropTypes.element.isRequired,
  leftUpper: PropTypes.element.isRequired,
  rightUpper: PropTypes.element.isRequired,
  bottom: PropTypes.element.isRequired,
  leftBottom: PropTypes.element.isRequired,
  rightBottom: PropTypes.element.isRequired,
};
export default MarketingCircle;
