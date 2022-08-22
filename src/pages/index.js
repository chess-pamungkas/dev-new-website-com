import React from "react";
import ReactGA from "react-ga";
import "../assets/styles/index.scss";
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
import { ClientResolverProvider } from "../context/client-resolver-context";
import Popup from "../components/popup";
import Performance from "../components/performance";
import TradeWithPromotion from "../components/trade-with-promotion";
import { REGISTRATION_LINK } from "../helpers/constants";
import Footer from "../components/footer";
import { LanguageProvider } from "../context/language-context";

ReactGA.initialize(process.env.GATSBY_GA);

const IndexPage = () => {
  return (
    <ClientResolverProvider>
      <LanguageProvider>
        <Header />
        <section className="scroll-container">
          <main>
            <Popup />
            <MainPromotion />
            <TradingTicker />
            <TradeWithPromotion />
            <Promotion
              className="promotion1"
              image={promo1}
              btnTitle="See more"
              link={REGISTRATION_LINK}
              isRedPalette
            >
              {PROMO_TEXT_1}
            </Promotion>
            <Promotion
              className="promotion2"
              image={promo2}
              btnTitle="See more"
              link={REGISTRATION_LINK}
              isRedPalette
            >
              {PROMO_TEXT_2}
            </Promotion>
            <Promotion
              className="promotion3"
              image={promo3}
              btnTitle="See more"
              link={REGISTRATION_LINK}
            >
              {PROMO_TEXT_3}
            </Promotion>
            <TradingTools />
            <Promotion
              className="promotion4"
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
        </section>
      </LanguageProvider>
    </ClientResolverProvider>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;
