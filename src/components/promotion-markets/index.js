import React from "react";
import cn from "classnames";
import { REGISTRATION_LINK } from "../../helpers/constants";
import ButtonLink from "../shared/button-link";

const PromotionMarkets = ({ className, imageSrc, promoText }) => {
  return (
    <section className={cn("promotion-markets", className)}>
      <div className="promotion-markets__images">
        <div className="promotion-markets__chart"></div>
        <img
          src={imageSrc}
          alt=""
          className="promotion-markets__icon"
        />
      </div>      
      
      <div className="promotion-markets__content">
        <h2 className="promotion-markets__title">
          {promoText}
        </h2>

        <ButtonLink
          link={REGISTRATION_LINK}
          className="promotion-markets__btn button-link button-link--red"
        >
          Start Now
        </ButtonLink>
      </div>
    </section>
  );
};

export default PromotionMarkets;
