import React, { useEffect, useRef, useState } from "react";
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

const Layout = ({
  children,
  isShowFooter = true,
  setHeaderRef,
  isSearchBarAttached = true,
}) => {
  const { width } = useWindowSize();
  const [sectionOptions, setSectionOptions] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const headerRef = useRef();

  useEffect(() => {
    setScrollHeight(
      (sectionOptions?.isCysecNotification ||
        sectionOptions?.isCysecRedirect) &&
        headerRef?.current?.offsetHeight
        ? headerRef?.current?.offsetHeight + "px"
        : null
    );
  }, [headerRef, sectionOptions, width]);

  useEffect(() => {
    if (headerRef && setHeaderRef) {
      setHeaderRef(headerRef);
    }
  }, [headerRef, setHeaderRef]);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
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
                        headerRef={headerRef}
                        setSectionOptions={setSectionOptions}
                        isSearchBarAttached={isSearchBarAttached}
                      />
                      <section className="scroll-container">
                        <main
                          style={{
                            marginTop: scrollHeight,
                          }}
                        >
                          <CookiesPopup
                            isCysecNotification={
                              sectionOptions?.isCysecNotification
                            }
                          />
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
  );
};

export default Layout;
