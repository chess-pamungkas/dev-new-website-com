import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";
import InternalLink from "../internal-link";
import subNavBadgeIcon from "../../../assets/images/icons/sub-nav.svg";
import { ShowRegistrationPopup } from "../../../helpers/constants";
import { setLangParam } from "../../../helpers/services/language-service";

const NavbarDropdownHighlight = ({
  className,
  menuType = "platforms", // "products", "trading", "platforms", "more"
  onOpenRegistrationPopup,
}) => {
  const { t } = useTranslationWithVariables();
  const langParam = setLangParam();

  // Dynamic content based on menu type
  const getMenuContent = (type) => {
    // Map translation keys to menu types
    const translationKeyMap = {
      "header-nav-tab-top-markets": "products",
      "header-nav-tab-trading": "trading",
      "header-nav-tab-platforms-title": "platforms",
      "header-nav-tab-company": "more",
      "header-nav-tab-partners-fsa": "more",
    };

    // Get the actual menu type from translation key
    const actualMenuType = translationKeyMap[type] || type;

    const contentMap = {
      products: {
        badgeText: t("navbar-dropdown-highlight_products_badge-text"),
        title: t("navbar-dropdown-highlight_products_title"),
        subtitle: t("navbar-dropdown-highlight_products_subtitle"),
        primaryButton: {
          text: t("navbar-dropdown-highlight_products_primary-button"),
          link: "/products",
        },
        secondaryButton: {
          text: t("navbar-dropdown-highlight_products_secondary-button"),
          link: "/products/demo",
        },
      },
      trading: {
        badgeText: t("navbar-dropdown-highlight_trading_badge-text"),
        title: t("navbar-dropdown-highlight_trading_title"),
        subtitle: t("navbar-dropdown-highlight_trading_subtitle"),
        primaryButton: {
          text: t("navbar-dropdown-highlight_trading_primary-button"),
          link: "/trading",
        },
        secondaryButton: {
          text: t("navbar-dropdown-highlight_trading_secondary-button"),
          link: "/trading/demo",
        },
      },
      platforms: {
        badgeText: t("navbar-dropdown-highlight_platforms_badge-text"),
        title: t("navbar-dropdown-highlight_platforms_title"),
        subtitle: t("navbar-dropdown-highlight_platforms_subtitle"),
        primaryButton: {
          text: t("navbar-dropdown-highlight_platforms_primary-button"),
          link: "/platforms",
        },
        secondaryButton: {
          text: t("navbar-dropdown-highlight_platforms_secondary-button"),
          link: "/platforms/demo",
        },
      },
      more: {
        badgeText: t("navbar-dropdown-highlight_more_badge-text"),
        title: t("navbar-dropdown-highlight_more_title"),
        subtitle: t("navbar-dropdown-highlight_more_subtitle"),
        primaryButton: {
          text: t("navbar-dropdown-highlight_more_primary-button"),
          link: "/more",
        },
        secondaryButton: {
          text: t("navbar-dropdown-highlight_more_secondary-button"),
          link: "/more/demo",
        },
      },
    };

    return contentMap[actualMenuType] || contentMap.platforms;
  };

  const content = getMenuContent(menuType);

  return (
    <div className={cn("navbar-dropdown-highlight", className)}>
      <div className="navbar-dropdown-highlight__inner">
        <div className="navbar-dropdown-highlight__badge">
          <span style={{ display: "inline-flex", alignItems: "center" }}>
            <img
              src={subNavBadgeIcon}
              alt={t("navbar-dropdown-highlight_badge-icon-alt")}
              className="navbar-dropdown-highlight__badge-icon"
            />
          </span>
          <span
            className="navbar-dropdown-highlight__badge-text"
            style={{ display: "inline-block", whiteSpace: "nowrap" }}
          >
            {content.badgeText}
          </span>
        </div>
        <div className="navbar-dropdown-highlight__content-block">
          <div className="navbar-dropdown-highlight__title">
            {content.title}
          </div>
          <div className="navbar-dropdown-highlight__subtitle">
            {content.subtitle}
          </div>
          <div className="navbar-dropdown-highlight__button-group">
            {content.primaryButton && content.primaryButton.text && (
              <button
                type="button"
                data-popup-trigger="true"
                className="navbar-dropdown-highlight__button navbar-dropdown-highlight__button--primary"
                onMouseDown={(e) => {
                  if (e.button !== 0) return; // Only left click
                  e.stopPropagation();
                  e.preventDefault();
                  window.__OQTIMA_REGISTRATION_POPUP_PENDING__ = true;
                  setTimeout(() => {
                    if (onOpenRegistrationPopup)
                      onOpenRegistrationPopup(langParam);
                    window.__OQTIMA_REGISTRATION_POPUP_PENDING__ = false;
                  }, 10);
                }}
              >
                <span className="navbar-dropdown-highlight__button-text">
                  {t(content.primaryButton.text)}
                </span>
                <span className="navbar-dropdown-highlight__button-arrow">
                  <svg
                    width="9.33"
                    height="9.33"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
                      stroke="white"
                      strokeWidth="1.3333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            )}
            {content.secondaryButton && content.secondaryButton.text && (
              <button
                type="button"
                data-popup-trigger="true"
                className="navbar-dropdown-highlight__button navbar-dropdown-highlight__button--secondary"
                onMouseDown={(e) => {
                  if (e.button !== 0) return; // Only left click
                  e.stopPropagation();
                  e.preventDefault();
                  window.__OQTIMA_REGISTRATION_POPUP_PENDING__ = true;
                  setTimeout(() => {
                    if (onOpenRegistrationPopup)
                      onOpenRegistrationPopup(langParam);
                    window.__OQTIMA_REGISTRATION_POPUP_PENDING__ = false;
                  }, 10);
                }}
              >
                <span className="navbar-dropdown-highlight__button-text">
                  {t(content.secondaryButton.text)}
                </span>
                <span className="navbar-dropdown-highlight__button-arrow">
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
                </span>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

NavbarDropdownHighlight.propTypes = {
  className: PropTypes.string,
  menuType: PropTypes.oneOf(["products", "trading", "platforms", "more"]),
  onOpenRegistrationPopup: PropTypes.func,
};

export default NavbarDropdownHighlight;
