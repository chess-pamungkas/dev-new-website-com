import React from "react";
import "../assets/styles/index.scss";
import Header from "../components/header";
import {ClientResolverProvider} from "../context/client-resolver-context";
import Popup from "../components/popup";
import TopMarket from "../components/top-market";
import { REGISTRATION_LINK } from "../helpers/constants";
import image from "../assets/images/top-markets/cripto.svg";
import {COMMODITIES_TEXT, ENERGIES_TEXT, FOREX_TEXT, SHARES_TEXT} from "../helpers/top-market-texts";

const EnergiesPage = () => {
  return (
    <>
      <ClientResolverProvider>
        <Header />
        <main>
          <Popup />
          <TopMarket
            title="Energies"
            image={image}
            btn1Title="Try our demo account"
            link1={REGISTRATION_LINK}
            btn2Title="Start trading FX now"
            link2={REGISTRATION_LINK}
          >
            {ENERGIES_TEXT}
          </TopMarket>
        </main>
      </ClientResolverProvider>
    </>
  );
};

export default EnergiesPage;

export const Head = () => <title>Oqtima Energies</title>;
