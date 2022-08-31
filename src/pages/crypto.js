import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import {
  CRYPTO_TEXT,
  PROMOTION_TEXT_CRYPTO,
} from "../helpers/top-market-texts";
import Layout from "../components/shared/layout";
import animation from "../assets/images/animations/crypto.json";
import PromotionMarkets from "../components/promotion-markets";
import TopMarketLayout from "../components/top-market-layout";
import { COLUMNS_CRYPTO, DATA_CRYPTO } from "../helpers/top-market-tables";
import TableComponent from "../components/shared/table";
import { FAQ_CRYPTO } from "../helpers/faq";
import Faq from "../components/faq";
import Seo from "../components/shared/seo";
import TradingTicker from "../components/trading-ticker";
import crypto from "../assets/images/promotions/promo1.svg";
import { PROMO_TEXT_CRYPTO } from "../helpers/promo-texts";
import TopMarketPromotion from "../components/top-market-promotion";
import { useWindowSize } from "../helpers/hooks/use-window-size";

const CryptoPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  return (
    <Layout>
      <Seo title={t("page-crypto-title")} />
      <TopMarket
        title={t("crypto_top-market-title")}
        image={image}
        btn1Title={t("crypto_top-market-btn1")}
        link1={REGISTRATION_LINK}
        btn2Title={t("crypto_top-market-btn2")}
        link2={REGISTRATION_LINK}
      >
        {CRYPTO_TEXT}
      </TopMarket>
      <TradingTicker />
      <TopMarketPromotion
        className="crypto-promotion"
        // TODO replace with a real image
        image={crypto}
        btnTitle={t("crypto_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        {PROMO_TEXT_CRYPTO}
      </TopMarketPromotion>
      <PromotionMarkets
        animation={animation}
        animationStyle={{
          height: isMobile ? 301 : 473,
        }}
        promoText={PROMOTION_TEXT_CRYPTO}
      />
      <TopMarketLayout
        title={t("crypto_top-market-layout-title")}
        btnTitle={t("crypto_top-market-layout-btn")}
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_CRYPTO}
          columns={COLUMNS_CRYPTO}
          title={t("crypto_table-title")}
          subtitle={t("crypto_table-subtitle")}
        />
      </TopMarketLayout>
      <Faq faq={FAQ_CRYPTO} />
    </Layout>
  );
};

export default CryptoPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
