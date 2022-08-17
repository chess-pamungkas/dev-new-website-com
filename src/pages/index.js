import React, { useState } from "react";
import ReactGA from "react-ga";
import { LangugeContext } from '../helpers/contexts';
import { LANG_SELECT_OPTIONS } from '../helpers/config';
import "../assets/styles/index.scss";
import bgPromo1 from "../assets/images/bg/promo1.png";
import bgPromo2 from "../assets/images/bg/promo2.png";
import bgPromo3 from "../assets/images/bg/promo3.png";
import bgPromo4 from "../assets/images/bg/promo4.png";
import promo1 from "../assets/images/promotions/promo1.svg";
import promo2 from "../assets/images/promotions/promo2.svg";
import promo3 from "../assets/images/promotions/promo3.svg";
import promo4 from "../assets/images/promotions/promo4.svg";
import Header from "../components/header";
import MainPromotion from "../components/main-promotion";
import Promotion from "../components/promotion";
import {
  PROMO_TEXT_1,
  PROMO_TEXT_2,
  PROMO_TEXT_3,
  PROMO_TEXT_4,
} from "../helpers/promo-texts";
import TradingTicker from "../components/trading-ticker";
import TradingTools from "../components/trading-tools";
import { ClientResolverProvider } from "../context/client-resolver-context/entity-resolver-context";
import Popup from "../components/popup"
import Performance from "../components/performance";
import TradeWithPromotion from "../components/trade-with-promotion";
import { REGISTRATION_LINK } from "../helpers/constants";
import Footer from "../components/footer";

ReactGA.initialize(process.env.REACT_APP_GA);

const IndexPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(LANG_SELECT_OPTIONS[0]);

  return (
    <ClientResolverProvider>
      <LangugeContext.Provider
        value={{
          selectedLanguage,
          setSelectedLanguage
        }}
      >
        <Header />
        <main>
          <Popup />
          <MainPromotion />
          <TradingTicker />
          <TradeWithPromotion />
          <Promotion
            bgImage={bgPromo1}
            mobileBgColor="#1A1A1A"
            image={promo1}
            btnTitle="See more"
            link={REGISTRATION_LINK}
            isRedPalette
          >
            {PROMO_TEXT_1}
          </Promotion>
          <Promotion
            bgImage={bgPromo2}
            image={promo2}
            btnTitle="See more"
            link={REGISTRATION_LINK}
            isRedPalette
          >
            {PROMO_TEXT_2}
          </Promotion>
          <Promotion
            bgImage={bgPromo3}
            mobileBgColor="#FF4400"
            image={promo3}
            btnTitle="See more"
            link={REGISTRATION_LINK}
          >
            {PROMO_TEXT_3}
          </Promotion>
          <TradingTools />
          <Promotion
            bgImage={bgPromo4}
            image={promo4}
            btnTitle="Start copying"
            link={REGISTRATION_LINK}
            isRedPalette
            isReverseOrder
          >
            {PROMO_TEXT_4}
          </Promotion>
          <Performance />
        </main>
        <Footer />
      </LangugeContext.Provider>
    </ClientResolverProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;
