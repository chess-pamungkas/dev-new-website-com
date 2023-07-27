import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import ForexContent from "../components/pages-content/forex-content";
import PageLayout from "../components/shared/page-layout";

const ForexPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo
        title={t("page-forex-title")}
        description={t("page-forex-description")}
      />
      <ForexContent />
    </PageLayout>
  );
};

export default ForexPage;

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
