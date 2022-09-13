import React from "react";
import cn from "classnames";
import ButtonLink from "../../../shared/button-link";
import MarketItemAdvantageList from "../market-item-advantage-list";
import { useTranslation } from "gatsby-plugin-react-i18next";

const MarketItem = ({
  className,
  icon,
  title,
  text,
  isGrayBackground,
  link,
  advantages,
}) => {
  const { t } = useTranslation();
  return (
    <div
      className={cn("market-item", className, {
        "market-item--gray": isGrayBackground,
      })}
    >
      <div className="market-item__description">
        <img src={icon} alt="" className="market-item__icon" />
        <h3 className="market-item__title">{t(title)}</h3>
        <div className="market-item__text">
          {text.map((item, number) => (
            <span key={`${t(title)}-${number}`}>{t(item)}</span>
          ))}
        </div>
        <ButtonLink link={link} className={"market-item__btn"}>
          {t("all-markets_market-items-list-learn-more-btn")}
        </ButtonLink>
      </div>
      <div className="market-item__advantages">
        <MarketItemAdvantageList advantages={advantages} />
      </div>
    </div>
  );
};

export default MarketItem;
