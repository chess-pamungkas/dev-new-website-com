import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import TopMarket from "../../top-market";
import cn from "classnames";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import promotion from "../../../assets/images/trading-tools/promotion.svg";

const TradingToolsPageContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <>
      <TopMarket
        className={cn("top-market--trading-tools", {
          "top-market--trading-tools--rtl": isRTL,
        })}
        image={promotion}
        title={
          <HighlightedLocalizationText
            localizationText="trading-tools_top-market-promo-title"
            wordsToHighlight="trading-tools_top-market-promo-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
        btn1Title={t("trading-tools_top-market-btn1-title")}
        btn2Title={t("trading-tools_top-market-btn2-title")}
        btn3Title={t("trading-tools_top-market-btn3-title")}
      >
        <HighlightedLocalizationText
          localizationText="trading-tools_top-market-promo-text"
          wordsToHighlight="trading-tools_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
    </>
  );
};

export default TradingToolsPageContent;
