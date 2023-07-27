import React, { useEffect, useState } from "react";
import "../../../assets/styles/index.scss";
import Header from "../../header";
import Footer from "../../footer";
import { CookiesPopup } from "../../cookies-popup";
import MainContainer from "../main-container";

const PageLayout = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    isLoaded && (
      <>
        <Header />
        <CookiesPopup />
        <section className="scroll-container">
          <MainContainer>{children}</MainContainer>
          <Footer />
        </section>
      </>
    )
  );
};

export default PageLayout;
