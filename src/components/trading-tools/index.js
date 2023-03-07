import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { FSA_PLATFORMS, CYSEC_PLATFORMS } from "../../helpers/config";
import PlatformBlock from "./components/platform-block";
import ButtonLink from "../shared/button-link";
import DeviceBlock from "./components/device-block";
import { DIR_LTR, DIR_RTL, GetRegistrationLink } from "../../helpers/constants";
import { useTrail } from "react-spring";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection-observer";
import HighlightedLocalizationText from "../shared/highlighted-localization-text";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { useEntityPostfix } from "../../helpers/use-entity-postfix";

const TradingTools = ({ className }) => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
  const containerRef = useRef();
  const intersectionRef = useIntersectionObserver(containerRef, {
    freezeOnceVisible: true,
  });
  const { isCySEC } = useEntityPostfix();
  const [platforms, setPlatforms] = useState([]);

  useEffect(() => {
    setPlatforms(isCySEC ? CYSEC_PLATFORMS : FSA_PLATFORMS);
  }, [isCySEC]);

  const [isAnimationStarted, setIsAnimationStarted] = useState(false);

  const platformIconTrail = useTrail(Object.values(platforms).length, {
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
    <section
      className={cn("trading-tools", className, {
        "trading-tools--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="trading-tools__wrapper">
        <div className="trading-tools__icon-wrapper">
          {platformIconTrail.map((styles, i) => {
            return (
              <PlatformBlock
                key={`platform-${Object.values(platforms)[i].title}`}
                icon={Object.values(platforms)[i].icon}
                title={t(Object.values(platforms)[i].title)}
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
            localizationText={
              isCySEC
                ? "index_trading-tools-title"
                : "index_trading-tools-title-fsa"
            }
            wordsToHighlight={
              isCySEC
                ? "trading-tools-title-accent"
                : "trading-tools-title-accent-fsa"
            }
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </h2>
        <ButtonLink link={GetRegistrationLink()} className="trading-tools__btn">
          {t("index_trading-tools-btn-text")}
        </ButtonLink>
      </div>
    </section>
  );
};

export default TradingTools;
