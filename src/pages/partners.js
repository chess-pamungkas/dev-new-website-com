import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import PartnersPageContent from "../components/pages-content/partners-page-content";
import PageLayout from "../components/shared/page-layout";

const PartnersPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo
        title={t("page-partners-title")}
        description={t("page-partners-description")}
      />
      <PartnersPageContent />
    </PageLayout>
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
