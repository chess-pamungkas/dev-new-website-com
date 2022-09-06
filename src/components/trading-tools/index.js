import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { PLATFORMS } from "../../helpers/config";
import PlatformBlock from "./components/platform-block";
import ButtonLink from "../shared/button-link";
import DeviceBlock from "./components/device-block";
import { REGISTRATION_LINK } from "../../helpers/constants";
import { useTrail } from "react-spring";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection-observer";
import HighlightedLocalizationText from "../shared/highlighted-localization-text";

const TradingTools = ({ className }) => {
  const { t } = useTranslation();
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
              <PlatformBlock
                key={`platform-${Object.values(PLATFORMS)[i].title}`}
                icon={Object.values(PLATFORMS)[i].icon}
                title={t(Object.values(PLATFORMS)[i].title)}
                animationStyle={styles}
              />
            );
          })}
        </div>
        <DeviceBlock
          className="trading-tools__img-wrapper device-block--animated"
          isAnimationStarted={isAnimationStarted}
        />
        <h2 className="trading-tools__title" ref={containerRef}>
          <HighlightedLocalizationText
            localizationText="index_trading-tools-title"
            wordsToHighlight="trading-tools-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </h2>
        <ButtonLink link={REGISTRATION_LINK} className="trading-tools__btn">
          {t("index_trading-tools-btn-text")}
        </ButtonLink>
      </div>
    </section>
  );
};

export default TradingTools;
