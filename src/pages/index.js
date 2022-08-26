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
import Footer from "../components/footer";
import Layout from "../components/shared/layout";
import { useWindowSize } from "../helpers/hooks/use-window-size";
import cn from "classnames";

const IndexPage = () => {
  const headerRef = useRef();

  const { width } = useWindowSize();
  const [sectionOptions, setSectionOptions] = useState(null);
  const [scrollHeight, setScrollHeight] = useState(null);

  useEffect(() => {
    setScrollHeight(
      (sectionOptions?.isCysecNotification ||
        sectionOptions?.isCysecRedirect) &&
        headerRef?.current?.offsetHeight
        ? headerRef?.current?.offsetHeight + "px"
        : null
    );
  }, [headerRef, sectionOptions, width]);

  return (
    <Layout headerRef={headerRef} setSectionOptions={setSectionOptions}>
      <section
        className={cn("scroll-container")}
        style={{
          scrollPadding: scrollHeight,
        }}
      >
        <main style={{
          marginTop: scrollHeight,
        }}>
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
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;
