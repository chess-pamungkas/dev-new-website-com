import React, { useContext, useEffect } from "react";
import { graphql } from "gatsby";
import "../assets/styles/index.scss";
import Seo from "../components/shared/seo";
import WebTraderLink from "../components/mt5-webtrader";
import CommonContext from "../context/common-context";

const MT5WebTraderPage = () => {
  const { setIsSearchBarAttached } = useContext(CommonContext);

  useEffect(() => {
    setIsSearchBarAttached(false);

    return () => setIsSearchBarAttached(true);
  }, []);

  return (
    <>
      <Seo title={"MT5 Web Trader"} description={"need description"} />
      <WebTraderLink />
    </>
  );
};

export default MT5WebTraderPage;

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
