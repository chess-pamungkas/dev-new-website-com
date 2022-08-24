import React from "react";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";
import { MarketingContextProvider } from "../../../context/marketing-context";

const Layout = ({ children }) => (
  <ClientResolverProvider>
    <MarketingContextProvider>
      <LanguageProvider>
        <Header />
        {children}
      </LanguageProvider>
    </MarketingContextProvider>
  </ClientResolverProvider>
);

export default Layout;
