import React from "react";
import { navigate } from "gatsby";
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
  // Use custom text if provided, otherwise use default fallback
  // Note: OurCommunityContent already handles translation, so we just use the text provided
  const primaryText = customPrimaryButton || "Open Demo Account";
  const secondaryText = customSecondaryButton || "Compare Account Types";

  // Default secondary button click handler - navigate to accounts-type page
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
      <ButtonSecondaryCommunity
        text={secondaryText}
        onClick={handleSecondaryClick}
        disabled={disabled}
      />
    </ButtonContainer>
  );
};

export default CommunityButtons;
