import React from 'react';
import cn from 'classnames';
import ButtonLink from '../../../shared/button-link';
import SearchBar from '../search-bar';

const BurgerMenu = ({className}) => {
  return (
    <div className={cn("burger-menu", className)}>
      <input type="checkbox" className="burger-menu__trigger" id="bmt" />

      <label htmlFor="bmt" className="burger-menu__label">
        <span className="burger-menu__bar"></span>
        <span className="burger-menu__bar"></span>
        <span className="burger-menu__bar"></span>
      </label>

      <ul className="burger-menu__navbar">
        <li className="burger-menu__item">
          <div className="burger-menu__btns">
            {/* TODO: add links and classNames*/}
            <ButtonLink link={'/'} className="">Get Started</ButtonLink>
            <ButtonLink link={'/'} className="">EN</ButtonLink>
            <SearchBar />
          </div>
        </li>
        <li className="burger-menu__item">buttons</li>
        <li className="burger-menu__item">
          Links
        </li>
      </ul>
    </div>
  );
};

export default BurgerMenu;
