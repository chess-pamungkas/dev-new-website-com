import React from "react";
import "../assets/styles/index.scss";
import Header from "../components/header";
import MainPromotion from "../components/main-promotion";
import {ClientResolverProvider} from "../context/client-resolver-context/entity-resolver-context";
import Popup from "../components/popup"


const CryptoPage = () => {
  return (
    <>
    <ClientResolverProvider>
      <Header />
      <main>
        <Popup />
        <MainPromotion />
      </main>
    </ClientResolverProvider>
    </>
  );
};

export default CryptoPage;

export const Head = () => <title>Oqtima Crypto</title>;
