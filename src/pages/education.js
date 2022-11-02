import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/shared/seo";
import Layout from "../components/shared/layout";
import { graphql } from "gatsby";
import promotion from "../assets/images/education/promotion.svg";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import TopMarketPromotion from "../components/top-market-promotion";
import MainEducationVideo from "../components/education/components/main-education-video";
import Playlist from "../components/education/components/playlist";
import {VIDEOS} from "../helpers/education.config";

const EducationPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-education-title")} />
      <TopMarketPromotion
        className="education-page-promotion"
        image={promotion}
        note={
          <HighlightedLocalizationText
            localizationText="education_top-market-promo-note"
            wordsToHighlight="education_top-market-promo-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="education_top-market-promo-text"
          wordsToHighlight="education_top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarketPromotion>
      <MainEducationVideo />
      <Playlist playlist={VIDEOS} />
    </Layout>
  );
};

export default EducationPage;

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
