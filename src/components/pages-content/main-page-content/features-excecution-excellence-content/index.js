import React, { useRef, useState } from "react";
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

const features = [
  {
    icon: AuditedQ2Icon,
    badge: "Audited Q2 2025",
    value: "99.8%",
    description: "Orders executed within 30ms",
    style: "light",
    showBadges: true,
    showBadgeMark: true,
  },
  {
    icon: MethodologyLinkIcon,
    badge: "Methodology Link",
    value: "98%",
    description: "Filled at requested price or better",
    style: "dark",
    showBadges: true,
    showBadgeMark: true,
  },
  {
    icon: ZeroIcon,
    badge: "Zero",
    value: "Zero",
    description: "Requotes guarantee",
    style: "light",
    showBadges: false,
    showBadgeMark: false,
  },
  {
    icon: DataAuditedIcon,
    badge: "Data audited 1 April 2025",
    value: "99.9%",
    description: "Platform uptime SLA",
    style: "dark",
    showBadges: true,
    showBadgeMark: true,
  },
  {
    icon: InstrumentsIcon,
    badge: "Instruments",
    value: "900+",
    description: "Instruments available",
    style: "light",
    showBadges: false,
    showBadgeMark: false,
  },
  {
    icon: BankLiquidityIcon,
    badge: "Tier-1",
    value: "Tier-1",
    description: "Bank liquidity providers",
    style: "dark",
    showBadges: false,
    showBadgeMark: false,
  },
];

const FeaturesExecutionExcellence = () => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const cardContainerRef = useRef(null);
  const visibleCards = 3;

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
              alt="Features"
              className="features-component__badge-icon"
            />
            <span className="features-component__badge-text">Features</span>
          </div>
          <h2 className="features-component__title">
            Execution Excellence & Market Access
          </h2>
          <div className="features-component__subtitle">
            Verified performance metrics and institutional-grade infrastructure
          </div>
        </div>
        <div className="features-component__nav">
          <button
            className="features-component__nav-btn"
            onClick={() => handleScroll(-1)}
            disabled={scrollIndex === 0}
            aria-label="Scroll left"
          >
            <span className="features-component__nav-bg" />
            <img
              src={NavArrowLeft}
              alt="Left"
              className="features-component__nav-arrow"
            />
          </button>
          <button
            className="features-component__nav-btn"
            onClick={() => handleScroll(1)}
            disabled={scrollIndex >= features.length - visibleCards}
            aria-label="Scroll right"
          >
            <span className="features-component__nav-bg" />
            <img
              src={NavArrowRight}
              alt="Right"
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
                alt=""
                className="features-component__card-icon"
              />
              <div className="features-component__card-content">
                {feature.showBadges ? (
                  <div className="features-component__card-badge">
                    {feature.showBadgeMark && (
                      <img
                        src={BadgeMarkIcon}
                        alt=""
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
