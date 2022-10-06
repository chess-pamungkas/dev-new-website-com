import React, { useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import MainPromotion from "../components/main-promotion";
import TradingTicker from "../components/trading-ticker";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import PerformanceContent from "../components/main-page-content/performance-content";
import PromotionContent from "../components/main-page-content/promotion-content";

const IndexPage = () => {
  const { t } = useTranslation();
  const [headerRef, setHeaderRef] = useState(null);

  return (
    <Layout setHeaderRef={setHeaderRef}>
      <Seo title={t("page-main-title")} />
      <MainPromotion />
      <TradingTicker />
      <PromotionContent headerRef={headerRef} />
      <PerformanceContent />
    </Layout>
  );
};
export default IndexPage;

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
