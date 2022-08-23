import React, { useRef, useContext } from "react";
import cn from "classnames";
import airbnbIcon from "../../assets/images/icons/companies/airbnb.svg";
import amazonIcon from "../../assets/images/icons/companies/amazon.svg";
import appleIcon from "../../assets/images/icons/companies/apple.svg";
import bitcoinIcon from "../../assets/images/icons/companies/bitcoin.svg";
import greyDot from "../../assets/images/icons/companies/grey_dot.svg";
import logoIcon from "../../assets/images/icons/companies/logo.svg";
import manIcon from "../../assets/images/icons/companies/man.svg";
import metaIcon from "../../assets/images/icons/companies/meta.svg";
import netflixIcon from "../../assets/images/icons/companies/netflix.svg";
import redDot from "../../assets/images/icons/companies/red_dot.svg";
import rippleIcon from "../../assets/images/icons/companies/ripple.svg";
import teslaIcon from "../../assets/images/icons/companies/tesla.svg";
import womanIcon from "../../assets/images/icons/companies/woman.svg";
import ButtonLink from "../shared/button-link";
import { REGISTRATION_LINK } from "../../helpers/constants";
import TypingAnimation from "../shared/typing-animation";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection";
import {MarketingContext} from "../../context/marketing-context";
import {SECT2_GROUP1_DEFAULT, SECT2_GROUP2_DEFAULT, SECT2_TEXT_SEQUENCES,} from "../../helpers/marketing.config";
import {getSect2TextSequence, transformParamToKey,} from "../../helpers/services/marketing-service";

const TradeWithPromotion = ({ className }) => {
  const containerRef = useRef();
  const intersectionRef = useIntersectionObserver(containerRef, {
    freezeOnceVisible: true,
  });

  const { sect2 } = useContext(MarketingContext);

  const content = SECT2_TEXT_SEQUENCES[transformParamToKey(sect2)];

  const title =
    getSect2TextSequence(content?.group1, content?.group2) ||
    getSect2TextSequence(SECT2_GROUP1_DEFAULT, SECT2_GROUP2_DEFAULT);

  return (
    <section className={cn("trade-with-promotion", className)}>
      <img
        src={manIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--man"
        )}
      />
      <img
        src={womanIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--woman"
        )}
      />
      <img
        src={netflixIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--netflix"
        )}
      />
      <img
        src={appleIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--apple"
        )}
      />
      <img
        src={rippleIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--ripple"
        )}
      />
      <img
        src={teslaIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--tesla"
        )}
      />
      <img
        src={airbnbIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--airbnb"
        )}
      />
      <img
        src={logoIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--logo"
        )}
      />
      <img
        src={greyDot}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--grey-dot"
        )}
      />
      <img
        src={redDot}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--red-dot"
        )}
      />
      <img
        src={metaIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--meta"
        )}
      />
      <img
        src={amazonIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--amazon"
        )}
      />
      <img
        src={bitcoinIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--bitcoin"
        )}
      />
      <div className="trade-with-promotion__wrapper">
        <h2 className="trade-with-promotion__title">
          Trade <span className="bold">now</span> with
        </h2>
        <div className="trade-with-promotion__input" ref={containerRef}>
          <span className="trade-with-promotion__input-text">
            {intersectionRef?.isIntersecting ? (
              <TypingAnimation
                keywords={title}
              />
            ) : (
              " "
            )}
          </span>
        </div>

        <div className="trade-with-promotion__promo">
          <div className="trade-with-promotion__block">
            <p className="trade-with-promotion__promo-text">
              More than XXXX assets to trade directly on mobile, desktop or
              tablet anywhere anytime
            </p>
          </div>
          <div className="trade-with-promotion__block">
            <div className="trade-with-promotion__btn-wrapper">
              <ButtonLink
                link={REGISTRATION_LINK}
                className="trade-with-promotion__btn"
              >
                Start now
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradeWithPromotion;
