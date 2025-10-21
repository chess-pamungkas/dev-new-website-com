import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import InternalLink from "../../../shared/internal-link";
import subNavBadgeIcon from "../../../../assets/images/icons/sub-nav.svg";
import { ShowRegistrationPopup } from "../../../../helpers/constants";
import { setLangParam } from "../../../../helpers/services/language-service";

const NavbarDropdownHighlight = ({
  className,
  icon: Icon,
  title,
  description,
  link,
  subtitle,
  primaryButton,
  secondaryButton,
  onOpenRegistrationPopup,
}) => {
  const { t } = useTranslationWithVariables();
  const isRTL = useRtlDirection();
  const langParam = setLangParam();
  return (
    <div
      className={cn(
        "navbar-dropdown-highlight",
        isRTL && "navbar-dropdown-highlight--rtl",
        className
      )}
    >
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
            {t("navbar-dropdown-highlight_badge-text")}
          </span>
        </div>
        <div className="navbar-dropdown-highlight__content-block">
          <div className="navbar-dropdown-highlight__title">
            {t("navbar-dropdown-highlight_title")}
          </div>
          <div className="navbar-dropdown-highlight__subtitle">
            {t("navbar-dropdown-highlight_subtitle")}
          </div>
          <div className="navbar-dropdown-highlight__button-group">
            {primaryButton && primaryButton.text && (
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
                  {t(primaryButton.text)}
                </span>
                <span
                  className="navbar-dropdown-highlight__button-arrow"
                  style={
                    isRTL
                      ? {
                          transform: "scaleX(-1) !important",
                          WebkitTransform: "scaleX(-1) !important",
                          MozTransform: "scaleX(-1) !important",
                          msTransform: "scaleX(-1) !important",
                        }
                      : {}
                  }
                >
                  <svg
                    width="9.33"
                    height="9.33"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={
                      isRTL
                        ? {
                            transform: "scaleX(-1) !important",
                            WebkitTransform: "scaleX(-1) !important",
                            MozTransform: "scaleX(-1) !important",
                            msTransform: "scaleX(-1) !important",
                          }
                        : {}
                    }
                    ref={(el) => {
                      if (el && isRTL) {
                        el.style.setProperty(
                          "transform",
                          "scaleX(-1)",
                          "important"
                        );
                        el.style.setProperty(
                          "-webkit-transform",
                          "scaleX(-1)",
                          "important"
                        );
                        el.style.setProperty(
                          "-moz-transform",
                          "scaleX(-1)",
                          "important"
                        );
                        el.style.setProperty(
                          "-ms-transform",
                          "scaleX(-1)",
                          "important"
                        );
                      }
                    }}
                  >
                    <path
                      d={
                        isRTL
                          ? "M10.3333 5.50004H1M1 5.50004L5.66667 0.833374M1 5.50004L5.66667 10.1667"
                          : "M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
                      }
                      stroke="white"
                      strokeWidth="1.3333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            )}
            {secondaryButton && secondaryButton.text && (
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
                  {t(secondaryButton.text)}
                </span>
                <span
                  className="navbar-dropdown-highlight__button-arrow"
                  style={
                    isRTL
                      ? {
                          transform: "scaleX(-1) !important",
                          WebkitTransform: "scaleX(-1) !important",
                          MozTransform: "scaleX(-1) !important",
                          msTransform: "scaleX(-1) !important",
                        }
                      : {}
                  }
                >
                  <svg
                    width="9.33"
                    height="9.33"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={
                      isRTL
                        ? {
                            transform: "scaleX(-1) !important",
                            WebkitTransform: "scaleX(-1) !important",
                            MozTransform: "scaleX(-1) !important",
                            msTransform: "scaleX(-1) !important",
                          }
                        : {}
                    }
                    ref={(el) => {
                      if (el && isRTL) {
                        el.style.setProperty(
                          "transform",
                          "scaleX(-1)",
                          "important"
                        );
                        el.style.setProperty(
                          "-webkit-transform",
                          "scaleX(-1)",
                          "important"
                        );
                        el.style.setProperty(
                          "-moz-transform",
                          "scaleX(-1)",
                          "important"
                        );
                        el.style.setProperty(
                          "-ms-transform",
                          "scaleX(-1)",
                          "important"
                        );
                      }
                    }}
                  >
                    <path
                      d={
                        isRTL
                          ? "M10.3333 5.50004H1M1 5.50004L5.66667 0.833374M1 5.50004L5.66667 10.1667"
                          : "M1 5.50004H10.3333M10.3333 5.50004L5.66667 0.833374M10.3333 5.50004L5.66667 10.1667"
                      }
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
  icon: PropTypes.elementType,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string,
  primaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  secondaryButton: PropTypes.shape({
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }),
  onOpenRegistrationPopup: PropTypes.func,
};

export default NavbarDropdownHighlight;
