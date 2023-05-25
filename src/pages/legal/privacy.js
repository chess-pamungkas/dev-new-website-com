import React from "react";
import { graphql } from "gatsby";
import "../../assets/styles/index.scss";
import Seo from "../../components/shared/seo";
import PrivacyPolicyContent from "../../components/pages-content/privacy-policy-page-content";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Seo title={"Privacy Policy"} />
      <PrivacyPolicyContent />
    </>
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
