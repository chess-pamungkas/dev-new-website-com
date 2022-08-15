import * as React from "react";
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
import TradingTicker from '../components/trading-ticker';
import TradingTools from "../components/trading-tools";

const IndexPage = () => {
  return (
    <>
      <Header />
      <main>
        <MainPromotion />
        <TradingTicker />
        <Promotion
          bgImage={bgPromo1}
          image={promo1}
          btnTitle="See more"
          link={"/"}
          isRedPalette
        >
          {PROMO_TEXT_1}
        </Promotion>
        <Promotion
          bgImage={bgPromo2}
          image={promo2}
          btnTitle="See more"
          link={"/"}
          isRedPalette
        >
          {PROMO_TEXT_2}
        </Promotion>
        <Promotion
          bgImage={bgPromo3}
          image={promo3}
          btnTitle="See more"
          link={"/"}
        >
          {PROMO_TEXT_3}
        </Promotion>
        <TradingTools />
        <Promotion
          bgImage={bgPromo4}
          image={promo4}
          btnTitle="Start copying"
          link={"/"}
          isRedPalette
          isReverseOrder
        >
          {PROMO_TEXT_4}
        </Promotion>
      </main>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Oqtima trading page</title>;
