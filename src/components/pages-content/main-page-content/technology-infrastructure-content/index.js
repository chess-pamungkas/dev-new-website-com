import React from "react";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import BadgeSecurityIcon from "../../../../assets/images/icons/main-page/badge-security.svg";
import CircleMarkIcon from "../../../../assets/images/icons/circle-mark.svg";
import InfrastructureIcon from "../../../../assets/images/icons/main-page/technology-infrastructure/infrastructure.svg";
import TradingPlatformsIcon from "../../../../assets/images/icons/main-page/technology-infrastructure/trading-platforms.svg";
import AdvancedToolsIcon from "../../../../assets/images/icons/main-page/technology-infrastructure/advanced-tools.svg";

const TechnologyInfrastructureContent = () => {
  const { isMobile } = useWindowSize();

  const features = [
    {
      icon: InfrastructureIcon,
      title: "Infrastructure",
      features: [
        "Equinix servers NY & London",
        "Sub-millisecond execution",
        "99.9% uptime SLA",
        "FREE VPS servers available",
        "99.9% order success rate",
      ],
    },
    {
      icon: TradingPlatformsIcon,
      title: "Trading Platforms",
      features: [
        "MetaTrader 4 & 5",
        "TradingView integration",
        "Mobile apps (iOS & Android)",
        "Web-based trading",
        "Professional trading conditions",
      ],
    },
    {
      icon: AdvancedToolsIcon,
      title: "Advanced Tools",
      features: [
        "Trading Central analysis",
        "Market sentiment indicators",
        "Copy trading platform",
        "Risk management tools",
        "Customizable leverage 1:10 - 1:1000",
      ],
    },
  ];

  return (
    <section className="technology-infrastructure-content">
      <div className="technology-infrastructure-content__container">
        {/* Header Section */}
        <div className="technology-infrastructure-content__header">
          {/* Badge */}
          <div className="technology-infrastructure-content__badge-group">
            <div className="technology-infrastructure-content__badge-content">
              <div className="technology-infrastructure-content__badge-icon-wrapper">
                <img
                  src={BadgeSecurityIcon}
                  alt="Security"
                  className="technology-infrastructure-content__badge-icon"
                />
              </div>
              <span className="technology-infrastructure-content__badge-message">
                Technology & Infrastructure
              </span>
            </div>
          </div>

          {/* Main Title */}
          <h2 className="technology-infrastructure-content__title">
            Professional Trading Environment
          </h2>

          {/* Subtitle */}
          <p className="technology-infrastructure-content__subtitle">
            Verified performance metrics and institutional-grade infrastructure
          </p>
        </div>

        {/* Features Cards */}
        <div className="technology-infrastructure-content__cards">
          {features.map((feature, index) => (
            <div
              key={index}
              className="technology-infrastructure-content__card"
            >
              {/* Card Icon */}
              <div className="technology-infrastructure-content__card-icon">
                <img src={feature.icon} alt={feature.title} />
              </div>

              {/* Card Title */}
              <h3 className="technology-infrastructure-content__card-title">
                {feature.title}
              </h3>

              {/* Card Features List */}
              <ul className="technology-infrastructure-content__card-features">
                {feature.features.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="technology-infrastructure-content__card-feature"
                  >
                    <img
                      src={CircleMarkIcon}
                      alt="Check"
                      className="technology-infrastructure-content__feature-icon"
                    />
                    <span className="technology-infrastructure-content__feature-text">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyInfrastructureContent;
