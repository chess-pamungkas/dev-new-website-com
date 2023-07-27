import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import Mt4WebTraderLink from "../components/mt4-webtrader";
import CommonContext from "../context/common-context";
import PageLayout from "../components/shared/page-layout";

const MT4WebTraderPage = () => {
  const { setIsSearchBarAttached } = useContext(CommonContext);

  useEffect(() => {
    setIsSearchBarAttached(false);

    return () => setIsSearchBarAttached(true);
  }, []);

  return (
    <PageLayout>
      <Seo title={"MT4 Web Trader"} description={"need description"} />
      <Mt4WebTraderLink />
    </PageLayout>
  );
};

export default MT4WebTraderPage;

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
