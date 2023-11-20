import React, { useContext, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { BURGER_MENU_LINES_COUNT } from "../../../../helpers/constants";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import {
  GetRegistrationLink,
  GetLoginLink,
} from "../../../../helpers/constants";
import ButtonLink from "../../../shared/button-link";
import LangSelect from "../lang-select";
import SearchBar from "../search-bar";
import Accordion from "../../../shared/accordion";
import { getMenuItems } from "../../../../helpers/menu.config";
import InternalLink from "../../../shared/internal-link";
import ClientResolverContext from "../../../../context/client-resolver-context";

const BurgerMenu = ({ className }) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();
  const { clientConfig } = useContext(ClientResolverContext);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const menu = getMenuItems();
  const [selectedNavItem, setSelectedNavItem] = useState(menu[0].title);
  const [isLangPopupOpened, setIsLangPopupOpened] = useState(false);

  const onTriggerChange = (e) => {
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
        })}
      >
        <button
          className={cn("burger-menu__trigger", {
            "burger-menu__trigger--open": isNavbarOpen,
          })}
          onClick={onTriggerChange}
        >
          {[...Array(BURGER_MENU_LINES_COUNT)].map((_el, i) => (
            <span key={`burger-menu__bar-${i}`} className="burger-menu__bar" />
          ))}
        </button>

        {isMobile && (
          <LangSelect
            className="burger-menu__lang-select-mobile"
            setIsLangPopupOpened={setIsLangPopupOpened}
          />
        )}

        <ul>
          <li className="burger-menu__item">
            <div className="burger-menu__btns">
              {!isMobile && (
                <>
                  <ButtonLink
                    link={GetRegistrationLink()}
                    className={cn("button-link--header burger-menu__start")}
                  >
                    {t("button-get-started")}
                  </ButtonLink>
                  <LangSelect className="burger-menu__lang-select-tablet" />
                </>
              )}

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

            {isMobile && (
              <ButtonLink
                link={GetRegistrationLink()}
                className="button-link--blank burger-menu__start--tablet"
              >
                {t("button-get-started")}
              </ButtonLink>
            )}
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
                    {!!subItems.length && (
                      <ul className="burger-menu__links">
                        {subItems.map(
                          ({ link, title, desktopOnly }) =>
                            !desktopOnly && (
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
      </div>
    </div>
  );
};

export default BurgerMenu;
