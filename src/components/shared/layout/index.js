import React, { useEffect, useState } from "react";
import "../../../assets/styles/index.scss";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";
import { MarketingContextProvider } from "../../../context/marketing-context";
import { CookieProvider } from "../../../context/cookie-context";
import { SearchProvider } from "../../../context/search-context";
import { CookiesPopup } from "../../cookies-popup";
import { NotificationStripeProvider } from "../../../context/notification-stripe-context";
import { TradingProvider } from "../../../context/trading-context";
import { CommonProvider } from "../../../context/common-context";
import Bookmark from "../../floating-button/BookmarkButton";
import MainContainer from "../main-container";
import Header from "../../header";
import Footer from "../../footer";
import useVersionCheck from "../../../helpers/hooks/useVersionCheck";

const Layout = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useVersionCheck();
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <ClientResolverProvider>
      <CookieProvider>
        <MarketingContextProvider>
          <LanguageProvider>
            <CommonProvider>
              <SearchProvider>
                <NotificationStripeProvider>
                  <TradingProvider>
                    {isLoaded && (
                      <>
                        <Header />
                        <CookiesPopup />
                        <section className="scroll-container">
                          <MainContainer>{children}</MainContainer>
                          <Footer />
                        </section>
                      </>
                    )}
                    <Bookmark />
                  </TradingProvider>
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
