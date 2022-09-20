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

  const advantagesTemplate = (
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

  return (
    <section
      className={cn("meta-trader", classname, {
        "meta-trader--gray-bg": isGrayBackground,
      })}
    >
      <div className={cn("meta-trader__wrapper")}>
        <div className={cn("meta-trader__description")}>
          <div className={cn("meta-trader__title")}>{t(title)}</div>
          <div className={cn("meta-trader__text")}>
            {text.map((item, number) => (
              <div key={`${t(title)}-${number}`}>{t(item)}</div>
            ))}
          </div>
          {!isMobile && isTablet && advantagesTemplate}
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
                  title={t(title)}
                />
              </div>
            )}
            <div className={cn("meta-trader__tool-icons")}>
              <div className={cn("meta-trader__tool-icon")}>
                <img
                  className="meta-trader__tool-icon-img"
                  src={PLATFORMS.ios.icon}
                  title={t(PLATFORMS.ios.title)}
                />
              </div>
              <div className={cn("meta-trader__tool-icon")}>
                <img
                  className="meta-trader__tool-icon-img"
                  src={PLATFORMS.android.icon}
                  title={t(PLATFORMS.android.title)}
                />
              </div>
              <div className={cn("meta-trader__tool-icon")}>
                <img
                  className="meta-trader__tool-icon-img"
                  src={ADDITIONAL_PLATFORMS.windows.icon}
                  title={t(ADDITIONAL_PLATFORMS.windows.title)}
                />
              </div>
            </div>
          </div>
        </div>

        {(isMobile || isLG || isXL) && advantagesTemplate}
      </div>
    </section>
  );
};

export default MetaTrader;
