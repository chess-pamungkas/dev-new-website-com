import React, { useEffect, useState, Suspense } from "react";
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
import VersionSentinel from "../../../helpers/VersionSentinel";
import { lazified } from "../../../helpers/lazified";
import LoadingSpinner from "../../loading-spinner";

const MainContainer = lazified(() => import("../main-container"));
const Header = lazified(() => import("../../header"));
const Footer = lazified(() => import("../../footer"));

const Layout = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <VersionSentinel />
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
    </Suspense>
  );
};

export default Layout;
