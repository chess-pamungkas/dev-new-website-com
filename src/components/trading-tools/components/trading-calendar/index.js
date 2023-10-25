import React from "react";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import {
  DIR_LTR,
  DIR_RTL,
  GetRegistrationLink,
} from "../../../../helpers/constants";
import CalendarInfoBlock from "./components/info-block";
import img from "../../../../assets/images/trading-tools/calendar.png";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import FeatureItem from "./components/feature-item";
import { TRADING_CALENDAR_FEATURES } from "../../../../helpers/trading-tools.config";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import ButtonLink from "../../../shared/button-link";

const TradingCalendar = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <section
      id="tradingCalendar"
      className={cn("trading-calendar", className, {
        "trading-calendar--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="trading-calendar__wrapper">
        <div className="trading-calendar__title-wrapper">
          <h2 className="trading-calendar__title">
            {t("trading-tools_trading-calendar_title")}
          </h2>
          <p className="trading-calendar__subtitle">
            {t("trading-tools_trading-calendar_subtitle")}
          </p>
          <p className="trading-calendar__description">
            {t("trading-tools_trading-calendar_description")}
          </p>
        </div>
        <CalendarInfoBlock
          title={
            <HighlightedLocalizationText
              localizationText="trading-tools_calendar-info-block_title"
              wordsToHighlight="trading-tools_calendar-info-block_title-accent"
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          }
          description={
            <HighlightedLocalizationText
              localizationText="trading-tools_calendar-info-block_description"
              wordsToHighlight="trading-tools_calendar-info-block_description-accent"
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          }
          img={img}
        />

        <div className="trading-calendar__features-block">
          {TRADING_CALENDAR_FEATURES.map((item) => (
            <FeatureItem
              key={stringTransformToKebabCase(item.title)}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>

        <ButtonLink
          link={GetRegistrationLink()}
          className="button-link button-link--red trading-tools-btn"
        >
          {t("trading-tools_top-market-promo-btn3")}
        </ButtonLink>
      </div>
    </section>
  );
};

export default TradingCalendar;
