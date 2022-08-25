import React from "react";
import "../assets/styles/index.scss";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import { CRYPTO_TEXT } from "../helpers/top-market-texts";
import Layout from "../components/shared/layout";
import Footer from "../components/footer";

const CryptoPage = () => {
  return (
    <Layout>
      <section className="scroll-container">
        <main>
          <TopMarket
            title="You can now trade more than xxx crypto pairs!"
            image={image}
            btn1Title="Try our demo account"
            link1={REGISTRATION_LINK}
            btn2Title="Trade now crypto cfc"
            link2={REGISTRATION_LINK}
          >
            {CRYPTO_TEXT}
          </TopMarket>
        </main>
        <Footer />
      </section>
    </Layout>
  );
};

export default CryptoPage;

export const Head = () => <title>Oqtima Crypto</title>;
