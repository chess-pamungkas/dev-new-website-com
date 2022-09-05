import React, { useEffect, useState } from "react";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";
import { MarketingContextProvider } from "../../../context/marketing-context";
import { CookieProvider } from "../../../context/cookie-context";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import Footer from "../../footer";
import { CookiesPopup } from "../../cookies-popup";
import { GDPRPopup } from "../../gdpr-popup";

const Layout = ({
  children,
  isShowFooter = true,
  headerRef,
  isSearchBarAttached = true
}) => {
  const { width } = useWindowSize();
  const [sectionOptions, setSectionOptions] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(null);

  useEffect(() => {
    setScrollHeight(
      (sectionOptions?.isCysecNotification ||
        sectionOptions?.isCysecRedirect) &&
        headerRef?.current?.offsetHeight
        ? headerRef?.current?.offsetHeight + "px"
        : null
    );
  }, [headerRef, sectionOptions, width]);

  return (
    <ClientResolverProvider>
      <CookieProvider>
        <MarketingContextProvider>
          <LanguageProvider>
            <Header
              headerRef={headerRef}
              setSectionOptions={setSectionOptions}
              isSearchBarAttached={isSearchBarAttached}
            />
            <section
              className="scroll-container"
            >
              <main
                style={{
                  marginTop: scrollHeight,
                }}
              >
                <CookiesPopup />
                <GDPRPopup />
                {children}
              </main>
              {isShowFooter && <Footer />}
            </section>
          </LanguageProvider>
        </MarketingContextProvider>
      </CookieProvider>
    </ClientResolverProvider>
  );
};

export default Layout;
