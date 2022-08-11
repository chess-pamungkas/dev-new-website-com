import React from 'react';
import cn from "classnames";
import { LogoTextMain, Logo } from '../shared/icons';
import { useWindowSize } from '../../helpers/hooks/useWindowSize';
import { windowSizeLg } from '../../helpers/constants';
import { navCongig } from '../../helpers/mega-menu.config';
import NavbarItem from './components/navbar-item';
import LangSelect from './components/lang-select';

const Header = () => {
  const {width} = useWindowSize();
  const isNarrow = width <= windowSizeLg;

  return (
    <header className={cn("header", {"header--small": isNarrow})}>
      <div className="header__left">
        {isNarrow ? <Logo className="header__logo" /> : <LogoTextMain />}
        <ul className="header__navigation">
          {navCongig.map(({title, subItems}) => (
            <NavbarItem
              key={title}
              className="header"
              title={title}
              subItems={subItems}
            />
          ))}
        </ul>
      </div>

      <div className="header__right">
        <LangSelect className="header" />
        <button className="header__signin" type="button">Sign In</button>
        <button className="header__start" type="button">Get Started</button>
      </div>
    </header>
  );
};

export default Header;
