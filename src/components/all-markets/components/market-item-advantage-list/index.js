import React from "react";
import cn from "classnames";
import icon from "../../../../assets/images/all-markets/advantage-icon.svg";
import iconSm from "../../../../assets/images/all-markets/advantage-icon-sm.svg";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";

const MarketItemAdvantageList = ({ className, advantages, title }) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  return (
    <div className={cn("market-item-advantages-list", className)}>
      {title && (
        <div className="market-item-advantages-list__title-wrapper">
          <h4 className="market-item-advantages-list__title">{title}</h4>
        </div>
      )}
      <div className="market-item-advantages">
        {advantages.map((item) => (
          <div key={item.key} className="market-item-advantages__item">
            <img
              src={isMobile ? iconSm : icon}
              alt=""
              className="market-item-advantages__icon"
            />
            <span className="market-item-advantages__text">{t(item.text)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketItemAdvantageList;
