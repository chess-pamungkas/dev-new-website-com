import React from "react";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/forex.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import forex from "../../../assets/images/top-markets/images/forex.svg";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { FOREX_TRADING_SECTION } from "../../../helpers/config";
import StaticImages from "../../../components/promotion-markets/static-images";
import MarketingImage from "../../../assets/images/bg/promotions/forex/forex@2x.png";
import animation from "../../../assets/images/bg/promotions/forex/forex.json";

const ForexContent = () => {
  const { sitePostfix } = useEntityPostfix();
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  return (
    <>
      <TopMarket
        title={t("forex_top-market-title")}
        isTitleUppercase
        image={image}
        btn1Title={t("forex_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("forex_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="forex_top-market-promo-text"
          wordsToHighlight="forex-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker
        title={t("forex_trading-ticker-title")}
        pageSpecificSection={FOREX_TRADING_SECTION}
      />
      <TopMarketPromotion
        className="forex-promotion"
        image={forex}
        btnTitle={t("forex_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText={`forex_top-market-promotion-promo-text${sitePostfix}`}
          wordsToHighlight={`forex-top-market-promotion-promo-text-accent${sitePostfix}`}
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <StaticImages
        image={MarketingImage}
        height={isMobile ? 400 : 800}
        animation={animation}
      />
    </>
  );
};

export default ForexContent;
