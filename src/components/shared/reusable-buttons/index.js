import React from "react";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";

// Arrow SVG component
const ArrowIcon = () => (
  <svg
    width="9.33"
    height="9.33"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
      stroke="currentColor"
      strokeWidth="1.3333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Base Button Component
const BaseButton = ({
  className,
  children,
  onClick,
  disabled = false,
  type = "button",
  ...props
}) => (
  <button
    type={type}
    className={cn(className)}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

// ========================================
// SCENARIO 1: Hero Section Buttons
// ========================================

export const ButtonPrimaryHero = ({
  text = "Start Trading",
  onClick,
  disabled = false,
  showArrow = true,
  className,
  ...props
}) => (
  <BaseButton
    className={cn("button-primary-hero", className)}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

export const ButtonSecondaryHero = ({
  text = "Try a Demo Account",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-secondary-hero"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

// ========================================
// SCENARIO 2: Standard Buttons (Red Background)
// ========================================

export const ButtonPrimaryStandard = ({
  text = "Start Trading",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-primary-standard"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

export const ButtonSecondaryStandard = ({
  text = "Try a Demo Account",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-secondary-standard"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

// ========================================
// SCENARIO 3: Our Community Buttons
// ========================================

export const ButtonPrimaryCommunity = ({
  text = "Open Demo Account",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-primary-community"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

export const ButtonSecondaryCommunity = ({
  text = "Compare Account Types",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-secondary-community"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

// ========================================
// SCENARIO 4: Account Comparison Buttons (Fixed Width)
// ========================================

export const ButtonPrimaryComparison = ({
  text = "Start ECN+",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-primary-comparison"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

export const ButtonSecondaryComparison = ({
  text = "Try a Demo Account",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-secondary-comparison"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

// Zero+ specific button (transparent background)
export const ButtonPrimaryComparisonZero = ({
  text = "Start Zero+",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-primary-comparison-zero"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    {showArrow && (
      <span className="button-arrow">
        <ArrowIcon />
      </span>
    )}
  </BaseButton>
);

// ========================================
// SCENARIO 5: Learn More Button (Transparent to Red)
// ========================================

export const ButtonLearnMore = ({
  text = "Learn More",
  onClick,
  disabled = false,
  showArrow = false,
  ...props
}) => (
  <BaseButton
    className="button-learn-more"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    <span className="button-text">{text}</span>
    <span className="button-arrow">
      <ArrowIcon />
    </span>
  </BaseButton>
);

// ========================================
// Button Container Components
// ========================================

export const ButtonContainer = ({ children, className = "", ...props }) => (
  <div className={`button-container ${className}`} {...props}>
    {children}
  </div>
);

export const ButtonContainerComparison = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`button-container-comparison ${className}`} {...props}>
    {children}
  </div>
);

// ========================================
// Convenience Components for Common Use Cases
// ========================================

// Hero section button pair
export const HeroButtons = ({
  primaryText = "Start Trading",
  secondaryText = "Try a Demo Account",
  onPrimaryClick,
  onSecondaryClick,
  disabled = false,
}) => (
  <ButtonContainer>
    <ButtonPrimaryHero
      text={primaryText}
      onClick={onPrimaryClick}
      disabled={disabled}
    />
    <ButtonSecondaryHero
      text={secondaryText}
      onClick={onSecondaryClick}
      disabled={disabled}
    />
  </ButtonContainer>
);

// Standard section button pair
export const StandardButtons = ({
  primaryText = "Start Trading",
  secondaryText = "Try a Demo Account",
  onPrimaryClick,
  onSecondaryClick,
  disabled = false,
}) => (
  <ButtonContainer>
    <ButtonPrimaryStandard
      text={primaryText}
      onClick={onPrimaryClick}
      disabled={disabled}
    />
    <ButtonSecondaryStandard
      text={secondaryText}
      onClick={onSecondaryClick}
      disabled={disabled}
    />
  </ButtonContainer>
);

// Account comparison button pairs
export const AccountComparisonButtons = ({
  ecnOnClick,
  ecnDemoOnClick,
  zeroOnClick,
  zeroDemoOnClick,
  disabled = false,
}) => (
  <ButtonContainerComparison>
    {/* <ButtonContainer> */}
    <ButtonPrimaryComparison
      text="Start ECN+"
      onClick={ecnOnClick}
      disabled={disabled}
    />
    <ButtonSecondaryComparison
      text="Try a Demo Account"
      onClick={ecnDemoOnClick}
      disabled={disabled}
    />
    {/* </ButtonContainer>
    <ButtonContainer> */}
    <ButtonPrimaryComparisonZero
      text="Start Zero+"
      onClick={zeroOnClick}
      disabled={disabled}
    />
    <ButtonSecondaryComparison
      text="Try a Demo Account"
      onClick={zeroDemoOnClick}
      disabled={disabled}
    />
    {/* </ButtonContainer> */}
  </ButtonContainerComparison>
);

export default {
  // Individual buttons
  ButtonPrimaryHero,
  ButtonSecondaryHero,
  ButtonPrimaryStandard,
  ButtonSecondaryStandard,
  ButtonPrimaryCommunity,
  ButtonSecondaryCommunity,
  ButtonPrimaryComparison,
  ButtonSecondaryComparison,
  ButtonPrimaryComparisonZero,
  ButtonLearnMore,

  // Containers
  ButtonContainer,
  ButtonContainerComparison,

  // Convenience components
  HeroButtons,
  StandardButtons,
  AccountComparisonButtons,

  // Arrow icon
  ArrowIcon,
};
