import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";
import { useTranslationWithVariables } from "../helpers/hooks/use-translation-with-vars";
import Seo from "../components/shared/seo";
import SearchPageContent from "../components/pages-content/search-page-content";
import CommonContext from "../context/common-context";

const SearchPage = () => {
  const { t } = useTranslationWithVariables();
  const { setIsSearchBarAttached } = useContext(CommonContext);

  useEffect(() => {
    setIsSearchBarAttached(false);

    return () => setIsSearchBarAttached(true);
  }, []);

  return (
    <>
      <Seo title={t("page-search-title")} />
      <SearchPageContent />
    </>
  );
};

export default SearchPage;

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
