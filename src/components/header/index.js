import React, { useState, useEffect, useContext } from "react";
import cn from "classnames";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { LogoTextMain, Logo } from "../shared/icons";
import { HOME_PAGE_LINK } from "../../helpers/constants";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import { REGISTRATION_LINK } from "../../helpers/constants";
import NavbarItem from "./components/navbar-item";
import LangSelect from "./components/lang-select";
import BurgerMenu from "./components/burger-menu";
import ButtonLink from "../shared/button-link";
import SearchBar from "./components/search-bar";
import { CYSEC_MENU_ITEMS, FSA_MENU_ITEMS } from "../../helpers/menu.config";
import ClientResolverContext from "../../context/client-resolver-context";
import entities from "../../enums/entities";
import NotificationStripe from "../shared/notification-stripe";
import { GDPRPopup } from "../gdpr-popup";

const Header = ({
  className,
  setSectionOptions,
  headerRef,
  isSearchBarAttached
}) => {
  const { t } = useTranslation();
  const [menu, setMenu] = useState([]);
  const { currentEntity } = useContext(ClientResolverContext);

  useEffect(() => {
    setMenu(
      currentEntity === entities.CYSEC ? CYSEC_MENU_ITEMS : FSA_MENU_ITEMS
    );
  }, [currentEntity]);

  return (
    <div className={cn("header-wrapper", className)} ref={headerRef}>
      <NotificationStripe setSectionOptions={setSectionOptions} />
      <GDPRPopup />
      <header
        className={cn("header", className)}
      >
        <div className="header__left">
          <Link to={HOME_PAGE_LINK}>
            <Logo className="header__logo" />
            <LogoTextMain className="header__logo-text-main" />
          </Link>

          <ul className="header__navigation">
            {menu.map(({ title, subItems, isNested = false }) => (
              <NavbarItem
                key={`header-menu-${stringTransformToKebabCase(title)}`}
                headerRef={headerRef}
                title={title}
                subItems={subItems}
                isNested={isNested}
              />
            ))}
          </ul>
        </div>

        <div className="header__right">
          <BurgerMenu />
          
          <div className="header__controls">
            <LangSelect className="lang-select--header" isHeader={true} />
            <ButtonLink
              link={REGISTRATION_LINK}
              className="button-link--header button-link--ghost header__signin"
            >
              {t("button-sign-in")}
            </ButtonLink>
            <ButtonLink
              link={REGISTRATION_LINK}
              className="button-link--header header__start"
            >
              {t("button-get-started")}
            </ButtonLink>
          </div>
        </div>

        {isSearchBarAttached && (
          <div className="header__search">
            <SearchBar isExpandable={true} />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
