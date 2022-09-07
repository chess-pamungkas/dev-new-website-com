import React from "react";
import cn from "classnames";
import ButtonLink from "../../../shared/button-link";
import MarketItemAdvantageList from "../market-item-advantage-list";
import { useTranslation } from "gatsby-plugin-react-i18next";

const MarketItem = ({
  className,
  icon: Icon,
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
        <Icon className="market-item__icon" />
        <div className="market-item__title">{t(title)}</div>
        <div className="market-item__text">{t(text)}</div>
        <ButtonLink link={link} className={"market-item__btn"}>
          {t("all-markets-learn-more-btn")}
        </ButtonLink>
      </div>
      <div className="market-item__advantages">
        <MarketItemAdvantageList advantages={advantages} />
      </div>
    </div>
  );
};

export default MarketItem;
