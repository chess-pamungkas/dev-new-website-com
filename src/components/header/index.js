import React from 'react';
import cn from 'classnames';
import { LogoTextMain, Logo } from '../shared/icons';
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import { WINDOW_SIZE_XL } from '../../helpers/constants';
import { MENU_ITEMS } from '../../helpers/menu.config';
import { stringTransformToKebabCase } from '../../helpers/services/string-service';
import NavbarItem from './components/navbar-item';
import LangSelect from './components/lang-select';
import BurgerMenu from './components/burger-menu';
import ButtonLink from '../shared/button-link';

const Header = ({ className }) => {
  const { width, isTablet } = useWindowSize();

  const isNarrow = width < WINDOW_SIZE_XL;

  return (
    <header className={cn("header", {"header--small": isNarrow}, className)}>
      <div className="header__left">
        {isNarrow ? <Logo className="header__logo" /> : <LogoTextMain />}

        {!isTablet && (
          <ul className="header__navigation">
            {MENU_ITEMS.map(({ title, subItems, isNested = false }) => (
              <NavbarItem
                key={`header-menu-${stringTransformToKebabCase(title)}`}
                title={title}
                subItems={subItems}
                isNested={isNested}
              />
            ))}
          </ul>
        )}
      </div>

      <div className="header__right">
        {isTablet ? (
          <BurgerMenu />
        ) : (
          <>
            <LangSelect className="lang-select--header" isHeader={true} />
            {/* TODO: add links */}
            <ButtonLink link={'/'} className="button-link--header button-link--ghost header__signin">Sign In</ButtonLink>
            <ButtonLink link={'/'} className="button-link--header header__start">Get Started</ButtonLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
