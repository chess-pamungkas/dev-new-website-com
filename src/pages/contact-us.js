import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/shared/seo";
import TopMarket from "../components/top-market";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import image from "../assets/images/about-pages/contact-us.svg";
import ContactUs from "../components/contact-us";
import PageLayout from "../components/shared/page-layout";

const ContactUsPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo title={t("page-contact-title")} />
      <TopMarket
        title={
          <HighlightedLocalizationText
            localizationText="contact-us_top-market-title"
            wordsToHighlight="contact-us_top-market-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-white"
          />
        }
        image={image}
      >
        <HighlightedLocalizationText
          localizationText="contact-us_top-market-promo-text"
          wordsToHighlight="contact-us-top-market-promo-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </TopMarket>
      <ContactUs />
    </PageLayout>
  );
};

export default ContactUsPage;

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
