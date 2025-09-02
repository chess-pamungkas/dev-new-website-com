import React, { useState, useContext } from "react";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import { ShowRegistrationPopup } from "../../../../helpers/constants";
import { setLangParam } from "../../../../helpers/services/language-service";
import {
  DATA_FOREX_MAJOR,
  DATA_FOREX_MINOR,
} from "../../../../helpers/top-market-tables";
import { updateTableDataWithLiveColumn } from "../../../../helpers/services/update-table-data-with-live-column";
import TradingContext from "../../../../context/trading-context";
import SearchIcon from "../../../../assets/images/icons/metals/search-table-metals.svg";
import LanguageContext from "../../../../context/language-context";
import { StandardButtons } from "../../../shared/reusable-buttons";

const ForexSpreadsMobile = () => {
  const { t } = useTranslationWithVariables();
  const { tradingSymbols } = useContext(TradingContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("major"); // "major" or "minor"

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  // Get the appropriate data based on active tab
  const currentData =
    activeTab === "major" ? DATA_FOREX_MAJOR : DATA_FOREX_MINOR;

  // Update table data with live column
  updateTableDataWithLiveColumn(currentData, tradingSymbols);

  // Filter data based on search term
  const filteredData = currentData.filter((item) =>
    item.col1.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSearchTerm(""); // Reset search when switching tabs
  };

  return (
    <>
      <div className="forex-spreads-mobile">
        {/* Tabs Container */}
        <div className="tabs-container">
          <div className="tabs">
            <button
              className={`tab ${activeTab === "major" ? "tab--active" : ""}`}
              onClick={() => handleTabChange("major")}
            >
              Major
            </button>
            <button
              className={`tab ${activeTab === "minor" ? "tab--active" : ""}`}
              onClick={() => handleTabChange("minor")}
            >
              Minor
            </button>
          </div>
        </div>

        {/* Search Container */}
        <div className="search-container-mobile">
          <input
            type="text"
            className="search-input-mobile"
            placeholder="Search by Symbol"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="search-icon-mobile">
            <img src={SearchIcon} alt="Search" />
          </div>
        </div>

        {/* Explanatory Text */}
        <div className="spreads-disclaimer-mobile">
          * MIN - minimum, AVG - average
        </div>

        {/* Spreads Cards */}
        <div className="spreads-cards">
          {filteredData.map((item, index) => (
            <div key={index} className="spread-card">
              <div className="spread-card__header">
                <div className="spread-card__icon">💱</div>
                <h3 className="spread-card__symbol">{item.col1}</h3>
                <p className="spread-card__description">
                  {item.description || `${item.col1} Currency Pair`}
                </p>
              </div>

              <div className="spread-card__accounts">
                {/* ECN+ Account */}
                <div className="spread-card__account">
                  <h4 className="spread-card__account-title">ECN+ Account</h4>
                  <div className="spread-card__values">
                    <span className="spread-card__label">MIN: {item.col2}</span>
                    <span className="spread-card__label">AVG: {item.col3}</span>
                  </div>
                </div>

                <div className="spread-card__divider"></div>

                {/* OQtima ONE Account */}
                <div className="spread-card__account">
                  <h4 className="spread-card__account-title">
                    OQtima ONE Account
                  </h4>
                  <div className="spread-card__values">
                    <span className="spread-card__label">MIN: {item.col4}</span>
                    <span className="spread-card__label">AVG: {item.col5}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        {/* <div className="spreads-disclaimer-mobile">
          Spreads generated from data between 24/05/2025 and 28/05/2025
        </div> */}

        {/* CTA Buttons */}
        <div className="spreads-cta-mobile">
          <StandardButtons
            onPrimaryClick={handleShowRegistrationPopup}
            onSecondaryClick={handleShowRegistrationPopup}
          />
        </div>
      </div>

      {/* Render the popup */}
      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={selectedLanguage.id}
        />
      )}
    </>
  );
};

ForexSpreadsMobile.propTypes = {};

export default ForexSpreadsMobile;
