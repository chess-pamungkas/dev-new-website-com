import React, { useContext } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { LogoTextMain, LogoWhite } from "../shared/icons";
import {
  DIR_LTR,
  DIR_RTL,
  HOME_PAGE_LINK,
  GetLoginLink,
  GetRegistrationLink,
} from "../../helpers/constants";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import NavbarItem from "./components/navbar-item";
import BurgerMenu from "./components/burger-menu";
import ButtonLink from "../shared/button-link";
import SearchBar from "./components/search-bar";
import { getCornerItems, getMenuItems } from "../../helpers/menu.config";
import NotificationStripe from "../shared/notification-stripe";
import { GDPRPopup } from "../gdpr-popup";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import CommonContext from "../../context/common-context";
import InternalLink from "../shared/internal-link";
import CornerPanel from "./components/corner-panel";
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import ClientResolverContext from "../../context/client-resolver-context";

const Header = ({ className }) => {
  const { t } = useTranslation();
  const menu = getMenuItems();
  const isRTL = useRtlDirection();
  const { isDesktop, isTablet } = useWindowSize();
  const {
    headerRef,
    headerMainWrapperRef,
    setSectionOptions,
    isSearchBarAttached,
    isScrolled,
  } = useContext(CommonContext);
  const { clientConfig } = useContext(ClientResolverContext);

  return (
    <div className={cn("header-wrapper", className)} ref={headerRef}>
      <NotificationStripe setSectionOptions={setSectionOptions} />
      <GDPRPopup />
      <header
        className={cn(
          "header",
          className,
          {
            "header--rtl": isRTL,
          },
          { "header--small": isScrolled && isDesktop },
          { "header--big": !isScrolled && isDesktop }
        )}
        dir={isRTL ? DIR_RTL : DIR_LTR}
      >
        {isDesktop && <CornerPanel items={getCornerItems()} />}
        <div className="header__main-wrapper" ref={headerMainWrapperRef}>
          <div className="header__left">
            <InternalLink to={HOME_PAGE_LINK}>
              {/* Desktop only, where header transition */}
              {isDesktop &&
                (isScrolled ? (
                  <LogoTextMain className="header__logo" />
                ) : (
                  <LogoWhite className="header__logo" />
                ))}

              {/* Mobile and Table only, where no header transition */}
              {isTablet && <LogoTextMain className="header__logo" />}
            </InternalLink>
          </div>

          <div className="header__center">
            <ul className="header__navigation">
              {menu.map(
                ({ title, subItems, mobileOnly }) =>
                  !mobileOnly && (
                    <NavbarItem
                      key={`header-menu-${stringTransformToKebabCase(title)}`}
                      title={title}
                      subItems={subItems}
                    />
                  )
              )}
            </ul>
          </div>

          <div className="header__right">
            <BurgerMenu />

            <div className="header__controls">
              <ButtonLink
                link={GetLoginLink()}
                className={cn(
                  "button-link--header button-link--ghost header__signin",
                  { "header__signin--red": isScrolled }
                )}
              >
                {t("button-sign-in")}
              </ButtonLink>
              <ButtonLink
                link={GetRegistrationLink()}
                className={cn(
                  "button-link--header header__start",
                  {
                    "header__start--red": isScrolled,
                  },
                  {
                    "header__start--disabled": clientConfig?.banned,
                  }
                )}
              >
                {t("button-get-started")}
              </ButtonLink>
            </div>
          </div>
        </div>

        {isSearchBarAttached && (
          <div
            className={cn("header__search", {
              "header__search--small": isScrolled,
            })}
          >
            <SearchBar isExpandable={true} />
          </div>
        )}
      </header>
    </div>
  );
};

export default Header;
