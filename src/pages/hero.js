import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import MainPromotion from "../components/main-promotion";
import TradingTicker from "../components/trading-ticker";
import Seo from "../components/shared/seo";
import PerformanceContent from "../components/pages-content/main-page-content/performance-content";
import PromotionContent from "../components/pages-content/main-page-content/promotion-content";

const HeroIndexPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        title={t("page-main-title")}
        description={t("page-main-description")}
        fsaRobots={"noindex"}
        cysecRobots={"noindex"}
      />
      {/*isShowHero is workaround to hide hero image (e.g. Buffon)  */}
      <MainPromotion isShowHero={false} />
      <TradingTicker />
      <PromotionContent />
      <PerformanceContent />
    </>
  );
};
export default HeroIndexPage;

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
