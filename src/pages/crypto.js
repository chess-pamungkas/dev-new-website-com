import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import {REGISTRATION_LINK} from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import {CRYPTO_TEXT, PROMOTION_TEXT_CRYPTO,} from "../helpers/top-market-texts";
import Layout from "../components/shared/layout";
import animation from "../assets/images/animations/crypto.json";
import PromotionMarkets from "../components/promotion-markets";
import TopMarketLayout from "../components/top-market-layout";
import {COLUMNS_CRYPTO, DATA_CRYPTO} from "../helpers/top-market-tables";
import TableComponent from "../components/shared/table";
import {FAQ_CRYPTO} from "../helpers/faq";
import Faq from "../components/faq";
import Seo from "../components/shared/seo";

const CryptoPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-crypto-title")} />
      <TopMarket
        title="You can now trade more than xxx crypto pairs!"
        image={image}
        btn1Title="Try our demo account"
        link1={REGISTRATION_LINK}
        btn2Title="Trade now crypto cfc"
        link2={REGISTRATION_LINK}
      >
        {CRYPTO_TEXT}
      </TopMarket>
      <PromotionMarkets
        animation={animation}
        promoText={PROMOTION_TEXT_CRYPTO}
      />
      <TopMarketLayout
        title="Transparent Pricings"
        btnTitle="Try Oqtima"
        link={REGISTRATION_LINK}
      >
        <TableComponent
          data={DATA_CRYPTO}
          columns={COLUMNS_CRYPTO}
          title="Spread Transparency"
          subtitle="When you have nothing to hide"
        />
      </TopMarketLayout>
      <Faq faq={FAQ_CRYPTO} />
    </Layout>
  );
};

export default CryptoPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
