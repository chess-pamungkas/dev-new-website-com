import React, { Suspense } from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import { lazified } from "../helpers/lazified";
import LoadingSpinner from "../components/loading-spinner";

const MainPromotion = lazified(() => import("../components/main-promotion"));
const TradingTicker = lazified(() => import("../components/trading-ticker"));
const PerformanceContent = lazified(() =>
  import("../components/pages-content/main-page-content/performance-content")
);
const PromotionContent = lazified(() =>
  import("../components/pages-content/main-page-content/promotion-content")
);
const IndexPage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Seo
          title={t("page-main-title")}
          description={t("page-main-description")}
        />
        {/*isShowHero is workaround to hide hero image (e.g. Buffon)  */}
        <MainPromotion isShowHero />
        <TradingTicker />
        <PromotionContent />
        <PerformanceContent />
      </Suspense>
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
