import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import TopMarket from "../../top-market";
import cn from "classnames";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import promotion from "../../../assets/images/trading-tools/promotion.svg";
import AlphaGeneration from "../../trading-tools/components/alpha-generation";
import icon from "../../../assets/images/icon--white.svg";
import { GetLoginLink } from "../../../helpers/constants";
import TopMarketPromotion from "../../top-market-promotion";
import FeaturedIdeas from "../../trading-tools/components/featured-ideas";
import MarketBuzz from "../../trading-tools/components/market-buzz";

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
        link1="#alphaGeneration"
        isAnchorLink1
        btn2Title={t("trading-tools_top-market-btn2-title")}
        link2="#featuredIdeas"
        isAnchorLink2
        btn3Title={t("trading-tools_top-market-btn3-title")}
        link3="#marketBuzz"
        isAnchorLink3
      >
        <HighlightedLocalizationText
          localizationText="trading-tools_top-market-promo-text"
          wordsToHighlight="trading-tools_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <AlphaGeneration />
      <FeaturedIdeas />
      <MarketBuzz />
      <TopMarketPromotion
        className={cn("bottom-promotion", {
          "bottom-promotion--rtl": isRTL,
        })}
        image={icon}
        btnClassName="button-link--red"
        btnTitle={t("trading-tools_top-market-promo-btn3")}
        link={GetLoginLink()}
      >
        <HighlightedLocalizationText
          localizationText="trading-tools_top-market-promo-text3"
          wordsToHighlight="trading-tools_top-market-promo-text-accent3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </>
  );
};

export default TradingToolsPageContent;
