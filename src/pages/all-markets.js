import React from "react";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import { ALL_MARKET_TEXT } from "../helpers/top-market-texts";
import Layout from "../components/shared/layout";

const AllMarketsPage = () => {
  return (
    <Layout>
      <TopMarket
        title="All market overview"
        image={image}
        btn1Title="Try our demo account"
        link1={REGISTRATION_LINK}
        btn2Title="Start trading FX now"
        link2={REGISTRATION_LINK}
      >
        {ALL_MARKET_TEXT}
      </TopMarket>
    </Layout>
  );
};

export default AllMarketsPage;

export const Head = () => <title>Oqtima All Markets</title>;
