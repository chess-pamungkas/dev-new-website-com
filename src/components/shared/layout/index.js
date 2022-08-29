import React from "react";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";
import { MarketingContextProvider } from "../../../context/marketing-context";
import { CookieProvider } from "../../../context/cookie-context";

const Layout = ({ children, headerRef, setSectionOptions }) => (
  <CookieProvider>
    <ClientResolverProvider>
      <MarketingContextProvider>
        <LanguageProvider>
          <Header headerRef={headerRef} setSectionOptions={setSectionOptions} />
          {children}
        </LanguageProvider>
      </MarketingContextProvider>
    </ClientResolverProvider>
  </CookieProvider>
);

export default Layout;
