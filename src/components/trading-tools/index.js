import React, { useEffect, useRef, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { getPlatforms } from "../../helpers/config";
import PlatformBlock from "./components/platform-block";
import ButtonLink from "../shared/button-link";
import DeviceBlock from "./components/device-block";
import { DIR_LTR, DIR_RTL, GetLoginLink } from "../../helpers/constants";
import { useTrail } from "react-spring";
import { useIntersectionObserver } from "../../helpers/hooks/use-intersection-observer";
import HighlightedLocalizationText from "../shared/highlighted-localization-text";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { sitePostfix } from "../../helpers/entity-resolver";

const TradingTools = ({ className }) => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();
  const containerRef = useRef();
  const intersectionRef = useIntersectionObserver(containerRef, {
    freezeOnceVisible: true,
  });
  const platforms = getPlatforms();

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
            localizationText={`index_trading-tools-title${sitePostfix}`}
            wordsToHighlight={`trading-tools-title-accent${sitePostfix}`}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </h2>
        <ButtonLink link={GetLoginLink()} className="trading-tools__btn">
          {t("index_trading-tools-btn-text")}
        </ButtonLink>
      </div>
    </section>
  );
};

export default TradingTools;
