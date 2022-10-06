import React, { useEffect, useRef, useState } from "react";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import Promotion from "../../promotion";
import cn from "classnames";
import promo1 from "../../../assets/images/promotions/promo1.svg";
import {
  REGISTRATION_LINK,
  WITHDRAWAL_PAGE_LINK,
} from "../../../helpers/constants";
import promo2 from "../../../assets/images/promotions/promo2.svg";
import promo3 from "../../../assets/images/promotions/promo3.svg";
import TradingTools from "../../trading-tools";
import promo4 from "../../../assets/images/promotions/promo4.svg";
import TradeWithPromotion from "../../trade-with-promotion";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import { useIntersectionObserver } from "../../../helpers/hooks/use-intersection-observer";
import {
  BACKGROUND_ANIMATION_DURATION,
  INTERSECTION_OBSERVER_CONFIG,
  OPACITY_0,
  OPACITY_1,
  SPRING_CONFIG_TEXT,
  TEXT_PROMO_INTERSECTION_LOW_HEIGHT,
} from "../../../helpers/animation.config";
import { useSpring } from "react-spring";
import { usePromotionAnimation } from "../../promotion/use-promotion-animation";
import { scrollTo } from "../../../helpers/scroll-to";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";

const PromotionContent = ({ headerRef }) => {
  const { t } = useTranslation();
  const { isMobile, height } = useWindowSize();
  const { sitePostfix } = useEntityPostfix();

  const [isTradePromoScrolled, setIsTradePromoScrolled] = useState(false);
  const [isPromo1Scrolled, setIsPromo1Scrolled] = useState(false);
  const [isPromo2Scrolled, setIsPromo2Scrolled] = useState(false);
  const [isPromo3Scrolled, setIsPromo3Scrolled] = useState(false);

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
    height < TEXT_PROMO_INTERSECTION_LOW_HEIGHT
      ? INTERSECTION_OBSERVER_CONFIG.lowHeightTextPromo4
      : INTERSECTION_OBSERVER_CONFIG.textPromo4
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
    <>
      <TradeWithPromotion sectionRef={tradePromoRef} />
      <Promotion
        className={cn("promotion1", {
          "promotion--parallax-bg": !isMobile,
        })}
        sectionRef={promo1Ref}
        bgAnimationConfig={isMobile ? null : bgAnimationConfig}
        image={promo1}
        btnTitle={t("index_promotion1-btn-text")}
        link={WITHDRAWAL_PAGE_LINK}
        isRedPalette
      >
        <HighlightedLocalizationText
          localizationText={t(`index_promotion1-text${sitePostfix}`)}
          wordsToHighlight={t(`promotion1-text-accent${sitePostfix}`)}
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
    </>
  );
};

export default PromotionContent;
