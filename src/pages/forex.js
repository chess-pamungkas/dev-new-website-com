import React from "react";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/forex.svg";
import { FOREX_TEXT } from "../helpers/top-market-texts";
import Footer from "../components/footer";
import Layout from "../components/shared/layout";
import Tabs from "../components/shared/tabs";
import TableComponent from "../components/shared/table";
import ButtonLink from "../components/shared/button-link";
import FAQ from "../components/faq";

const ForexPage = () => {
  const tabs = [
    {
      title: "For Standard Accounts",
      content: <TableComponent />,
    },
    {
      title: "For Micro Accounts",
      content: <></>,
    },
    {
      title: "For Swap Free Standard Accounts",
      content: <></>,
    },
    {
      title: "For Swap Free Micro Accounts",
      content: <></>,
    },
    {
      title: "For Swap Ultra Low Standard Accounts",
      content: <></>,
    },
    {
      title: "For Swap Ultra Low Micro Accounts",
      content: <></>,
    },
  ];

  return (
    <Layout>
      <section className="scroll-container">
        <main>
          <TopMarket
            title="Forex CFD"
            image={image}
            btn1Title="Try our demo account"
            link1={REGISTRATION_LINK}
            btn2Title="Start trading FX now"
            link2={REGISTRATION_LINK}
          >
            {FOREX_TEXT}
          </TopMarket>
          <Tabs tabList={tabs} />
          <ButtonLink className="button-link--red">Try Oqtima</ButtonLink>
          <FAQ />
        </main>
        <Footer />
      </section>
    </Layout>
  );
};

export default ForexPage;

export const Head = () => <title>Oqtima Forex</title>;
