import React, { Suspense } from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import VersionSentinel from "../helpers/VersionSentinel";
import { lazified } from "../helpers/lazified";
import LoadingSpinner from "../components/loading-spinner"; // Example fallback component

const IndexPage = () => {
  const { t } = useTranslationWithVariables();
  const MainPromotion = lazified(() => import("../components/main-promotion"));
  const TradingTicker = lazified(() => import("../components/trading-ticker"));
  const PromotionContent = lazified(() =>
    import("../components/pages-content/main-page-content/promotion-content")
  );
  const PerformanceContent = lazified(() =>
    import("../components/pages-content/main-page-content/performance-content")
  );

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <VersionSentinel />
      <Seo
        title={t("page-main-title")}
        description={t("page-main-description")}
      />
      <MainPromotion isShowHero />
      {/*isShowHero is workaround to hide hero image (e.g. Buffon)  */}
      <TradingTicker />
      <PromotionContent />
      <PerformanceContent />
    </Suspense>
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
