import React from "react";
// import ArrowIcon from "../../../../../assets/images/icons/arrow-right.svg";

// Custom button components for accounts-type page to avoid CSS conflicts

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
    className={className}
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </button>
);

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

export const ButtonPrimaryComparisonAccountsType = ({
  text = "Start ECN+",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-primary-comparison-accounts-type"
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

export const ButtonSecondaryComparisonAccountsType = ({
  text = "Try a Demo Account",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-secondary-comparison-accounts-type"
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

export const ButtonPrimaryComparisonZeroAccountsType = ({
  text = "Start Zero+",
  onClick,
  disabled = false,
  showArrow = true,
  ...props
}) => (
  <BaseButton
    className="button-primary-comparison-zero-accounts-type"
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
