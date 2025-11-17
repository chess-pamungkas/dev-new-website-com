import React, { Suspense, lazy } from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import Seo from "../components/shared/seo";
import MainPromotion from "../components/pages-content/main-page-content/main-promotion-content";
import TradingTicker from "../components/trading-ticker";
import TestimonialsSecurityContent from "../components/pages-content/main-page-content/testimonials-security-content";
import FeaturesExecutionExcellence from "../components/pages-content/main-page-content/features-excecution-excellence-content";
import ContainerWrapper from "../components/shared/container-wrapper";
import CostCalculatorContent from "../components/pages-content/main-page-content/cost-calculator-content";
import TechnologyInfrastructureContent from "../components/pages-content/main-page-content/technology-infrastructure-content";
import MarketSentimentContent from "../components/market-sentiment";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import PageBackground from "../components/shared/page-background";

// Lazy load non-critical components to reduce initial JavaScript execution time
const AccountComparison = lazy(() =>
  import("../components/shared/account-comparison")
);
const TrustContent = lazy(() =>
  import("../components/pages-content/main-page-content/trust-content")
);
const FeaturesSectionContent = lazy(() =>
  import("../components/features-section")
);
const GuideContent = lazy(() => import("../components/shared/guide-content"));
const OurCommunityContent = lazy(() =>
  import("../components/shared/our-community")
);

// Loading fallback component
const ComponentLoader = () => <div style={{ minHeight: "200px" }} />;

const IndexPage = ({ className, isShowHero = true }) => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();

  return (
    <PageBackground backgroundType="homepage-bg-1">
      <Seo
        title={t("page-main-title")}
        description={t("page-main-description")}
      />

      {/* MainPromotion rendered outside container constraints */}
      <MainPromotion />
      <TradingTicker />
      {/* Content inside container */}
      <ContainerWrapper>
        <FeaturesExecutionExcellence />
        <TestimonialsSecurityContent />
      </ContainerWrapper>
      {/* Lazy load AccountComparison - below the fold */}
      <Suspense fallback={<ComponentLoader />}>
        <AccountComparison />
      </Suspense>
      <ContainerWrapper>
        <CostCalculatorContent />
        <TechnologyInfrastructureContent />
      </ContainerWrapper>
      <MarketSentimentContent />
      <ContainerWrapper>
        {/* Lazy load TrustContent - below the fold */}
        <Suspense fallback={<ComponentLoader />}>
          <TrustContent />
        </Suspense>
        {/* Lazy load FeaturesSectionContent - below the fold */}
        <Suspense fallback={<ComponentLoader />}>
          <FeaturesSectionContent />
        </Suspense>
        {/* Lazy load GuideContent - below the fold */}
        <Suspense fallback={<ComponentLoader />}>
          <GuideContent
            titleKey="main-guide-title"
            subtitleKey="main-guide-subtitle"
          />
        </Suspense>
      </ContainerWrapper>
      {/* Lazy load OurCommunityContent - bottom of page */}
      <Suspense fallback={<ComponentLoader />}>
        {isMobile ? (
          <OurCommunityContent />
        ) : (
          <ContainerWrapper>
            <OurCommunityContent />
          </ContainerWrapper>
        )}
      </Suspense>
    </PageBackground>
  );
};

IndexPage.propTypes = {
  className: PropTypes.string,
  isShowHero: PropTypes.bool,
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
