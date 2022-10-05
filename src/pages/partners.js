import React from "react";
import { graphql } from "gatsby";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import promotion from "../assets/images/partners/promotion.svg";
import PartnersAdvantages from "../components/partners/components/advantages";
import { PARTNERS_ADVANTAGES } from "../helpers/partners.config";
import HowToStart from "../components/partners/components/how-to-start";
import icon from "../assets/images/icon--white.svg";
import IncomeSlider from "../components/partners/components/income-slider";
import { REGISTRATION_LINK } from "../helpers/constants";

const PartnersPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-partners-title")} />
      <TopMarketPromotion
        className="partners-page-promotion"
        image={promotion}
        btnClassName={cn("button-link--ghost")}
        btnTitle={t("partners_top-market-promo-btn")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="partners_top-market-promo-text"
          wordsToHighlight="partners_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
      <IncomeSlider />
      <PartnersAdvantages
        title={
          <HighlightedLocalizationText
            localizationText="partners_advantages-title"
            wordsToHighlight="partners_advantages-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        advantages={PARTNERS_ADVANTAGES}
      />
      <HowToStart />
      <TopMarketPromotion
        className="partners-page-bottom-promotion"
        image={icon}
      >
        <HighlightedLocalizationText
          localizationText="partners_top-market-bot-promo-text"
          wordsToHighlight="partners_top-market-bot-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
    </Layout>
  );
};

export default PartnersPage;

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
