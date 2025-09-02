import React, { useState, useEffect, useContext } from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import {
  BURGER_MENU_LINES_COUNT,
  GetLoginLink,
  ShowRegistrationPopup,
  HOME_PAGE_LINK,
} from "../../../../helpers/constants";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import ButtonLink from "../../../shared/button-link";
import LangSelect from "../lang-select";
import SearchBar from "../search-bar";
import Accordion from "../../../shared/accordion";
import { getMenuItems } from "../../../../helpers/menu.config";
import InternalLink from "../../../shared/internal-link";
import { LogoTextMain } from "../../../shared/icons";
import { setLangParam } from "../../../../helpers/services/language-service";
import ButtonPopup from "../../../shared/button-popup";
import closeNavbarMobileIcon from "../../../../assets/images/icons/close-navbar-mobile.svg";
import chevronDownIcon from "../../../../assets/images/icons/burger-menu-navbar/chevron-down.svg";
import chevronRightIcon from "../../../../assets/images/icons/burger-menu-navbar/chevron-right.svg";
import CommonContext from "../../../../context/common-context";

const BurgerMenu = ({ className }) => {
  const { t } = useTranslationWithVariables();
  const { isMobile } = useWindowSize();
  const { isScrolled } = useContext(CommonContext);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const menu = getMenuItems();
  const [selectedNavItem, setSelectedNavItem] = useState(menu[0].title);
  const [isLangPopupOpened, setIsLangPopupOpened] = useState(false);
  const langParam = setLangParam(); // Get the language parameter
  const [isPopupOpen, setIsPopupOpen] = useState(false); // State to manage popup visibility

  // Mobile navigation accordion state
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (section) => {
    setOpenSections((prev) => {
      // If the clicked section is already open, close it
      if (prev[section]) {
        return {
          ...prev,
          [section]: false,
        };
      }

      // If the clicked section is closed, open it and close all others
      const newState = {};
      menu.forEach(({ title }) => {
        newState[title] = title === section;
      });
      return newState;
    });
  };

  const handleShowRegistrationPopup = () => {
    setIsPopupOpen(true); // Open the popup
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false); // Close the popup
  };

  const onTriggerChange = () => {
    typeof window !== "undefined" && isNavbarOpen
      ? document.body.classList.remove("overflow-hidden")
      : document.body.classList.add("overflow-hidden");

    setIsNavbarOpen(!isNavbarOpen);
  };

  const onSelect = (title) => setSelectedNavItem(title);

  return (
    <div className={cn("burger-menu", className)}>
      <input
        id="bmt"
        type="checkbox"
        checked={isNavbarOpen}
        onChange={() => {}}
        className="burger-menu__cbox"
      />

      <button
        className={cn("burger-menu__trigger", {
          "burger-menu__trigger--open": isNavbarOpen,
        })}
        onClick={onTriggerChange}
      >
        {[...Array(BURGER_MENU_LINES_COUNT)].map((_el, i) => (
          <span
            key={`burger-menu__bar-${i}`}
            className={cn("burger-menu__bar burger-menu__bar--red")}
          />
        ))}
      </button>

      <div
        className={cn("burger-menu__navbar", {
          "burger-menu__navbar--lang-popup-opened": isLangPopupOpened,
          "burger-menu__navbar--header-small": isScrolled && isMobile,
        })}
      >
        {/* Mobile Header Section */}
        {isMobile && (
          <div
            className={cn("burger-menu__mobile-header", {
              "burger-menu__mobile-header--small": isScrolled,
            })}
          >
            <div
              className="container"
              style={{
                height: "100%",
              }}
            >
              <div className="header__main-wrapper">
                <div className="header__left">
                  <InternalLink to={HOME_PAGE_LINK}>
                    <LogoTextMain className="header__logo" />
                  </InternalLink>
                </div>

                <div className="header__center">
                  {/* Center content if needed */}
                </div>

                <div className="header__right">
                  <LangSelect className="lang-select--header" isHeader={true} />
                  <button
                    className="burger-menu__mobile-close"
                    onClick={onTriggerChange}
                  >
                    <img
                      src={closeNavbarMobileIcon}
                      alt="Close"
                      className="close-icon"
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Desktop Close Button */}
        {!isMobile && (
          <button
            className={cn("burger-menu__trigger", {
              "burger-menu__trigger--open": isNavbarOpen,
            })}
            onClick={onTriggerChange}
          >
            {[...Array(BURGER_MENU_LINES_COUNT)].map((_el, i) => (
              <span
                key={`burger-menu__bar-${i}`}
                className="burger-menu__bar"
              />
            ))}
          </button>
        )}

        {/* Desktop Language Selector */}
        {!isMobile && (
          <LangSelect
            className="burger-menu__lang-select-mobile"
            setIsLangPopupOpened={setIsLangPopupOpened}
          />
        )}

        {/* Mobile Content Section */}
        {isMobile ? (
          <div className="burger-menu__mobile-content">
            <div className="burger-menu__mobile-navigation">
              {/* Action Text Section */}
              <div className="mobile-nav-actions">
                <a
                  href={GetLoginLink()}
                  className="mobile-nav-action mobile-nav-signin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("button-sign-in")}
                </a>
                <div
                  className="mobile-nav-action mobile-nav-get-started"
                  onClick={handleShowRegistrationPopup}
                >
                  {t("button-get-started")}
                </div>
              </div>

              {/* Dynamic Menu Sections */}
              {menu.map(({ title, subItems, link, isPartners }) => {
                // If it's a simple link (like Partners) without sub-items, render as a link
                if (!subItems || subItems.length === 0 || isPartners) {
                  return (
                    <div key={title} className="mobile-nav-item">
                      <a
                        href={link}
                        className="mobile-nav-header mobile-nav-link"
                        onClick={() => {
                          // Handle navigation and close menu
                          onTriggerChange();
                        }}
                      >
                        <span className="mobile-nav-title">{t(title)}</span>
                      </a>
                    </div>
                  );
                }

                // If it has sub-items, render as expandable section with chevron
                return (
                  <div key={title} className="mobile-nav-item">
                    <div
                      className="mobile-nav-header"
                      onClick={() => toggleSection(title)}
                    >
                      <span className="mobile-nav-title">{t(title)}</span>
                      <img
                        src={
                          openSections[title]
                            ? chevronDownIcon
                            : chevronRightIcon
                        }
                        alt="Toggle"
                        className="mobile-nav-chevron"
                      />
                    </div>
                    {openSections[title] && subItems && subItems.length > 0 && (
                      <div className="mobile-nav-subitems">
                        {subItems.map(
                          ({
                            link,
                            title: subTitle,
                            desktopOnly,
                            footerOnly,
                          }) =>
                            !desktopOnly &&
                            !footerOnly && (
                              <a
                                key={`mobile-nav-${subTitle}`}
                                href={link}
                                className="mobile-nav-subitem"
                                onClick={() => {
                                  // Handle navigation and close menu
                                  onTriggerChange();
                                }}
                              >
                                {t(subTitle)}
                              </a>
                            )
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          /* Desktop Content */
          <ul>
            <li className="burger-menu__item">
              <div className="burger-menu__btns">
                <ButtonPopup
                  className="button-link--header burger-menu__start"
                  onClick={handleShowRegistrationPopup}
                >
                  {t("button-get-started")}
                </ButtonPopup>
                <LangSelect className="burger-menu__lang-select-tablet" />
                <SearchBar
                  isNavbarOpen={isNavbarOpen}
                  onSubmit={onTriggerChange}
                  className="burger-menu__search"
                />
              </div>
            </li>

            <li className="burger-menu__item">
              <ButtonLink
                link={GetLoginLink()}
                className="button-link--blank burger-menu__signin"
              >
                {t("button-sign-in")}
              </ButtonLink>
            </li>

            <li className="burger-menu__item">
              <ul className="burger-menu__navigation">
                {menu.map(({ title, subItems }) => (
                  <li key={title} className="burger-menu__navigation-item">
                    <Accordion
                      key={`burger-menu-${stringTransformToKebabCase(title)}`}
                      className="burger-menu__accordion"
                      title={title}
                      onSelect={onSelect}
                      isOpen={selectedNavItem === title}
                    >
                      {!!subItems && subItems.length > 0 && (
                        <ul className="burger-menu__links">
                          {subItems.map(
                            ({ link, title, desktopOnly, footerOnly }) =>
                              !desktopOnly &&
                              !footerOnly && (
                                <li
                                  key={`burger-menu-${stringTransformToKebabCase(
                                    title
                                  )}`}
                                  className="burger-menu__link-item"
                                >
                                  <InternalLink
                                    className="burger-menu__link"
                                    to={link}
                                    onClick={onTriggerChange}
                                  >
                                    {t(title)}
                                  </InternalLink>
                                </li>
                              )
                          )}
                        </ul>
                      )}
                    </Accordion>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        )}
      </div>
      {/* Render the popup */}
      {isPopupOpen && (
        <ShowRegistrationPopup
          isOpen={isPopupOpen}
          onClose={handleClosePopup}
          langParam={langParam} // Pass langParam if needed
        />
      )}
    </div>
  );
};

BurgerMenu.propTypes = {
  className: PropTypes.string,
};
export default BurgerMenu;
