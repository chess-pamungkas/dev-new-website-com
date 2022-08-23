import React from "react";
import ReactGA from "react-ga";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";

ReactGA.initialize(process.env.GATSBY_GA);

const Layout = ({ children }) => (
  <ClientResolverProvider>
    <LanguageProvider>
      <Header />

      {children}
    </LanguageProvider>
  </ClientResolverProvider>
);

export default Layout;
