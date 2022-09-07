import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import image from "../assets/images/about-pages/legal-banner.svg";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import indices from "../assets/images/top-markets/indices.jpg";

const LegalPage = () => {
  const { t } = useTranslation();
  const { isXL } = useWindowSize();

  return (
    <Layout>
      <Seo title={t("page-legal-title")} />
      <TopMarketPromotion
        className="legal-page-promotion"
        image={image}
        btnTitle={t("legal_top-market-promo-btn")}
        link="#legalDocuments"
      >
        <HighlightedLocalizationText
          localizationText="legal_top-market-promo-text"
          wordsToHighlight="legal_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName={isXL ? "highlighted-in-red" : "highlighted-in-white"}
        />
      </TopMarketPromotion>
      <TopMarketPromotion
        className="legal-page-esma"
        // TODO replace with the real image
        image={indices}
        btnTitle={t("legal_top-market-promo-btn2")}
        note={t("legal_top-market-promo-note")}
        link="#legalDocuments"
      >
        <HighlightedLocalizationText
          localizationText="legal_top-market-promo-text2"
          wordsToHighlight="legal_top-market-promo-text-accent2"
          primaryClassName="highlighted-in-black"
          accentClassName={"highlighted-in-red"}
        />
      </TopMarketPromotion>
    </Layout>
  );
};

export default LegalPage;

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
