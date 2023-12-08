import React from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import AccountsTypePageContent from "../components/pages-content/accounts-type-page-content";

const AccountsTypePage = () => {
  const { t } = useTranslationWithVariables();

  return (
    <>
      <Seo
        title={t("page-accounts-type-title")}
        description={t("page-accounts-type-description")}
      />
      <AccountsTypePageContent />
    </>
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
