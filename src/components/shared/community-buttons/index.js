import React from "react";
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

  return (
    <ButtonContainer>
      <ButtonPrimaryCommunity
        text={primaryText}
        onClick={onPrimaryClick}
        disabled={disabled}
      />
      <ButtonSecondaryCommunity
        text={secondaryText}
        onClick={onSecondaryClick}
        disabled={disabled}
      />
    </ButtonContainer>
  );
};

export default CommunityButtons;
