import React, { useEffect, useRef, useState } from "react";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import { ClientResolverProvider } from "../../../context/client-resolver-context";
import { LanguageProvider } from "../../../context/language-context";
import { MarketingContextProvider } from "../../../context/marketing-context";
import { CookieProvider } from "../../../context/cookie-context";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import Footer from "../../footer";

const Layout = ({ children, isShowFooter = true }) => {
  const headerRef = useRef();

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
            />
            <section
              className="scroll-container"
              style={{
                scrollPadding: scrollHeight,
              }}
            >
              <main
                style={{
                  marginTop: scrollHeight,
                }}
              >
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
