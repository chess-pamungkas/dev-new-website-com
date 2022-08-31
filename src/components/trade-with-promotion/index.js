import React, { useRef, useContext } from "react";
import cn from "classnames";
import { animated } from "react-spring";
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
import { MarketingContext } from "../../context/marketing-context";
import {
  SECT2_GROUP1_DEFAULT,
  SECT2_GROUP2_DEFAULT,
  SECT2_TEXT_SEQUENCES,
} from "../../helpers/marketing.config";
import {
  getSect2TextSequence,
  transformParamToKey,
} from "../../helpers/services/marketing-service";
import {useIntersectionObserver} from "../../helpers/hooks/use-intersection-observer";
import {
  INTERSECTION_OBSERVER_CONFIG,
  TWP_ICONS_INITIAL_SHIFT
} from "../../helpers/animation.config";
import { useSectionAnimation } from "./use-section-animation";

const TradeWithPromotion = ({ className, sectionRef }) => {
  const typingContainerRef = useRef();
  
  const sectionIntersectionRef = useIntersectionObserver(
    sectionRef,
    INTERSECTION_OBSERVER_CONFIG.TWPSection,
  );
  const typingIntersectionRef = useIntersectionObserver(typingContainerRef, {
    freezeOnceVisible: true,
  });

  const { sect2 } = useContext(MarketingContext);

  const content = SECT2_TEXT_SEQUENCES[transformParamToKey(sect2)];

  const titles = content
    ? getSect2TextSequence(content?.group1, content?.group2)
    : getSect2TextSequence(SECT2_GROUP1_DEFAULT, SECT2_GROUP2_DEFAULT);

  const icons = content ? content.symbols : [];

  const sectionAnimation1 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.logo1
  );
  const sectionAnimation2 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.logo2
  );
  const sectionAnimation3 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.logo3
  );
  const sectionAnimation4 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.netflix
  );
  const sectionAnimation5 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.tesla
  );
  const sectionAnimation6 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.airbnb
  );
  const sectionAnimation7 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.meta
  );
  const sectionAnimation8 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.amazon
  );
  const sectionAnimation9 = useSectionAnimation(
    sectionIntersectionRef,
    TWP_ICONS_INITIAL_SHIFT.bitcoin
  );

  return (
    <section className={cn("trade-with-promotion", className)} ref={sectionRef}>
      <animated.img
        style={sectionAnimation1}
        src={icons.length > 0 && icons[0] ? icons[0] : logoIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--dynamic-logo-1"
        )}
      />
      <animated.img
        style={sectionAnimation2}
        src={icons.length > 0 && icons[1] ? icons[1] : appleIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--dynamic-logo-2"
        )}
      />
      <animated.img
        style={sectionAnimation3}
        src={icons.length > 0 && icons[2] ? icons[2] : rippleIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--dynamic-logo-3"
        )}
      />
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
      <animated.img
        style={sectionAnimation4}
        src={netflixIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--netflix"
        )}
      />
      <animated.img
        style={sectionAnimation5}
        src={teslaIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--tesla"
        )}
      />
      <animated.img
        style={sectionAnimation6}
        src={airbnbIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--airbnb"
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
      <animated.img
        style={sectionAnimation7}
        src={metaIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--meta"
        )}
      />
      <animated.img
        style={sectionAnimation8}
        src={amazonIcon}
        alt=""
        className={cn(
          "trade-with-promotion__icon",
          "trade-with-promotion__icon--amazon"
        )}
      />
      <animated.img
        style={sectionAnimation9}
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
        <div className="trade-with-promotion__input" ref={typingContainerRef}>
          <span className="trade-with-promotion__input-text">
            {typingIntersectionRef?.isIntersecting ? (
              <TypingAnimation keywords={titles} />
            ) : (
              titles[0]
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
