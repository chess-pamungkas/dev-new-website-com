import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { PLATFORMS } from "../../helpers/config";
import PlatformBlock from "./components/platform-block";
import { TRADING_TOOLS_TITLE } from "../../helpers/promo-texts";
import ButtonLink from "../shared/button-link";
import DeviceBlock from "./components/device-block";
import { REGISTRATION_LINK } from "../../helpers/constants";
import { useTrail, animated } from "react-spring";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection-observer";

const TradingTools = ({ className }) => {
  const containerRef = useRef();
  const intersectionRef = useIntersectionObserver(containerRef, {
    freezeOnceVisible: true,
  });

  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  const platformIconTrail = useTrail(Object.values(PLATFORMS).length, {
    from: {
      position: "relative",
      bottom: "-40px",
      opacity: 0,
      config: {
        duration: 80,
      },
    },
    to: {
      bottom: isAnimationStarted ? "0" : "-40px",
      opacity: isAnimationStarted ? 1 : 0,
    },
    delay: 1500,
  });

  useEffect(() => {
    if (intersectionRef?.isIntersecting) {
      setIsAnimationStarted(true);
    }
  }, [intersectionRef]);

  return (
    <section className={cn("trading-tools", className)}>
      <div className="trading-tools__wrapper">
        <div className="trading-tools__icon-wrapper">
          {platformIconTrail.map((styles, i) => {
            return (
              <animated.span
                key={`platform-${Object.values(PLATFORMS)[i].title}`}
                style={styles}
              >
                <PlatformBlock
                  icon={Object.values(PLATFORMS)[i].icon}
                  title={Object.values(PLATFORMS)[i].title}
                />
              </animated.span>
            );
          })}
        </div>
        <DeviceBlock
          className="trading-tools__img-wrapper device-block--animated"
          isAnimationStarted={isAnimationStarted}
        />
        <h2 className="trading-tools__title" ref={containerRef}>
          {TRADING_TOOLS_TITLE}
        </h2>
        <ButtonLink link={REGISTRATION_LINK} className="trading-tools__btn">
          Create your account
        </ButtonLink>
      </div>
    </section>
  );
};

export default TradingTools;
