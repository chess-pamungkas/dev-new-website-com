import React, { useRef } from "react";
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
import { useIntersectionObserver } from "../helpers/hooks/use-intersection-observer";
import { useSpring } from "react-spring";
import cn from "classnames";
import { ANIMATION_DURATION } from "../helpers/animation.config";

ReactGA.initialize(process.env.GATSBY_GA);

const IndexPage = () => {
  const promo1Ref = useRef();
  const promo2Ref = useRef();
  const promo3Ref = useRef();

  const data1Ref = useIntersectionObserver(promo1Ref, {});

  const data2Ref = useIntersectionObserver(promo2Ref, {});

  const data3Ref = useIntersectionObserver(promo3Ref, {});

  const animation1Config = useSpring({
    config: { duration: ANIMATION_DURATION },
    from: { left: "100%" },
    to: {
      left: data1Ref?.isIntersecting ? "0" : "100%",
    },
  });

  const animation2Config = useSpring({
    config: { duration: ANIMATION_DURATION },
    from: { left: "100%" },
    to: {
      left: data2Ref?.isIntersecting ? "0" : "100%",
    },
  });

  const animation3Config = useSpring({
    config: { duration: ANIMATION_DURATION },
    from: { left: "100%" },
    to: {
      left: data3Ref?.isIntersecting ? "0" : "100%",
    },
  });

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
              className={cn("promotion1")}
              animationConfig={animation1Config}
              triggerRef={promo1Ref}
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
