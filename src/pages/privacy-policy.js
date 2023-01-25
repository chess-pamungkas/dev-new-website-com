import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import PrivacyPolicyContent from "../components/pages-content/privacy-policy-page-content";

const PrivacyPolicyPage = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      <Seo
        fsaTitle={"Privacy Policy"}
        cysecTitle={t("system-page-404-title")}
        fsaDescription={""}
        cysecDescription={""}
      />
      <PrivacyPolicyContent />
    </Layout>
  );
};

export default PrivacyPolicyPage;

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
