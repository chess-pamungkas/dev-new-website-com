import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import Lottie from "lottie-react";
import { REGISTRATION_LINK } from "../../helpers/constants";
import ButtonLink from "../shared/button-link";
import TitlesAnimation from "../shared/titles-animation";
import {
  OPACITY_0,
  OPACITY_1,
} from "../../helpers/animation.config";
import { animated, easings, useSpring } from "react-spring";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection-observer";

const PromotionMarkets = ({
  className,
  animation,
  animationStyle,
  children,
  btnTitle,
}) => {
  const promoRef = useRef();
  const dataPromoRef = useIntersectionObserver(promoRef, {
    threshold: 0.3,
    freezeOnceVisible: false,
  },);

  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);

  const [chartAnimationStyles, chartAnimationApi] = useSpring(() => ({
    from: {
      backgroundPositionX: "0",
    },
    to: {
      backgroundPositionX: "200px",
    },
    delay: 2500,
    config: {
      duration: 1000,
      easing: easings.easeInOutCubic,
    },
    onRest: (result) => {
      if (result?.value?.backgroundPositionX) {
        chartAnimationApi.start({
          backgroundPositionX:
            +result.value.backgroundPositionX.replace("px", "") +
            200 +
            "px",
          delay: 2250,
          config: {
            easing: easings.easeInOutCubic,
            duration: 1000,
          },
        });
      }
    },
  }));

  useEffect(() => {
    if (dataPromoRef?.isIntersecting && !isAnimationStarted) {
      setIsAnimationStarted(true);
    }
  }, [promoRef, dataPromoRef]);

  const animationToStep1Config = {
    ...OPACITY_1,
    top: "0",
    config: {
      duration: 500,
    },
  };

  const animationToStep2Config = {
    ...OPACITY_0,
    top: "40px",
    config: {
      duration: 500,
    },
    delay: 2500,
  };

  useEffect(() => {
    if (isAnimationStarted && isAnimationFinished) {
      chartAnimationApi.stop();
    }
  }, [isAnimationStarted, isAnimationFinished, children]);

  return (
    <section className={cn("promotion-markets", className)} ref={promoRef}>
      <div className="promotion-markets__images">
        {isAnimationStarted && (
          <animated.div
            className="promotion-markets__chart"
            style={chartAnimationStyles}
          />
        )}
        <Lottie className="promotion-markets__svg" animationData={animation} style={animationStyle} />
      </div>

      <div className="promotion-markets__content">
        <h2 className="promotion-markets__title">
          {isAnimationStarted && (
            <TitlesAnimation
              isChildrenAnimation
              isAnimationFinished={isAnimationFinished}
              setIsAnimationFinished={setIsAnimationFinished}
              animationToStep1Config={animationToStep1Config}
              animationToStep2Config={animationToStep2Config}
            >
              {children}
            </TitlesAnimation>
          )}
        </h2>

        <ButtonLink
          link={REGISTRATION_LINK}
          className="promotion-markets__btn button-link button-link--red"
        >
          {btnTitle}
        </ButtonLink>
      </div>
    </section>
  );
};

export default PromotionMarkets;
