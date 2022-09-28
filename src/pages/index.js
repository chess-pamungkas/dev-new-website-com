import React, { useContext, useEffect, useRef, useState } from "react";
import { graphql } from "gatsby";
import { useTranslation } from "gatsby-plugin-react-i18next";
import "../assets/styles/index.scss";
import promo1 from "../assets/images/promotions/promo1.svg";
import promo2 from "../assets/images/promotions/promo2.svg";
import promo3 from "../assets/images/promotions/promo3.svg";
import promo4 from "../assets/images/promotions/promo4.svg";
import MainPromotion from "../components/main-promotion";
import Promotion from "../components/promotion";
import TradingTicker from "../components/trading-ticker";
import TradingTools from "../components/trading-tools";
import Performance from "../components/performance";
import TradeWithPromotion from "../components/trade-with-promotion";
import { REGISTRATION_LINK } from "../helpers/constants";
import Layout from "../components/shared/layout";
import { useIntersectionObserver } from "../helpers/hooks/use-intersection-observer";
import { useSpring } from "react-spring";
import {
  BACKGROUND_ANIMATION_DURATION,
  INTERSECTION_OBSERVER_CONFIG,
  OPACITY_0,
  OPACITY_1,
  SPRING_CONFIG_TEXT,
} from "../helpers/animation.config";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import cn from "classnames";
import { scrollTo } from "../helpers/scroll-to";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";
import { usePromotionAnimation } from "../components/promotion/use-promotion-animation";
import ClientResolverContext from "../context/client-resolver-context";
import entities from "../enums/entities";
import { CYSEC_ADVANTAGES, FSA_ADVANTAGES } from "../helpers/config";

const IndexPage = () => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const { currentEntity } = useContext(ClientResolverContext);

  const [isTradePromoScrolled, setIsTradePromoScrolled] = useState(false);
  const [isPromo1Scrolled, setIsPromo1Scrolled] = useState(false);
  const [isPromo2Scrolled, setIsPromo2Scrolled] = useState(false);
  const [isPromo3Scrolled, setIsPromo3Scrolled] = useState(false);
  const [headerRef, setHeaderRef] = useState(null);

  const tradePromoRef = useRef();
  const promo1Ref = useRef();
  const promo2Ref = useRef();
  const promo3Ref = useRef();
  const promo4Ref = useRef();

  const [advantages, setAdvantages] = useState([]);

  useEffect(() => {
    setAdvantages(
      currentEntity === entities.CYSEC ? CYSEC_ADVANTAGES : FSA_ADVANTAGES
    );
  }, [currentEntity]);

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

  const {
    isPromo12Bg,
    isPromo23Bg,
    isPromo32Bg,
    isPromo21Bg,
    tradePromoIntersectionRatio,
    promoIntersectionRatioToScroll,
  } = usePromotionAnimation(
    dataPromo1Ref,
    dataPromo2Ref,
    dataPromo3Ref,
    isPromo1Scrolled,
    isPromo2Scrolled,
    isPromo3Scrolled
  );

  useEffect(() => {
    if (
      dataTradePromoRef?.isIntersecting &&
      dataTradePromoRef?.intersectionRatio > tradePromoIntersectionRatio &&
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
  }, [
    isMobile,
    dataTradePromoRef,
    headerRef,
    isTradePromoScrolled,
    tradePromoIntersectionRatio,
  ]);

  useEffect(() => {
    if (
      dataPromo1Ref?.isIntersecting &&
      dataPromo1Ref?.intersectionRatio > promoIntersectionRatioToScroll &&
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
  }, [
    headerRef,
    dataPromo1Ref,
    isPromo1Scrolled,
    isTradePromoScrolled,
    isMobile,
    promoIntersectionRatioToScroll,
  ]);

  useEffect(() => {
    if (isMobile) {
      return;
    }

    if (isPromo12Bg) {
      scrollTo({
        ref: promo2Ref,
        headerRef,
        duration: BACKGROUND_ANIMATION_DURATION,
      });
      bgAnimationApi.start({
        backgroundPositionX: "50%",
        backgroundPositionY: headerRef?.current.clientHeight,
        config: { duration: BACKGROUND_ANIMATION_DURATION },
        onRest: () => {
          setIsPromo2Scrolled(true);
          setIsPromo3Scrolled(false);
        },
      });
    }

    if (isPromo23Bg) {
      scrollTo({
        ref: promo3Ref,
        headerRef,
        duration: BACKGROUND_ANIMATION_DURATION,
      });
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
      scrollTo({
        ref: promo2Ref,
        headerRef,
        duration: BACKGROUND_ANIMATION_DURATION,
      });
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
      scrollTo({
        ref: promo1Ref,
        headerRef,
        duration: BACKGROUND_ANIMATION_DURATION,
      });
      bgAnimationApi.start({
        backgroundPositionX: "0",
        backgroundPositionY: headerRef?.current.clientHeight,
        config: { duration: BACKGROUND_ANIMATION_DURATION },
        onRest: () => {
          setIsPromo2Scrolled(false);
          setIsPromo3Scrolled(false);
        },
      });
    }
  }, [
    isMobile,
    isPromo12Bg,
    isPromo23Bg,
    isPromo32Bg,
    isPromo21Bg,
    headerRef,
    bgAnimationApi,
  ]);

  return (
    <Layout setHeaderRef={setHeaderRef}>
      <Seo title={t("page-main-title")} />
      <MainPromotion />
      <TradingTicker />
      <TradeWithPromotion sectionRef={tradePromoRef} />
      <Promotion
        className={cn("promotion1", {
          "promotion--parallax-bg": !isMobile,
        })}
        sectionRef={promo1Ref}
        bgAnimationConfig={isMobile ? null : bgAnimationConfig}
        image={promo1}
        btnTitle={t("index_promotion1-btn-text")}
        link={REGISTRATION_LINK}
        isRedPalette
      >
        <HighlightedLocalizationText
          localizationText="index_promotion1-text"
          wordsToHighlight="promotion1-text-accent"
          primaryClassName="highlighted-in-white"
          accentClassName="highlighted-in-red"
        />
      </Promotion>
      <Promotion
        className="promotion2"
        sectionRef={promo2Ref}
        image={promo2}
        btnTitle={t("index_promotion2-btn-text")}
        link={REGISTRATION_LINK}
        isRedPalette
      >
        <HighlightedLocalizationText
          localizationText="index_promotion2-text"
          wordsToHighlight="promotion2-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-red"
        />
      </Promotion>
      <Promotion
        className="promotion3"
        sectionRef={promo3Ref}
        image={promo3}
        btnTitle={t("index_promotion2-btn-text")}
        link={REGISTRATION_LINK}
      >
        <HighlightedLocalizationText
          localizationText="index_promotion3-text"
          wordsToHighlight="promotion3-text-accent"
          primaryClassName="highlighted-in-black"
          accentClassName="highlighted-in-white"
        />
      </Promotion>
      <TradingTools />
      <Promotion
        className="promotion4"
        textAnimationConfig={textAnimation}
        sectionRef={promo4Ref}
        image={promo4}
        btnTitle={t("index_promotion4-btn-text")}
        link={REGISTRATION_LINK}
        isRedPalette
        isReverseOrder
      >
        <HighlightedLocalizationText
          localizationText="index_promotion4-text"
          wordsToHighlight="promotion4-text-accent"
          primaryClassName="highlighted-in-white"
          accentClassName="highlighted-in-red"
        >
          <span className="promotion__note">
            <HighlightedLocalizationText
              localizationText="index_promotion4-text-children-text"
              wordsToHighlight="promotion4-text-children-text-accent"
              primaryClassName="highlighted-in-white"
              accentClassName="highlighted-in-red"
            />
          </span>
        </HighlightedLocalizationText>
      </Promotion>
      <Performance
        title={
          <HighlightedLocalizationText
            localizationText="index_performance-title1"
            wordsToHighlight="performance-title1-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          >
            <br />
            <HighlightedLocalizationText
              localizationText="index_performance-title2"
              wordsToHighlight="performance-title2-accent"
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          </HighlightedLocalizationText>
        }
        advantages={advantages}
      />
    </Layout>
  );
};
export default IndexPage;

export const query = graphql`
  query ($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
