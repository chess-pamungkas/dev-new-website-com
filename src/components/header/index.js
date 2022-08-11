import React from 'react';
import cn from 'classnames';
import { LogoTextMain, Logo } from '../shared/icons';
import { useWindowSize } from '../../helpers/hooks/useWindowSize';
import { WINDOW_SIZE_LG } from '../../helpers/constants';
import { navCongig } from '../../helpers/mega-menu.config';
import NavbarItem from './components/navbar-item';
import LangSelect from './components/lang-select';

const Header = ({className}) => {
  const {width} = useWindowSize();
  const isNarrow = width <= WINDOW_SIZE_LG;

  return (
    <header className={cn("header", {"header--small": isNarrow}, className)}>
      <div className="header__left">
        {isNarrow ? <Logo className="header__logo" /> : <LogoTextMain />}
        <ul className="header__navigation">
          {navCongig.map(({title, subItems}) => (
            <NavbarItem
              key={title}
              title={title}
              subItems={subItems}
            />
          ))}
        </ul>
      </div>

      <div className="header__right">
        <LangSelect />
        <button className="header__signin" type="button">Sign In</button>
        <button className="header__start" type="button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
