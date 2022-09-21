import React from "react";
import cn from "classnames";
import ButtonLink from "../shared/button-link";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { ADDITIONAL_PLATFORMS, PLATFORMS } from "../../helpers/config";
import MarketItemAdvantageList from "../all-markets/components/market-item-advantage-list";
import { useWindowSize } from "../../helpers/hooks/use-window-size";

const MetaTrader = ({
  classname,
  title,
  text,
  icon,
  learMoreLink,
  downloadLink,
  learMoreLinkTitle,
  downloadLinkTitle,
  advantages,
  isGrayBackground,
}) => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();

  const AdvantagesTemplate = (
    <div className={cn("meta-trader__advantages")}>
      {!isLG && (
        <div className={cn("meta-trader__trader-icon")}>
          <img
            className="meta-trader__tool-icon-img"
            src={icon}
            alt={t(title)}
          />
        </div>
      )}

      <MarketItemAdvantageList
        className={cn("meta-trader__advantages-list")}
        advantages={advantages}
      />
    </div>
  );

  const TRADER_TOOLS = [
    PLATFORMS.ios,
    PLATFORMS.android,
    ADDITIONAL_PLATFORMS.windows,
  ];

  const TraderToolIcon = ({ item }) => {
    return (
      <div className={cn("meta-trader__tool-icon")}>
        <img
          className="meta-trader__tool-icon-img"
          src={item.icon}
          alt={t(item.title)}
        />
      </div>
    );
  };

  return (
    <section
      className={cn("meta-trader", classname, {
        "meta-trader--gray-bg": isGrayBackground,
      })}
    >
      <div className={cn("meta-trader__wrapper")}>
        <div className={cn("meta-trader__description")}>
          <h2 className={cn("meta-trader__title")}>{t(title)}</h2>
          <p className={cn("meta-trader__text")}>
            {text.map((item, number) => (
              <span key={`${t(title)}-text-${number}`}>{t(item)}</span>
            ))}
          </p>
          {!isMobile && isTablet && AdvantagesTemplate}
          <div className={cn("meta-trader__footer")}>
            <div className={cn("meta-trader__links")}>
              <ButtonLink
                link={learMoreLink}
                className={cn("meta-trader__more-link")}
              >
                {t(learMoreLinkTitle)}
              </ButtonLink>
              <ButtonLink
                link={downloadLink}
                className={cn("meta-trader__download-link", "button-link--red")}
              >
                {t(downloadLinkTitle)}
              </ButtonLink>
            </div>
            {isLG && (
              <div className={cn("meta-trader__trader-icon")}>
                <img
                  className="meta-trader__tool-icon-img"
                  src={icon}
                  alt={t(title)}
                />
              </div>
            )}
            <div className={cn("meta-trader__tool-icons")}>
              {TRADER_TOOLS.map((tool) => (
                <TraderToolIcon
                  key={`traderToolIconKey${tool.title}`}
                  item={tool}
                />
              ))}
            </div>
          </div>
        </div>

        {(isMobile || isLG || isXL) && AdvantagesTemplate}
      </div>
    </section>
  );
};

export default MetaTrader;
