import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import featureIcon from "../../../../assets/images/icons/features.svg";
import bgCommissionDesktop from "../../../../assets/images/bg/spreads-fees/bg-commission-desktop.svg";
import bgCommissionMobile from "../../../../assets/images/bg/spreads-fees/bg-commission-mobile.svg";
import CommissionTableMobile from "../commission-table-mobile";

const SpreadsFeesCommission = ({ className }) => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();

  // Commission data based on Figma design
  const commissionData = [
    {
      currencyCode: "USD",
      currencyName: "United States Dollar",
      commissionRate: "$ 1.50 per lot traded ($3 round turn)",
    },
    {
      currencyCode: "EUR",
      currencyName: "Euro",
      commissionRate: "€ 1.50 per lot traded (€3 round turn)",
    },
    {
      currencyCode: "GBP",
      currencyName: "British Pound",
      commissionRate: "£ 1.25 per lot traded (£2.50 round turn)",
    },
    {
      currencyCode: "SGD",
      currencyName: "Singapore Dollar",
      commissionRate: "S$ 1.75 per lot traded (S$ 3.50 round turn)",
    },
    {
      currencyCode: "JPY",
      currencyName: "Japanese Yen",
      commissionRate: "¥225 per lot traded (¥450 round turn)",
    },
    {
      currencyCode: "CAD",
      currencyName: "Canadian Dollar",
      commissionRate: "Can$ 2.00 per lot traded (Can$ 4 per round turn)",
    },
  ];

  return (
    <div className={cn("commission", className)}>
      {/* Background */}
      <div className="commission__bg">
        <img
          src={bgCommissionDesktop}
          alt="Commission Background"
          className="desktop-bg"
        />
        <img
          src={bgCommissionMobile}
          alt="Commission Background"
          className="mobile-bg"
        />
      </div>

      {/* Content */}
      <div className="commission__content">
        {/* Header Section */}
        <div className="commission__header">
          {/* Badge Group */}
          <div className="commission__badge-group">
            <img src={featureIcon} alt="Feature Icon" />
            <span>Features</span>
          </div>

          {/* Title and Subtitle Container */}
          <div className="commission__title-container">
            <h2 className="commission__title">
              {t("spreads-fees_commission_title")}
            </h2>
            <p className="commission__subtitle">
              {t("spreads-fees_commission_subtitle")}
            </p>
          </div>
        </div>

        {/* Table Container */}
        <div className="commission__table-container">
          {isMobile ? (
            <CommissionTableMobile data={commissionData} />
          ) : (
            <>
              {/* Desktop Table Header */}
              <div className="commission__table-header">
                <div className="commission__header-column">
                  {t("spreads-fees_commission_table_header1")}
                </div>
                <div className="commission__header-column">
                  {t("spreads-fees_commission_table_header2")}
                </div>
              </div>

              {/* Desktop Table Body */}
              <div className="commission__table-body">
                {commissionData.map((item, index) => (
                  <div key={index} className="commission__table-row">
                    <div className="commission__row-column commission__row-column--currency">
                      <span className="commission__currency-code">
                        {item.currencyCode}
                      </span>
                      <span className="commission__currency-name">
                        {item.currencyName}
                      </span>
                    </div>
                    <div className="commission__row-column commission__row-column--rate">
                      {item.commissionRate}
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

SpreadsFeesCommission.propTypes = {
  className: PropTypes.string,
};

export default SpreadsFeesCommission;
