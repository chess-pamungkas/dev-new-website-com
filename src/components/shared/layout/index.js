import React, { useContext, useEffect, useRef, useState } from "react";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";
import { MarketingContextProvider } from "../../../context/marketing-context";
import { CookieProvider } from "../../../context/cookie-context";
import { SearchProvider } from "../../../context/search-context";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import Footer from "../../footer";
import { CookiesPopup } from "../../cookies-popup";
import { NotificationStripeProvider } from "../../../context/notification-stripe-context";
import { TradingProvider } from "../../../context/trading-context";
import CommonContext, { CommonProvider } from "../../../context/common-context";

const Layout = ({
  children,
  isShowFooter = true,
  isSearchBarAttached = true,
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <CommonProvider>
    <ClientResolverProvider>
      <CookieProvider>
        <MarketingContextProvider>
          <LanguageProvider>
            <SearchProvider>
              <NotificationStripeProvider>
                <TradingProvider>
                  {isLoaded && (
                    <>
                      <Header
                        isSearchBarAttached={isSearchBarAttached}
                      />
                      <section className="scroll-container">
                        <main id="main-container">
                          <CookiesPopup />
                          {children}
                        </main>
                        {isShowFooter && <Footer />}
                      </section>
                    </>
                  )}
                </TradingProvider>
              </NotificationStripeProvider>
            </SearchProvider>
          </LanguageProvider>
        </MarketingContextProvider>
      </CookieProvider>
    </ClientResolverProvider>
    </CommonProvider>
  );
};

export default Layout;
