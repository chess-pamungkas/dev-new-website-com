import React, { useEffect, useRef, useState } from "react";
import "../assets/styles/index.scss";
import promo1 from "../assets/images/promotions/promo1.svg";
import promo2 from "../assets/images/promotions/promo2.svg";
import promo3 from "../assets/images/promotions/promo3.svg";
import promo4 from "../assets/images/promotions/promo4.svg";
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
import Popup from "../components/popup";
import Performance from "../components/performance";
import TradeWithPromotion from "../components/trade-with-promotion";
import { REGISTRATION_LINK } from "../helpers/constants";
import Footer from "../components/footer";
import Layout from "../components/shared/layout";
import { useIntersectionObserver } from "../helpers/hooks/use-intersection-observer";
import { useSpring } from "react-spring";
import {
  INTERSECTION_OBSERVER_CONFIG,
  LEFT_0,
  LEFT_100,
  LEFT_MINUS_100,
  LEFT_MINUS_200,
  OPACITY_0,
  OPACITY_1,
  SPRING_CONFIG_BG,
  SPRING_CONFIG_TEXT,
} from "../helpers/animation.config";

const IndexPage = () => {
  const [pageIsScrolled, setPageIsScrolled] = useState(false);
  const [isFirstScrolling, setIsFirstScrolling] = useState(true);

  const promo1Ref = useRef();
  const promo2Ref = useRef();
  const promo3Ref = useRef();
  const promo4Ref = useRef();
  const tradingToolsRef = useRef();

  const dataPromo1Ref = useIntersectionObserver(
    promo1Ref,
    INTERSECTION_OBSERVER_CONFIG.promo1
  );

  const dataPromo2Ref = useIntersectionObserver(
    promo2Ref,
    INTERSECTION_OBSERVER_CONFIG.promo2
  );

  const dataPromo3Ref = useIntersectionObserver(
    promo3Ref,
    INTERSECTION_OBSERVER_CONFIG.promo3
  );

  const dataPromo4Ref = useIntersectionObserver(
    promo4Ref,
    INTERSECTION_OBSERVER_CONFIG.textPromo4
  );

  const dataTradingToolsRef = useIntersectionObserver(
    tradingToolsRef,
    INTERSECTION_OBSERVER_CONFIG.tradingTools
  );

  useEffect(() => {
    if (dataTradingToolsRef?.isIntersecting && isFirstScrolling) {
      setIsFirstScrolling(false);
      setPageIsScrolled(true);
    }
  }, [dataTradingToolsRef, isFirstScrolling]);

  const animation1Config = useSpring({
    ...SPRING_CONFIG_BG,
    ...(dataPromo2Ref?.isIntersecting
      ? {
          from: LEFT_0,
          to: LEFT_MINUS_100,
        }
      : {
          from: dataPromo1Ref?.isIntersecting ? LEFT_100 : LEFT_0,
          to: dataPromo1Ref?.isIntersecting ? LEFT_0 : LEFT_100,
        }),
  });

  const animation2Config = useSpring({
    ...SPRING_CONFIG_BG,
    ...(dataPromo3Ref?.isIntersecting
      ? {
          from: LEFT_MINUS_100,
          to: LEFT_MINUS_200,
        }
      : {
          from: LEFT_0,
          to: dataPromo2Ref?.isIntersecting ? LEFT_MINUS_100 : LEFT_0,
        }),
  });

  const animation3Config = useSpring({
    ...SPRING_CONFIG_BG,
    from: LEFT_0,
    to: dataPromo3Ref?.isIntersecting ? LEFT_MINUS_100 : LEFT_0,
  });

  const animation4Config = useSpring({
    ...SPRING_CONFIG_TEXT,
    from: OPACITY_0,
    to: dataPromo4Ref?.isIntersecting ? OPACITY_1 : OPACITY_0,
  });

  return (
    <Layout>
      <section className="scroll-container">
        <main>
          <Popup />
          <MainPromotion />
          <TradingTicker />
          <TradeWithPromotion />
          <Promotion
            className="promotion1"
            animationConfig={pageIsScrolled ? LEFT_0 : animation1Config}
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
            animationConfig={pageIsScrolled ? LEFT_MINUS_100 : animation2Config}
            triggerRef={promo2Ref}
            image={promo2}
            btnTitle="See more"
            link={REGISTRATION_LINK}
            isRedPalette
          >
            {PROMO_TEXT_2}
          </Promotion>
          <Promotion
            className="promotion3"
            animationConfig={pageIsScrolled ? LEFT_MINUS_100 : animation3Config}
            triggerRef={promo3Ref}
            image={promo3}
            btnTitle="See more"
            link={REGISTRATION_LINK}
          >
            {PROMO_TEXT_3}
          </Promotion>
          <TradingTools sectionRef={tradingToolsRef} />
          <Promotion
            className="promotion4"
            textAnimationConfig={animation4Config}
            textTrigger={promo4Ref}
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
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;
