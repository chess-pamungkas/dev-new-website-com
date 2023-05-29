import React, { useContext } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { LogoTextMain, Logo } from "../shared/icons";
import {
  DIR_LTR,
  DIR_RTL,
  HOME_PAGE_LINK,
  GetLoginLink,
} from "../../helpers/constants";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import { GetRegistrationLink } from "../../helpers/constants";
import NavbarItem from "./components/navbar-item";
import LangSelect from "./components/lang-select";
import BurgerMenu from "./components/burger-menu";
import ButtonLink from "../shared/button-link";
import SearchBar from "./components/search-bar";
import { CYSEC_MENU_ITEMS, FSA_MENU_ITEMS } from "../../helpers/menu.config";
import NotificationStripe from "../shared/notification-stripe";
import { GDPRPopup } from "../gdpr-popup";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { isCySEC } from "../../helpers/entity-resolver";
import CommonContext from "../../context/common-context";
import InternalLink from "../shared/internal-link";

const Header = ({ className }) => {
  const { t } = useTranslation();
  const menu = isCySEC ? CYSEC_MENU_ITEMS : FSA_MENU_ITEMS;
  const isRTL = useRtlDirection();
  const { headerRef, setSectionOptions, isSearchBarAttached } =
    useContext(CommonContext);

  return (
    <div className={cn("header-wrapper", className)} ref={headerRef}>
      <NotificationStripe setSectionOptions={setSectionOptions} />
      <GDPRPopup />
      <header
        className={cn("header", className, {
          "header--rtl": isRTL,
        })}
        dir={isRTL ? DIR_RTL : DIR_LTR}
      >
        <div className="header__left">
          <InternalLink to={HOME_PAGE_LINK}>
            <Logo className="header__logo" />
            <LogoTextMain className="header__logo-text-main" />
          </InternalLink>

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
              link={GetLoginLink()}
              className="button-link--header button-link--ghost header__signin"
            >
              {t("button-sign-in")}
            </ButtonLink>
            <ButtonLink
              link={GetRegistrationLink()}
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
