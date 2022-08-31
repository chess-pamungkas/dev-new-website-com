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
import Performance from "../components/performance";
import TradeWithPromotion from "../components/trade-with-promotion";
import { REGISTRATION_LINK } from "../helpers/constants";
import Layout from "../components/shared/layout";
import { useIntersectionObserver } from "../helpers/hooks/use-intersection-observer";
import { useSpring } from "react-spring";
import {
  INTERSECTION_OBSERVER_CONFIG,
  OPACITY_0,
  OPACITY_1,
  SPRING_CONFIG_TEXT,
  BACKGROUND_ANIMATION_DURATION,
  PROMO_INTERSECTION_RATIO_TO_REVERSE_TABLET,
  TRADE_PROMO_INTERSECTION_RATIO_XL,
  PROMO_INTERSECTION_RATIO_TO_SCROLL_XL,
  PROMO_INTERSECTION_RATIO_TO_REVERSE_XL,
  TRADE_PROMO_INTERSECTION_RATIO_LG,
  PROMO_INTERSECTION_RATIO_TO_SCROLL_LG,
  PROMO_INTERSECTION_RATIO_TO_REVERSE_LG,
  TRADE_PROMO_INTERSECTION_RATIO_TABLET,
  PROMO_INTERSECTION_RATIO_TO_SCROLL_TABLET
} from '../helpers/animation.config';
import { useWindowSize } from "../helpers/hooks/use-window-size";
import { CookiesPopup } from "../components/cookies-popup";
import { GDPRPopup } from "../components/gdpr-popup";
import cn from "classnames";
import { scrollTo } from "../helpers/scroll-to";

const IndexPage = () => {
  const headerRef = useRef();

  const [isTradePromoScrolled, setIsTradePromoScrolled] = useState(false);
  const [isPromo1Scrolled, setIsPromo1Scrolled] = useState(false);
  const [isPromo2Scrolled, setIsPromo2Scrolled] = useState(false);
  const [isPromo3Scrolled, setIsPromo3Scrolled] = useState(false);

  const { isMobile, isTablet, isLG, isXL } = useWindowSize();

  let TRADE_PROMO_INTERSECTION_RATIO;
  let PROMO_INTERSECTION_RATIO_TO_SCROLL;
  let PROMO_INTERSECTION_RATIO_TO_REVERSE;

  if (isXL) {
    TRADE_PROMO_INTERSECTION_RATIO = TRADE_PROMO_INTERSECTION_RATIO_XL;
    PROMO_INTERSECTION_RATIO_TO_SCROLL = PROMO_INTERSECTION_RATIO_TO_SCROLL_XL;
    PROMO_INTERSECTION_RATIO_TO_REVERSE = PROMO_INTERSECTION_RATIO_TO_REVERSE_XL;
  }

  if (isLG) {
    TRADE_PROMO_INTERSECTION_RATIO = TRADE_PROMO_INTERSECTION_RATIO_LG;
    PROMO_INTERSECTION_RATIO_TO_SCROLL = PROMO_INTERSECTION_RATIO_TO_SCROLL_LG;
    PROMO_INTERSECTION_RATIO_TO_REVERSE = PROMO_INTERSECTION_RATIO_TO_REVERSE_LG;
  }

  if (isTablet) {
    TRADE_PROMO_INTERSECTION_RATIO = TRADE_PROMO_INTERSECTION_RATIO_TABLET;
    PROMO_INTERSECTION_RATIO_TO_SCROLL = PROMO_INTERSECTION_RATIO_TO_SCROLL_TABLET;
    PROMO_INTERSECTION_RATIO_TO_REVERSE = PROMO_INTERSECTION_RATIO_TO_REVERSE_TABLET;
  }

  const tradePromoRef = useRef();
  const promo1Ref = useRef();
  const promo2Ref = useRef();
  const promo3Ref = useRef();
  const promo4Ref = useRef();

  const dataTradePromoRef = useIntersectionObserver(
    tradePromoRef,
    INTERSECTION_OBSERVER_CONFIG.tradePromo
  );

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

  const textAnimation = useSpring({
    ...SPRING_CONFIG_TEXT,
    from: OPACITY_0,
    to: dataPromo4Ref?.isIntersecting ? OPACITY_1 : OPACITY_0,
  });

  const [bgAnimationConfig, bgAnimationApi] = useSpring(() => ({
    from: { backgroundPositionX: "0" },
  }));

  useEffect(() => {
    if (
      dataTradePromoRef?.isIntersecting &&
      dataTradePromoRef?.intersectionRatio > TRADE_PROMO_INTERSECTION_RATIO &&
      !isTradePromoScrolled &&
      !isMobile
    ) {
      scrollTo({
        ref: tradePromoRef,
        headerRef,
        duration: BACKGROUND_ANIMATION_DURATION,
        callback: () => {
          setIsTradePromoScrolled(true);
        },
      });
    }
  }, [isMobile, dataTradePromoRef]);

  useEffect(() => {
    if (
      dataPromo1Ref?.isIntersecting &&
      dataPromo1Ref?.intersectionRatio > PROMO_INTERSECTION_RATIO_TO_SCROLL &&
      !isPromo1Scrolled &&
      isTradePromoScrolled &&
      !isMobile
    ) {
      scrollTo({
        ref: promo1Ref,
        headerRef,
        duration: BACKGROUND_ANIMATION_DURATION,
        callback: () => {
          setIsPromo1Scrolled(true);
        },
      });
    }
  }, [dataPromo1Ref, isMobile]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    const Promo1BgAnimation =
      dataPromo1Ref?.isIntersecting &&
      dataPromo1Ref?.intersectionRatio > PROMO_INTERSECTION_RATIO_TO_SCROLL;
    const Promo2BgAnimation =
      dataPromo2Ref?.isIntersecting &&
      dataPromo2Ref?.intersectionRatio > PROMO_INTERSECTION_RATIO_TO_SCROLL;
    const Promo3BgAnimation = dataPromo3Ref?.isIntersecting &&
      dataPromo3Ref?.intersectionRatio > PROMO_INTERSECTION_RATIO_TO_SCROLL;

    const isPromo12Bg =
      Promo1BgAnimation && Promo2BgAnimation && !isPromo2Scrolled;
    const isPromo23Bg =
      Promo2BgAnimation &&
      Promo3BgAnimation &&
      isPromo2Scrolled &&
      !isPromo3Scrolled;

    const isPromo32Bg =
      Promo3BgAnimation &&
      dataPromo2Ref?.isIntersecting &&
      dataPromo2Ref?.intersectionRatio > PROMO_INTERSECTION_RATIO_TO_REVERSE &&
      isPromo2Scrolled &&
      isPromo3Scrolled;

    const isPromo21Bg =
      dataPromo1Ref?.isIntersecting &&
      dataPromo1Ref?.intersectionRatio > PROMO_INTERSECTION_RATIO_TO_REVERSE &&
      isPromo1Scrolled &&
      isPromo2Scrolled;

    if (isPromo12Bg) {
      scrollTo({ ref: promo2Ref, headerRef, duration: BACKGROUND_ANIMATION_DURATION });
      bgAnimationApi.start({
        backgroundPositionX: "50%",
        backgroundPositionY: headerRef?.current.clientHeight,
        config: { duration: BACKGROUND_ANIMATION_DURATION },
        onRest: () => {
          setIsPromo2Scrolled(true);
        },
      });
    }

    if (isPromo23Bg) {
      scrollTo({ ref: promo3Ref, headerRef, duration: BACKGROUND_ANIMATION_DURATION });
      bgAnimationApi.start({
        backgroundPositionX: "100%",
        backgroundPositionY: headerRef?.current.clientHeight,
        config: { duration: BACKGROUND_ANIMATION_DURATION },
        onRest: () => {
          setIsPromo3Scrolled(true);
        },
      });
    }

    if (isPromo32Bg) {
      scrollTo({ ref: promo2Ref, headerRef, duration: BACKGROUND_ANIMATION_DURATION });
      bgAnimationApi.start({
        backgroundPositionX: "50%",
        backgroundPositionY: headerRef?.current.clientHeight,
        config: { duration: BACKGROUND_ANIMATION_DURATION },
        onRest: () => {
          setIsPromo3Scrolled(false);
        },
      });
    }

    if (isPromo21Bg) {
      scrollTo({ ref: promo1Ref, headerRef, duration: BACKGROUND_ANIMATION_DURATION });
      bgAnimationApi.start({
        backgroundPositionX: "0",
        backgroundPositionY: headerRef?.current.clientHeight,
        config: { duration: BACKGROUND_ANIMATION_DURATION },
        onRest: () => {
          setIsPromo2Scrolled(false);
        },
      });
    }
  }, [isMobile, dataPromo1Ref, dataPromo2Ref, dataPromo3Ref]);

  return (
    <Layout headerRef={headerRef}>
      <CookiesPopup />
      <GDPRPopup />
      <MainPromotion />
      <TradingTicker />
      <TradeWithPromotion sectionRef={tradePromoRef} />
      <Promotion
        className={cn("promotion1", {
          "promotion--parallax-bg": !isMobile
        })}
        sectionRef={promo1Ref}
        bgAnimationConfig={isMobile ? null : bgAnimationConfig}
        image={promo1}
        btnTitle="See more"
        link={REGISTRATION_LINK}
        isRedPalette
      >
        {PROMO_TEXT_1}
      </Promotion>
      <Promotion
        className="promotion2"
        sectionRef={promo2Ref}
        image={promo2}
        btnTitle="See more"
        link={REGISTRATION_LINK}
        isRedPalette
      >
        {PROMO_TEXT_2}
      </Promotion>
      <Promotion
        className="promotion3"
        sectionRef={promo3Ref}
        image={promo3}
        btnTitle="See more"
        link={REGISTRATION_LINK}
      >
        {PROMO_TEXT_3}
      </Promotion>
      <TradingTools />
      <Promotion
        className="promotion4"
        textAnimationConfig={textAnimation}
        sectionRef={promo4Ref}
        image={promo4}
        btnTitle="Start copying"
        link={REGISTRATION_LINK}
        isRedPalette
        isReverseOrder
      >
        {PROMO_TEXT_4}
      </Promotion>
      <Performance />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;
