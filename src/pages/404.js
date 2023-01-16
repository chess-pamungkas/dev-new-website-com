import * as React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Seo from "../components/shared/seo";
import SystemInfoComponent from "../components/shared/system-info";
import image from "../assets/images/system-info/404.svg";
import Layout from "../components/shared/layout";
import { graphql } from "gatsby";
import NotFoundContent from "../components/pages-content/not-found-page-content";

const NotFoundPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo title={t("system-page-404-title")} />
      <NotFoundContent />
    </Layout>
  );
};

export default NotFoundPage;

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
