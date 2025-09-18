import React, { useRef, useState } from "react";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import FeaturesIcon from "../../../../assets/images/icons/main-page/features-execution-excellence/features.svg";
import NavArrowLeft from "../../../../assets/images/icons/main-page/features-execution-excellence/nav-arrow-left.svg";
import NavArrowRight from "../../../../assets/images/icons/main-page/features-execution-excellence/nav-arrow-right.svg";
import AuditedQ2Icon from "../../../../assets/images/icons/main-page/features-execution-excellence/audited-Q2-2025.svg";
import MethodologyLinkIcon from "../../../../assets/images/icons/main-page/features-execution-excellence/methodology-link.svg";
import ZeroIcon from "../../../../assets/images/icons/main-page/features-execution-excellence/zero.svg";
import DataAuditedIcon from "../../../../assets/images/icons/main-page/features-execution-excellence/data-audited.svg";
import InstrumentsIcon from "../../../../assets/images/icons/main-page/features-execution-excellence/instruments.svg";
import BankLiquidityIcon from "../../../../assets/images/icons/main-page/features-execution-excellence/bank-liquidity.svg";
import BadgeMarkIcon from "../../../../assets/images/icons/main-page/badge-mark.svg";

const FeaturesExecutionExcellence = () => {
  const { t } = useTranslationWithVariables();
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardContainerRef = useRef(null);
  const visibleCards = 3;

  const features = [
    {
      icon: AuditedQ2Icon,
      badge: t("features-execution-excellence_feature1-badge"),
      value: t("features-execution-excellence_feature1-value"),
      description: t("features-execution-excellence_feature1-description"),
      style: "light",
      showBadges: true,
      showBadgeMark: true,
    },
    {
      icon: MethodologyLinkIcon,
      badge: t("features-execution-excellence_feature2-badge"),
      value: t("features-execution-excellence_feature2-value"),
      description: t("features-execution-excellence_feature2-description"),
      style: "dark",
      showBadges: true,
      showBadgeMark: true,
    },
    {
      icon: ZeroIcon,
      badge: t("features-execution-excellence_feature3-badge"),
      value: t("features-execution-excellence_feature3-value"),
      description: t("features-execution-excellence_feature3-description"),
      style: "light",
      showBadges: false,
      showBadgeMark: false,
    },
    {
      icon: DataAuditedIcon,
      badge: t("features-execution-excellence_feature4-badge"),
      value: t("features-execution-excellence_feature4-value"),
      description: t("features-execution-excellence_feature4-description"),
      style: "dark",
      showBadges: true,
      showBadgeMark: true,
    },
    {
      icon: InstrumentsIcon,
      badge: t("features-execution-excellence_feature5-badge"),
      value: t("features-execution-excellence_feature5-value"),
      description: t("features-execution-excellence_feature5-description"),
      style: "light",
      showBadges: false,
      showBadgeMark: false,
    },
    {
      icon: BankLiquidityIcon,
      badge: t("features-execution-excellence_feature6-badge"),
      value: t("features-execution-excellence_feature6-value"),
      description: t("features-execution-excellence_feature6-description"),
      style: "dark",
      showBadges: false,
      showBadgeMark: false,
    },
  ];

  const handleScroll = (direction) => {
    let newIndex = scrollIndex + direction;
    if (newIndex < 0) newIndex = 0;
    if (newIndex > features.length - visibleCards)
      newIndex = features.length - visibleCards;
    setScrollIndex(newIndex);
    if (cardContainerRef.current) {
      const cardWidth = cardContainerRef.current.firstChild.offsetWidth + 17; // 17px gap
      cardContainerRef.current.scrollTo({
        left: cardWidth * newIndex,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="features-component">
      <div className="features-component__header-row">
        <div className="features-component__header-col">
          <div className="features-component__badge-group">
            <img
              src={FeaturesIcon}
              alt={t("features-execution-excellence_badge-alt")}
              className="features-component__badge-icon"
            />
            <span className="features-component__badge-text">
              {t("features-execution-excellence_badge-alt")}
            </span>
          </div>
          <h2 className="features-component__title">
            {t("features-execution-excellence_title")}
          </h2>
          <div className="features-component__subtitle">
            {t("features-execution-excellence_subtitle")}
          </div>
        </div>
        <div className="features-component__nav">
          <button
            className="features-component__nav-btn"
            onClick={() => handleScroll(-1)}
            disabled={scrollIndex === 0}
            aria-label={t("features-execution-excellence_nav-left-aria")}
          >
            <span className="features-component__nav-bg" />
            <img
              src={NavArrowLeft}
              alt={t("features-execution-excellence_nav-left-alt")}
              className="features-component__nav-arrow"
            />
          </button>
          <button
            className="features-component__nav-btn"
            onClick={() => handleScroll(1)}
            disabled={scrollIndex >= features.length - visibleCards}
            aria-label={t("features-execution-excellence_nav-right-aria")}
          >
            <span className="features-component__nav-bg" />
            <img
              src={NavArrowRight}
              alt={t("features-execution-excellence_nav-right-alt")}
              className="features-component__nav-arrow"
            />
          </button>
        </div>
      </div>
      <div className="features-component__cards-row-wrapper">
        <div className="features-component__cards-row" ref={cardContainerRef}>
          {features.map((feature, idx) => (
            <div
              className={`features-component__card features-component__card--${feature.style}`}
              key={idx}
            >
              <img
                src={feature.icon}
                alt={t("features-execution-excellence_card-icon-alt")}
                className="features-component__card-icon"
              />
              <div className="features-component__card-content">
                {feature.showBadges ? (
                  <div className="features-component__card-badge">
                    {feature.showBadgeMark && (
                      <img
                        src={BadgeMarkIcon}
                        alt={t("features-execution-excellence_badge-mark-alt")}
                        className="features-component__badge-mark"
                      />
                    )}
                    <span>{feature.badge}</span>
                  </div>
                ) : (
                  <div className="features-component__card-badge features-component__card-badge--placeholder"></div>
                )}
                <div className="features-component__card-value">
                  {feature.value}
                </div>
                <div className="features-component__card-desc">
                  {feature.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesExecutionExcellence;
