import React from "react";
import "../../../assets/styles/index.scss";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";
import { MarketingContextProvider } from "../../../context/marketing-context";
import { CookieProvider } from "../../../context/cookie-context";
import { SearchProvider } from "../../../context/search-context";
import { NotificationStripeProvider } from "../../../context/notification-stripe-context";
import { TradingProvider } from "../../../context/trading-context";
import { CommonProvider } from "../../../context/common-context";

const Layout = ({ children }) => {
  return (
    <ClientResolverProvider>
      <CookieProvider>
        <MarketingContextProvider>
          <LanguageProvider>
            <CommonProvider>
              <SearchProvider>
                <NotificationStripeProvider>
                  <TradingProvider>{children}</TradingProvider>
                </NotificationStripeProvider>
              </SearchProvider>
            </CommonProvider>
          </LanguageProvider>
        </MarketingContextProvider>
      </CookieProvider>
    </ClientResolverProvider>
  );
};

export default Layout;
