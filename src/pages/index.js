import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import MainPromotion from "../components/main-promotion";
import TradingTicker from "../components/trading-ticker";
import Seo from "../components/shared/seo";
import PerformanceContent from "../components/pages-content/main-page-content/performance-content";
import PromotionContent from "../components/pages-content/main-page-content/promotion-content";
import VersionSentinel from "../helpers/VersionSentinel";
const IndexPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <VersionSentinel />
      <Seo
        title={t("page-main-title")}
        description={t("page-main-description")}
      />
      {/*isShowHero is workaround to hide hero image (e.g. Buffon)  */}
      <MainPromotion isShowHero />
      <TradingTicker />
      <PromotionContent />
      <PerformanceContent />
    </>
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
