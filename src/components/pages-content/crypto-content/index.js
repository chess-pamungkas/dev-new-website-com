import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";
import TopMarket from "../../top-market";
import image from "../../../assets/images/top-markets/cripto.svg";
import { REGISTRATION_LINK } from "../../../helpers/constants";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import TradingTicker from "../../trading-ticker";
import TopMarketPromotion from "../../top-market-promotion";
import crypto from "../../../assets/images/top-markets/images/crypto.svg";
import PromotionMarkets from "../../promotion-markets";
import animation from "../../../assets/images/animations/crypto.json";
import TopMarketLayout from "../../top-market-layout";
import {
  COLUMNS_CRYPTO,
  DATA_CRYPTO,
} from "../../../helpers/top-market-tables";
import TableComponent from "../../shared/table";
import { FAQ_CRYPTO } from "../../../helpers/faq";
import Faq from "../../faq";

const CryptoContent = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const { sitePostfix } = useEntityPostfix();

  return (
    <>
      <TopMarket
        title={t(`crypto_top-market-title${sitePostfix}`)}
        image={image}
        btn1Title={t("crypto_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("crypto_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="crypto_top-market-promo-text"
          wordsToHighlight="crypto-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <TradingTicker title={t("crypto_trading-ticker-title")} />
      <TopMarketPromotion
        className="crypto-promotion"
        image={crypto}
        btnTitle={t("crypto_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="crypto_top-market-promotion-promo-text"
          wordsToHighlight="crypto-top-market-promotion-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </TopMarketPromotion>
      <PromotionMarkets
        animation={animation}
        animationStyle={{
          height: isMobile ? 301 : 473,
        }}
        btnTitle={t("crypto_promotion-markets-btn")}
      >
        <HighlightedLocalizationText
          localizationText="crypto_promotion-markets-promo-text-1"
          wordsToHighlight="crypto-promotion-markets-promo-text-accent-1"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="crypto_promotion-markets-promo-text-2"
          wordsToHighlight="crypto-promotion-markets-promo-text-accent-2"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="crypto_promotion-markets-promo-text-3"
          wordsToHighlight="crypto-promotion-markets-promo-text-accent-3"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="crypto_promotion-markets-promo-text-4"
          wordsToHighlight="crypto-promotion-markets-promo-text-accent-4"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="crypto_promotion-markets-promo-text-5"
          wordsToHighlight="crypto-promotion-markets-promo-text-accent-5"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="crypto_promotion-markets-promo-text-6"
          wordsToHighlight="crypto-promotion-markets-promo-text-accent-6"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
        <HighlightedLocalizationText
          localizationText="crypto_promotion-markets-promo-text-7"
          wordsToHighlight="crypto-promotion-markets-promo-text-accent-7"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </PromotionMarkets>
      <TopMarketLayout
        title={t("crypto_top-market-layout-title")}
        btnTitle={t("crypto_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_CRYPTO}
          columns={COLUMNS_CRYPTO}
          isWrapperPadding
          tip={
            <span>
              <span className="bold">*MIN</span>&nbsp;-&nbsp;{t("table-tip1")}
              &nbsp;
              <span className="bold">AVG</span>&nbsp;-&nbsp;{t("table-tip2")}
              &nbsp;
            </span>
          }
          isSearch
        />
      </TopMarketLayout>
      <Faq faq={FAQ_CRYPTO} />
    </>
  );
};

export default CryptoContent;
