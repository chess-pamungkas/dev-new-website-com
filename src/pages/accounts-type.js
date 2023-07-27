import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import AccountsTypePageContent from "../components/pages-content/accounts-type-page-content";
import PageLayout from "../components/shared/page-layout";

const AccountsTypePage = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Seo
        title={t("page-accounts-type-title")}
        description={t("page-accounts-type-description")}
      />
      <AccountsTypePageContent />
    </PageLayout>
  );
};

export default AccountsTypePage;

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
