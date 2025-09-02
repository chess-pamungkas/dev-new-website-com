import React from "react";
import { graphql } from "gatsby";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import Seo from "../components/shared/seo";
import MainPromotion from "../components/pages-content/main-page-content/main-promotion-content";
import TradingTicker from "../components/trading-ticker";
import TestimonialsSecurityContent from "../components/pages-content/main-page-content/testimonials-security-content";
import AccountComparison from "../components/shared/account-comparison";
import FeaturesExecutionExcellence from "../components/pages-content/main-page-content/features-excecution-excellence-content";
import ContainerWrapper from "../components/shared/container-wrapper";
import CostCalculatorContent from "../components/pages-content/main-page-content/cost-calculator-content";
import TechnologyInfrastructureContent from "../components/pages-content/main-page-content/technology-infrastructure-content";
import MarketSentimentContent from "../components/market-sentiment";
import TrustContent from "../components/pages-content/main-page-content/trust-content";
import FeaturesSectionContent from "../components/features-section";
import GuideContent from "../components/shared/guide-content";
import OurCommunityContent from "../components/shared/our-community";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import PageBackground from "../components/shared/page-background";

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
      <AccountComparison />
      <ContainerWrapper>
        <CostCalculatorContent />
        <TechnologyInfrastructureContent />
      </ContainerWrapper>
      <MarketSentimentContent />
      <ContainerWrapper>
        <TrustContent />
        <FeaturesSectionContent />
        <GuideContent
          titleKey="main-guide-title"
          subtitleKey="main-guide-subtitle"
        />
      </ContainerWrapper>
      {isMobile ? (
        <OurCommunityContent />
      ) : (
        <ContainerWrapper>
          <OurCommunityContent />
        </ContainerWrapper>
      )}
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
