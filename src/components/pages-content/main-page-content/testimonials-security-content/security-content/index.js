import React, { useState, useContext } from "react";
import BadgeSecurityIcon from "../../../../../assets/images/icons/main-page/badge-security.svg";
import CircleMarkIcon from "../../../../../assets/images/icons/circle-mark.svg";
import { ShowRegistrationPopup } from "../../../../../helpers/constants";
import LanguageContext from "../../../../../context/language-context";
import { StandardButtons } from "../../../../shared/reusable-buttons";

const securityPoints = [
  {
    text: "Liquidity Partners: JP Morgan, Deutsche Bank, Citi",
    icon: CircleMarkIcon,
  },
  {
    text: "Infrastructure: Equinix servers NY & London",
    icon: CircleMarkIcon,
  },
  {
    text: "Protection: Client funds segregated",
    icon: CircleMarkIcon,
  },
  {
    text: "Negative balance protection",
    icon: CircleMarkIcon,
  },
];

const SecurityContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true);
  };
  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="security-content">
      <div className="badge-row">
        <img src={BadgeSecurityIcon} alt="Security Badge" />
        <span className="badge-label">Security</span>
      </div>
      <h2 className="security-title">
        Financial <span className="highlight">Strength & Security</span>
      </h2>
      <ul className="security-list">
        {securityPoints.map((item, idx) => (
          <li key={idx} className="security-point">
            <img src={item.icon} alt="icon" className="point-icon" />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
      <div className="navbar-dropdown-highlight__button-group">
        <StandardButtons
          onPrimaryClick={handleShowRegistrationPopup}
          onSecondaryClick={handleShowRegistrationPopup}
        />
      </div>
      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={selectedLanguage.id}
        />
      )}
    </div>
  );
};

export default SecurityContent;
