import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import Lottie from "lottie-react";
import { REGISTRATION_LINK } from "../../helpers/constants";
import ButtonLink from "../shared/button-link";
import {
  OPACITY_0,
  OPACITY_1,
  TITLES_ANIMATION_DEFAULT_FROM_CONFIG,
} from "../../helpers/animation.config";
import { animated, easings, useSpring } from "react-spring";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection-observer";
import { scrollTo } from "../../helpers/scroll-to";

const PromotionMarkets = ({
  className,
  animation,
  animationStyle,
  children,
  btnTitle,
}) => {
  let lastPageYOffset = window.pageYOffset;
  const promoRef = useRef();
  const scrollCount = children.length;

  const autoScrollPromoRef = useIntersectionObserver(promoRef, {
    threshold: 0.2,
    freezeOnceVisible: false,
  });

  const animationToStep1Config = {
    ...OPACITY_1,
    top: "0",
    config: {
      duration: 1000,
    },
  };

  const animationToStep2Config = {
    ...OPACITY_0,
    top: "40px",
    config: {
      duration: 1000,
    },
  };

  const [backgroundPositionX, setBackgroundPositionX] = useState(0);
  const [currentScroll, setCurrentScroll] = useState(0);
  const [currentTitle, setCurrentTitle] = useState(children[0]);
  const [isAnimationFinished, setIsAnimationFinished] = useState(false);
  const [isAnimationStarted, setIsAnimationStarted] = useState(false);
  const [isAnimationReady, setIsAnimationReady] = useState(true);
  const [isAnimationReverse, setIsAnimationReverse] = useState(false);

  const [chartAnimationStyles, chartAnimationApi] = useSpring(() => ({
    delay: 250,
    config: {
      duration: 1000,
      easing: easings.easeInOutCubic,
    },
  }));

  const [titleAnimationStyles, titleAnimationApi] = useSpring(() => ({}));

  useEffect(() => {
    if (autoScrollPromoRef?.isIntersecting && !isAnimationFinished) {
      scrollTo({
        ref:
          promoRef?.current.clientHeight > window.innerHeight
            ? promoRef?.current.offsetTop +
              promoRef?.current.clientHeight -
              window.innerHeight
            : promoRef,
        duration: 1000,
        callback: () => {
          setIsAnimationStarted(true);
        },
      });
    }
  }, [autoScrollPromoRef, isAnimationFinished]);

  useEffect(() => {
    if (currentScroll < children.length) {
      setBackgroundPositionX(
        backgroundPositionX + (isAnimationReverse ? -200 : 200)
      );
      setIsAnimationReady(false);

      titleAnimationApi.start({
        from: isAnimationReverse
          ? animationToStep1Config
          : animationToStep1Config,
        to: isAnimationReverse
          ? TITLES_ANIMATION_DEFAULT_FROM_CONFIG
          : animationToStep2Config,
        config: {
          duration: 500,
        },
        onRest: () => {
          setCurrentTitle(children[currentScroll]);

          titleAnimationApi.start({
            from: isAnimationReverse
              ? animationToStep2Config
              : TITLES_ANIMATION_DEFAULT_FROM_CONFIG,
            to: isAnimationReverse
              ? animationToStep1Config
              : animationToStep1Config,
            config: {
              duration: 500,
            },
            onRest: () => {
              setIsAnimationReady(true);
            },
          });
        },
      });
    }

    if (currentScroll === children.length) {
      setIsAnimationFinished(true);
    }
  }, [currentScroll]);

  useEffect(() => {
    const wheelHandler = (e) => {
      if (!isAnimationReady) {
        e.preventDefault();
        return;
      }

      if (e.deltaY > 0 && currentScroll < scrollCount) {
        setCurrentScroll(currentScroll + 1);
        setIsAnimationReverse(false);
        e.preventDefault();
      }

      if (e.deltaY < 0 && currentScroll > 0) {
        setCurrentScroll(currentScroll - 1);
        setIsAnimationReverse(true);
        e.preventDefault();
      }

      if (e.deltaY < 0 && currentScroll === 0) {
        setCurrentScroll(0);
        setIsAnimationStarted(false);
        setIsAnimationReverse(false);
        setIsAnimationFinished(false);
      }
    };

    const scrollHandler = (e) => {
      if (isAnimationReady && isAnimationStarted) {
        const event = document.createEvent("MouseEvents");
        event.initEvent("wheel", false, true);
        event.deltaY = lastPageYOffset - window.pageYOffset > 0 ? -120 : +120;
        if (promoRef.current) {
          promoRef.current.dispatchEvent(event);
          lastPageYOffset = window.pageYOffset;
        }
        e.preventDefault();
      }
    };

    const promoElement = promoRef.current;

    if (isAnimationStarted && !isAnimationFinished) {
      promoElement.addEventListener("wheel", wheelHandler);
      window.addEventListener("scroll", scrollHandler);
    }

    return () => {
      promoElement.removeEventListener("wheel", wheelHandler);
      window.removeEventListener("scroll", scrollHandler);
    };
  }, [
    backgroundPositionX,
    isAnimationFinished,
    isAnimationStarted,
    isAnimationReady,
    promoRef,
    scrollCount,
    setBackgroundPositionX,
  ]);

  useEffect(() => {
    if (isAnimationStarted) {
      chartAnimationApi.start({
        backgroundPositionX: `${backgroundPositionX}px`,
        config: {
          easing: easings.easeInOutCubic,
          duration: 1000,
        },
      });
    }
  }, [backgroundPositionX, chartAnimationApi, isAnimationStarted]);

  return (
    <section className={cn("promotion-markets", className)} ref={promoRef}>
      <div className="promotion-markets__images">
        <animated.div
          className="promotion-markets__chart"
          style={chartAnimationStyles}
        />
        <Lottie
          className="promotion-markets__svg"
          animationData={animation}
          style={animationStyle}
        />
      </div>

      <div className="promotion-markets__content">
        <h2 className="promotion-markets__title">
          <animated.div style={titleAnimationStyles}>
            {currentTitle}
          </animated.div>
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
