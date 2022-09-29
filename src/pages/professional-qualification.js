import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import SplitTextPromotion from "../components/split-text-promotion";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import promotion from "../assets/images/professional-qualification/promotion.svg";
import TopMarket from "../components/top-market";
import TopMarketLayout from "../components/top-market-layout";
import TableComponent from "../components/shared/table";
import {
  COLUMNS_PROFESSIONAL_QUALIFICATION,
  DATA_PROFESSIONAL_QUALIFICATION,
} from "../helpers/copy-trading.config";
import Performance from "../components/performance";
import { PROFESSIONAL_QUALIFICATION_ADVANTAGES } from "../helpers/config";
import TextBanner from "../components/text-banner";
import { LOGIN_LINK, REGISTRATION_LINK } from "../helpers/constants";

const ProfessionalQualificationPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("page-professional-qualification-title")} />
      <TopMarket
        className="top-market--professional-qualification"
        image={promotion}
        btn1Title={t("professional-qualification_top-market-btn")}
        link1="#eligibilityCriteria"
        isAnchorLink1
        title={
          <HighlightedLocalizationText
            localizationText="professional-qualification_top-market-text"
            wordsToHighlight="professional-qualification_top-market-text-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
      >
        <HighlightedLocalizationText
          localizationText="professional-qualification_top-market-note"
          wordsToHighlight="professional-qualification_top-market-note-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <Performance
        className="performance--professional-qualification"
        title={
          <HighlightedLocalizationText
            localizationText="professional-qualification_performance-title"
            wordsToHighlight="professional-qualification_performance-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
        btnTitle={t("professional-qualification_performance-btn")}
        link="#eligibilityCriteria"
        isAnchorLink
        advantages={PROFESSIONAL_QUALIFICATION_ADVANTAGES}
        note={
          <HighlightedLocalizationText
            localizationText="professional-qualification_performance-note"
            wordsToHighlight="professional-qualification_performance-note-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        }
      />
      <SplitTextPromotion
        title={t("professional-qualification_split-text-promotion-title")}
        className="split-text-promotion--professional-qualification"
        table={
          <TopMarketLayout className="top-market-layout--professional-qualification">
            <TableComponent
              data={DATA_PROFESSIONAL_QUALIFICATION}
              columns={COLUMNS_PROFESSIONAL_QUALIFICATION}
              className="professional-qualification-table"
            />
          </TopMarketLayout>
        }
      >
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text1"
            wordsToHighlight="professional-qualification_split-text-promotion-text1-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text2"
            wordsToHighlight="professional-qualification_split-text-promotion-text2-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text3"
            wordsToHighlight="professional-qualification_split-text-promotion-text3-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_split-text-promotion-text4"
            wordsToHighlight="professional-qualification_split-text-promotion-text4-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
      </SplitTextPromotion>
      <TextBanner
        title={
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-title"
            wordsToHighlight="professional-qualification_text-banner-title-accent"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-black"
          />
        }
        note={
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-note"
            wordsToHighlight="professional-qualification_text-banner-note-accent"
            primaryClassName="highlighted-in-white"
            accentClassName="highlighted-in-black"
          />
        }
        btnTitle1={t("professional-qualification_text-banner-btn1")}
        link1={REGISTRATION_LINK}
        btnTitle2={t("professional-qualification_text-banner-btn2")}
        link2={LOGIN_LINK}
        id="eligibilityCriteria"
      >
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-text1"
            wordsToHighlight="professional-qualification_text-banner-text1-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-text2"
            wordsToHighlight="professional-qualification_text-banner-text2-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </span>
        <span className="mocked-li">
          <HighlightedLocalizationText
            localizationText="professional-qualification_text-banner-text3"
            wordsToHighlight="professional-qualification_text-banner-text3-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        </span>
      </TextBanner>
    </Layout>
  );
};

export default ProfessionalQualificationPage;

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
