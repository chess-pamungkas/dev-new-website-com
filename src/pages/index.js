import React, {useRef} from "react";
import {graphql} from "gatsby";
import {useTranslation} from "gatsby-plugin-react-i18next";
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
import {REGISTRATION_LINK} from "../helpers/constants";
import Layout from "../components/shared/layout";
import {useIntersectionObserver} from "../helpers/hooks/use-intersection-observer";
import {useSpring} from "react-spring";
import {
    INTERSECTION_OBSERVER_CONFIG,
    OPACITY_0,
    OPACITY_1,
    SPRING_CONFIG_BG,
    SPRING_CONFIG_TEXT,
} from "../helpers/animation.config";
import {useWindowSize} from "../helpers/hooks/use-window-size";
import Seo from "../components/shared/seo";
import HighlightedLocalizationText from "../components/shared/highlighted-localization-text";

const IndexPage = () => {
  const { t } = useTranslation();
  const { isTablet } = useWindowSize();
  const INTERSECTION_RATIO = isTablet ? 0.4 : 0.7;
  const promo1Ref = useRef();
  const promo2Ref = useRef();
  const promo3Ref = useRef();
  const promo4Ref = useRef();

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

  const animation1BgRight = useSpring({
    ...SPRING_CONFIG_BG,
    ...(dataPromo2Ref?.isIntersecting &&
    dataPromo2Ref?.intersectionRatio > INTERSECTION_RATIO
      ? {
          from: { left: "100%" },
          to: { left: "0" },
        }
      : {
          from: { left: "0" },
          to: { left: "100%" },
        }),
  });

  const animation2BgLeft = useSpring({
    ...SPRING_CONFIG_BG,
    ...(dataPromo2Ref?.isIntersecting &&
    dataPromo2Ref?.intersectionRatio > INTERSECTION_RATIO
      ? {
          from: { left: "0" },
          to: { left: "-100%" },
        }
      : {
          from: { left: !dataPromo3Ref?.isIntersecting ? "-100%" : "-100%" },
          to: { left: !dataPromo3Ref?.isIntersecting ? "0" : "-200%" },
        }),
  });

  const animation2BgRight = useSpring({
    ...SPRING_CONFIG_BG,
    ...(dataPromo3Ref?.isIntersecting &&
    dataPromo3Ref?.intersectionRatio > INTERSECTION_RATIO
      ? {
          from: { left: "100%" },
          to: { left: "0" },
        }
      : {
          from: { left: "0" },
          to: { left: "100%" },
        }),
  });

  const animation3BgRight = useSpring({
    ...SPRING_CONFIG_BG,
    ...(dataPromo3Ref?.isIntersecting &&
    dataPromo3Ref?.intersectionRatio > INTERSECTION_RATIO
      ? {
          from: { left: "0" },
          to: { left: "-100%" },
        }
      : {
          from: { left: "-100%" },
          to: { left: "0" },
        }),
  });

  return (
    <Layout>
      <Seo title={t("page-main-title")} />
      <MainPromotion />
      <TradingTicker />
      <TradeWithPromotion />
      <Promotion
        className="promotion1"
        sectionRef={promo1Ref}
        animationRight={animation1BgRight}
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
        animationRight={animation2BgRight}
        animationLeft={animation2BgLeft}
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
        animationRight={animation3BgRight}
        sectionRef={promo3Ref}
        image={promo3}
        btnTitle={t("index_promotion3-btn-text")}
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
      <Performance />
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
