import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import HelpCenter from "../components/help-center";

const FaqPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Seo title={t("page-faq-title")} />
      <HelpCenter />
    </>
  );
};

export default FaqPage;

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
