import React from "react";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";

const Layout = ({ children, headerRef, setSectionOptions }) => {
  return (
    <ClientResolverProvider>
      <LanguageProvider>
        <Header headerRef={headerRef} setSectionOptions={setSectionOptions} />

        {children}
      </LanguageProvider>
    </ClientResolverProvider>
  );
};

export default Layout;
