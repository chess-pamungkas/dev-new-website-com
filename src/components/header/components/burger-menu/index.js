import React, { useState, useContext, useEffect } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { Link } from "gatsby";
import { BURGER_MENU_LINES_COUNT } from "../../../../helpers/constants";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import { REGISTRATION_LINK } from "../../../../helpers/constants";
import ButtonLink from "../../../shared/button-link";
import LangSelect from "../lang-select";
import SearchBar from "../search-bar";
import Accordion from "../../../shared/accordion";
import {
  CYSEC_MENU_ITEMS,
  FSA_MENU_ITEMS,
} from "../../../../helpers/menu.config";
import ClientResolverContext from "../../../../context/client-resolver-context";
import entities from "../../../../enums/entities";

const BurgerMenu = ({ className }) => {
  const { t } = useTranslation();
  const { isMobile } = useWindowSize();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(
    FSA_MENU_ITEMS[0].title
  );
  const [menu, setMenu] = useState([]);
  const { currentEntity } = useContext(ClientResolverContext);

  useEffect(() => {
    setMenu(
      currentEntity === entities.CYSEC ? CYSEC_MENU_ITEMS : FSA_MENU_ITEMS
    );
  }, [currentEntity]);

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
          <span key={`burger-menu__bar-${i}`} className="burger-menu__bar" />
        ))}
      </button>

      <div className="burger-menu__navbar">
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

        {isMobile && <LangSelect className="burger-menu__lang-select-mobile" />}

        <ul>
          <li className="burger-menu__item">
            <div className="burger-menu__btns">
              {!isMobile && (
                <>
                  <ButtonLink
                    link={REGISTRATION_LINK}
                    className="button-link--header burger-menu__start"
                  >
                    {t("button-get-started")}
                  </ButtonLink>
                  <LangSelect className="burger-menu__lang-select-tablet" />
                </>
              )}

              <SearchBar className="burger-menu__search" />
            </div>
          </li>

          <li className="burger-menu__item">
            <ButtonLink
              link={REGISTRATION_LINK}
              className="button-link--blank burger-menu__signin"
            >
              {t("button-sign-in")}
            </ButtonLink>

            {isMobile && (
              <ButtonLink
                link={REGISTRATION_LINK}
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
                          ({
                            link,
                            title,
                            isSubtitle = false,
                            subtitles = [],
                          }) => (
                            <li
                              key={`burger-menu-${stringTransformToKebabCase(
                                title
                              )}`}
                              className="burger-menu__link-item"
                            >
                              <Link className="burger-menu__link" to={link}>
                                {t(title)}
                              </Link>

                              {isSubtitle && !!subtitles.length && (
                                <ul className="burger-menu__subtitles">
                                  {subtitles.map((subtitle) => (
                                    <li
                                      key={`burger-menu-${stringTransformToKebabCase(
                                        subtitle.title
                                      )}`}
                                      className="burger-menu__link-item"
                                    >
                                      <Link
                                        className="burger-menu__link"
                                        to={subtitle.link}
                                      >
                                        {t(subtitle.title)}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
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
