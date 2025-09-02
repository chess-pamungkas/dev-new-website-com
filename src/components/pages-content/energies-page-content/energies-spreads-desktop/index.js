import React, { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import SearchIcon from "../../../../assets/images/icons/metals/search-table-metals.svg";
import { ShowRegistrationPopup } from "../../../../helpers/constants";
import LanguageContext from "../../../../context/language-context";
import { StandardButtons } from "../../../shared/reusable-buttons";

const EnergiesSpreadsDesktop = ({ data }) => {
  const { t } = useTranslationWithVariables();
  const [searchTerm, setSearchTerm] = useState("");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { selectedLanguage } = useContext(LanguageContext);

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  const filteredData = data.filter((item) =>
    item.col1.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="energies-spreads-desktop">
      {/* Search Bar */}
      <div className="search-container">
        <div className="search-frame">
          <input
            type="text"
            placeholder="Search by Symbol"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
          <div className="search-icon">
            <img src={SearchIcon} alt="Search" />
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="spreads-table-container">
        <table className="spreads-table">
          {/* Header Section */}
          <thead className="table-header-section">
            {/* Main Header Row */}
            <tr className="table-main-header">
              <th>PRODUCT</th>
              <th className="table-header__ecn" colSpan="2">
                ECN+ Account
              </th>
              <th className="table-header__oqtima" colSpan="2">
                OQTIMA ONE ACCOUNT
              </th>
            </tr>
            {/* Sub Header Row */}
            <tr className="table-sub-header">
              <th>SYMBOL</th>
              <th className="table-subheader__min">MIN</th>
              <th className="table-subheader__avg">AVG</th>
              <th className="table-subheader__min">MIN</th>
              <th className="table-subheader__avg">AVG</th>
            </tr>
          </thead>
          {/* Body Section */}
          <tbody className="table-body-section">
            {filteredData.map((item, index) => (
              <tr key={index} className="table-row">
                <td className="table-cell">{item.col1}</td>
                <td className="table-cell table-cell__min">{item.col2}</td>
                <td className="table-cell table-cell__avg">{item.col3}</td>
                <td className="table-cell table-cell__min">{item.col4}</td>
                <td className="table-cell table-cell__avg">{item.col5}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Disclaimer */}
      {/* <div className="spreads-disclaimer">
        Spreads generated from data between 24/05/2025 and 28/05/2025
      </div> */}

      {/* CTA Buttons */}
      <div className="spreads-cta">
        <StandardButtons
          onPrimaryClick={handleShowRegistrationPopup}
          onSecondaryClick={handleShowRegistrationPopup}
        />
      </div>

      {/* Registration Popup */}
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

EnergiesSpreadsDesktop.propTypes = {
  data: PropTypes.array.isRequired,
};

export default EnergiesSpreadsDesktop;
