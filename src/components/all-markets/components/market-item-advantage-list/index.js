import React from "react";
import cn from "classnames";
import icon from "../../../../assets/images/all-markets/advantage-icon.svg";
import iconSm from "../../../../assets/images/all-markets/advantage-icon-sm.svg";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";

const MarketItemAdvantageList = ({ className, advantages }) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  return (
    <div className={cn("market-item-advantages", className)}>
      {advantages.map((item) => (
        <div key={item.key} className="market-item-advantages__item">
          <img
            src={isMobile ? iconSm : icon}
            alt=""
            className="market-item-advantages__icon"
          />
          <div className="market-item-advantages__text">{t(item.text)}</div>
        </div>
      ))}
    </div>
  );
};

export default MarketItemAdvantageList;
