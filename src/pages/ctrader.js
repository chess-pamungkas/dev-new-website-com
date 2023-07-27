import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import CtraderPageContent from "../components/pages-content/ctrader-page-content";
import PageLayout from "../components/shared/page-layout";

const CTraderPage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo
        title={t("page-ctrader-title")}
        description={t("page-ctrader-description")}
      />
      <CtraderPageContent />
    </PageLayout>
  );
};

export default CTraderPage;

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
