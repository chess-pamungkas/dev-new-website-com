import React from "react";
import { useI18next } from "gatsby-plugin-react-i18next";
import { ButtonContainer } from "../reusable-buttons";
import {
  ButtonPrimaryCommunity,
  ButtonSecondaryCommunity,
} from "../reusable-buttons";

// Community section button pair
export const CommunityButtons = ({
  onPrimaryClick,
  onSecondaryClick,
  disabled = false,
  customPrimaryButton,
  customSecondaryButton,
}) => {
  const { navigate } = useI18next();

  // Use custom text if provided, otherwise use default fallback
  // Note: OurCommunityContent already handles translation, so we just use the text provided
  const primaryText = customPrimaryButton || "Open Demo Account";

  // Hide secondary button if customSecondaryButton is null, undefined, or empty string
  // If customSecondaryButton is explicitly null or undefined, hide the button
  // If it's an empty string, also hide it
  const showSecondaryButton =
    customSecondaryButton !== null &&
    customSecondaryButton !== undefined &&
    customSecondaryButton.trim() !== "";

  const secondaryText = showSecondaryButton
    ? customSecondaryButton || "Compare Account Types"
    : "";

  // Default secondary button click handler - navigate to accounts-type page (preserves current language)
  const handleSecondaryClick =
    onSecondaryClick ||
    (() => {
      navigate("/accounts-type");
    });

  return (
    <ButtonContainer>
      <ButtonPrimaryCommunity
        text={primaryText}
        onClick={onPrimaryClick}
        disabled={disabled}
      />
      {showSecondaryButton && (
        <ButtonSecondaryCommunity
          text={secondaryText}
          onClick={handleSecondaryClick}
          disabled={disabled}
        />
      )}
    </ButtonContainer>
  );
};

export default CommunityButtons;
