import React from "react";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import { INDICES_TEXT } from "../helpers/top-market-texts";
import Footer from "../components/footer";
import Layout from "../components/shared/layout";

const IndicesPage = () => {
  return (
    <Layout>
      <section className="scroll-container">
        <main>
          <TopMarket
            title="Indices"
            image={image}
            btn1Title="Try our demo account"
            link1={REGISTRATION_LINK}
            btn2Title="Start trading FX now"
            link2={REGISTRATION_LINK}
          >
            {INDICES_TEXT}
          </TopMarket>
        </main>
        <Footer />
      </section>
    </Layout>
  );
};

export default IndicesPage;

export const Head = () => <title>Oqtima Indices</title>;
