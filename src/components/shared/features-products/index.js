import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import { useWindowSize } from "../../../helpers/hooks/use-window-size";
import featuresIcon from "../../../assets/images/icons/features.svg";

const FeaturesProducts = ({
  className,
  tradingType, // e.g., "forex", "metals", "shares", etc.
  features = [], // Array of feature objects with icon, title, description
}) => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  // Handle mouse drag for mobile sliding
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging || !isMobile) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    if (!isMobile) return;
    setIsDragging(false);
  };

  const nextSlide = () => {
    if (!isMobile) return;
    const maxSlides = features.length - 1;
    setCurrentSlide(currentSlide === maxSlides ? 0 : currentSlide + 1);
  };

  const prevSlide = () => {
    if (!isMobile) return;
    const maxSlides = features.length - 1;
    setCurrentSlide(currentSlide === 0 ? maxSlides : currentSlide - 1);
  };

  return (
    <section className={cn("features-products", className)}>
      {/* <div className="container"> */}
      {/* Header Section */}
      <div className="features-products__header">
        <div className="features-products__badge">
          <img
            src={featuresIcon}
            alt="Features"
            className="features-products__badge-icon"
          />
          <span className="features-products__badge-text">
            {t("features-products_badge-text")}
          </span>
        </div>

        <h2 className="features-products__title">
          {t(`features-products_${tradingType}_title`)}
        </h2>

        <p className="features-products__subtitle">
          {t("features-products_subtitle")}
        </p>
      </div>

      {/* Features Grid */}
      <div className="features-products__grid">
        {isMobile ? (
          // Mobile: Single row with sliding
          <div
            className="features-products__slider"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                className={cn("features-products__card", {
                  "features-products__card--active": index === currentSlide,
                })}
              >
                <div className="features-products__card-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="features-products__card-title">
                  {t(feature.title)}
                </h3>
                <p className="features-products__card-description">
                  {t(feature.description)}
                </p>
              </div>
            ))}
          </div>
        ) : (
          // Desktop: 3x2 grid
          <div className="features-products__grid-container">
            {features.map((feature, index) => (
              <div key={`feature-${index}`} className="features-products__card">
                <div className="features-products__card-icon">
                  <img src={feature.icon} alt={feature.title} />
                </div>
                <h3 className="features-products__card-title">
                  {t(feature.title)}
                </h3>
                <p className="features-products__card-description">
                  {t(feature.description)}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
      {/* </div> */}
    </section>
  );
};

FeaturesProducts.propTypes = {
  className: PropTypes.string,
  tradingType: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default FeaturesProducts;
