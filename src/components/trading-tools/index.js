import React, { useState } from "react";
import cn from "classnames";
import { PLATFORMS } from "../../helpers/config";
import PlatformBlock from "./components/platform-block";
import { TRADING_TOOLS_TITLE } from "../../helpers/promo-texts";
import ButtonLink from "../shared/button-link";
import DeviceBlock from "./components/device-block";
import { REGISTRATION_LINK } from "../../helpers/constants";
import { useTrail, animated } from "react-spring";

const TradingTools = ({ className }) => {
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
      bottom: "0",
      opacity: 1,
    },
    delay: 2500,
  });

  setTimeout(() => {
    setIsAnimationStarted(true);
  }, 1000);

  return (
    <section className={cn("trading-tools", className)}>
      <div className="trading-tools__wrapper">
        <div className="trading-tools__icon-wrapper">
          {platformIconTrail.map((styles, i) => {
            return (
              <animated.span style={styles}>
                <PlatformBlock
                  key={`platform-${Object.values(PLATFORMS)[i].title}`}
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
        <h2 className="trading-tools__title">{TRADING_TOOLS_TITLE}</h2>
        <ButtonLink link={REGISTRATION_LINK} className="trading-tools__btn">
          Create your account
        </ButtonLink>
      </div>
    </section>
  );
};

export default TradingTools;
