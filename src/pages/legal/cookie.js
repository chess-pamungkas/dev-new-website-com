import React from "react";
import { graphql } from "gatsby";
import "../../assets/styles/index.scss";
import Seo from "../../components/shared/seo";
import CookiePolicyContent from "../../components/pages-content/cookie-policy-page-content";

const CookiePolicyPage = () => {
  return (
    <>
      <Seo title={"Cookie Policy"} />
      <CookiePolicyContent />
    </>
  );
};

export default CookiePolicyPage;

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
