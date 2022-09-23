import React from "react";
import cn from "classnames";
import MarketItemAdvantageList from "../all-markets/components/market-item-advantage-list";
import Tabs from "../shared/tabs";

const MtPromotion = ({
  className,
  title,
  advantages,
  advantagesTitle,
  downloadTitle,
  tabs,
  image,
}) => {
  return (
    <section className={cn("mt-promotion", className)}>
      <div className={cn("mt-promotion__wrapper")}>
        <div
          className={cn("mt-promotion__block", "mt-promotion__block--flexed")}
        >
          <img src={image} alt={advantagesTitle} className="mt-promotion__img" />
        </div>
        <div className="mt-promotion__block">
          <div className="mt-promotion__description">
            <h2 className="mt-promotion__title">{title}</h2>
            <div className="mt-promotion__advantages">
              <MarketItemAdvantageList
                title={advantagesTitle}
                advantages={advantages}
                className="mt-promotion-market-item-advantages"
              />
            </div>
          </div>
          <div className="mt-promotion__download">
            <h2
              className={cn(
                "mt-promotion__title",
                "mt-promotion__title--download"
              )}
            >
              {downloadTitle}
            </h2>
            <Tabs tabList={tabs} classname="mt-promotion__download-tabs" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MtPromotion;
