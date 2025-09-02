import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import icon from "../../../../assets/images/icons/all-markets/advantage-icon.svg";
import iconSm from "../../../../assets/images/icons/all-markets/advantage-icon-sm.svg";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import ButtonPopup from "../../../shared/button-popup";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { ButtonLearnMore } from "../../../shared/reusable-buttons";
import bgCard from "../../../../assets/images/bg/all-markets/bg-card.svg";

const MarketItemAdvantageList = ({
  className,
  advantages,
  title,
  btnTitle,
  link,
  btnClassName,
  btnOnClick,
}) => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();
  const isRTL = useRtlDirection();

  return (
    <div
      className={cn("market-item-advantages-list", className, {
        "market-item-advantages-list--rtl": isRTL,
      })}
    >
      <div className="market-item-advantages-list__container">
        {/* Background Image */}
        <div className="market-item-advantages-list__bg-image">
          <img src={bgCard} alt="" />
        </div>

        {/* Content */}
        <div className="market-item-advantages-list__content">
          {/* Title */}
          <h4 className="market-item-advantages-list__title">
            {t("all-markets_market-items-list-benefits-title")}
          </h4>

          {/* Advantages List */}
          <div className="market-item-advantages-list__advantages">
            {advantages.map((item, index) => (
              <div
                key={item.key || index}
                className="market-item-advantages-list__advantage-item"
              >
                <img
                  src={isMobile ? iconSm : icon}
                  alt=""
                  className="market-item-advantages__icon"
                />
                <span className="market-item-advantages-list__advantage-text">
                  {t(item.text)}
                </span>
              </div>
            ))}
          </div>

          {/* Learn More Button */}
          {link && (
            <div className="market-item-advantages-list__learn-more-wrapper">
              <ButtonLearnMore
                text={t("all-markets_market-items-list-learn-more-btn")}
                onClick={() => window.open(link, "_self")}
                className="market-item-advantages-list__learn-more-btn"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

MarketItemAdvantageList.propTypes = {
  className: PropTypes.string,
  advantages: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  btnTitle: PropTypes.string,
  link: PropTypes.string,
  btnClassName: PropTypes.string,
  btnOnClick: PropTypes.func,
};

export default MarketItemAdvantageList;
