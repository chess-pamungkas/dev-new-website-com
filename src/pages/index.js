import React, { useRef } from "react";
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
import { ANIMATION_DURATION } from "../helpers/animation.config";


const IndexPage = () => {
  const promo1Ref = useRef();
  const promo2Ref = useRef();
  const promo3Ref = useRef();

  const data1Ref = useIntersectionObserver(promo1Ref, {});

  const data2Ref = useIntersectionObserver(promo2Ref, {});

  const data3Ref = useIntersectionObserver(promo3Ref, {});

  const animation1Config = useSpring({
    config: { duration: ANIMATION_DURATION },
    ...(data2Ref?.isIntersecting
        ? {
          from: { left: "0" },
          to: { left: "-100%" },
        }
        : {
          from: { left: data1Ref?.isIntersecting ? "100%" : "0" },
          to: {
            left: data1Ref?.isIntersecting ? "0" : "100%",
          },
        }),
  });

  const animation2Config = useSpring({
    config: { duration: ANIMATION_DURATION },
    ...(data3Ref?.isIntersecting
        ? {
          from: { left: "-100%" },
          to: { left: "-200%" },
        }
        : {
          from: { left: "0" },
          to: {
            left: data2Ref?.isIntersecting ? "-100%" : "0",
          },
        }),
  });

  const animation3Config = useSpring({
    config: { duration: ANIMATION_DURATION },
    from: { left: "0" },
    to: {
      left: data3Ref?.isIntersecting ? "-100%" : "0",
    },
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
            animationConfig={animation2Config}
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
            animationConfig={animation3Config}
            triggerRef={promo3Ref}
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
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;
