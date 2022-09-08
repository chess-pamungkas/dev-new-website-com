import React from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Layout from "../components/shared/layout";
import Seo from "../components/shared/seo";
import SearchPageContent from "../components/search-page-content";

const SearchPage = () => {
  const { t } = useTranslation();

  return (
    <Layout isSearchBarAttached={false}>
      <Seo title={t("page-search-title")} />
      <SearchPageContent />
    </Layout>
  );
};

export default SearchPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: {language: {eq: $language}}) {
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
