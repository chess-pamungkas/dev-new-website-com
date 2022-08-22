import React from "react";
import "../assets/styles/index.scss";
import Header from "../components/header";
import {ClientResolverProvider} from "../context/client-resolver-context";
import Popup from "../components/popup";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import { CRYPTO_TEXT } from "../helpers/top-market-texts";

const CryptoPage = () => {
  return (
    <>
      <ClientResolverProvider>
        <Header />
        <main>
          <Popup />
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
      </ClientResolverProvider>
    </>
  );
};

export default CryptoPage;

export const Head = () => <title>Oqtima Crypto</title>;
