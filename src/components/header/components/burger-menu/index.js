import React, { useState } from 'react';
import cn from 'classnames';
import { MENU_ITEMS } from '../../../../helpers/mega-menu.config';
import { useWindowSize } from '../../../../helpers/hooks/use-window-size';
import ButtonLink from '../../../shared/button-link';
import LangSelect from '../lang-select';
import SearchBar from '../search-bar';
import Accordeon from '../../../shared/accordion';

const BurgerMenu = ({ className }) => {
  const { isMobile } = useWindowSize();

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [selectedNavItem, setSelectedNavItem] = useState(MENU_ITEMS[0].title)

  const onTriggerChange = () => {
    setIsNavbarOpen(!isNavbarOpen);
    typeof window !== 'undefined' && isNavbarOpen
      ? document.body.style.overflow = 'unset'
      : document.body.style.overflow = 'hidden';
  };

  const onSelect = title => setSelectedNavItem(title);

  return (
    <div className={cn("burger-menu", className)}>
      <input
        id="bmt"
        type="checkbox"
        checked={isNavbarOpen}
        onChange={() => {}}
        className="burger-menu__cbox"
      />

      <button className={cn("burger-menu__trigger", {"burger-menu__trigger--open": isNavbarOpen})} onClick={onTriggerChange}>
        <span className="burger-menu__bar"></span>
        <span className="burger-menu__bar"></span>
        <span className="burger-menu__bar"></span>
      </button>

      <div className="burger-menu__navbar">
        <button className={cn("burger-menu__trigger", {"burger-menu__trigger--open": isNavbarOpen})} onClick={onTriggerChange}>
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
          <span className="burger-menu__bar"></span>
        </button>

        {isMobile && <LangSelect className="burger-menu__lang-select-mobile" />}

        <ul>
          <li className="burger-menu__item">
            <div className="burger-menu__btns">
              {!isMobile && (
                <>
                  {/* TODO: add link */}
                  <ButtonLink link={'/'} className="button-link--header burger-menu__start">Get Started</ButtonLink>
                  <LangSelect className="burger-menu__lang-select-tablet" />
                </>
              )}

              <SearchBar className="burger-menu__search" />
            </div>
          </li>

          <li className="burger-menu__item">
            <ButtonLink link={'/'} className="button-link--blank burger-menu__signin">Sign In</ButtonLink>
            
            {isMobile && (
              <ButtonLink link={'/'} className="button-link--blank burger-menu__start--tablet">Get Started</ButtonLink>
            )}
          </li>

          <li className="burger-menu__item">
            <ul className="burger-menu__navigation">
              {MENU_ITEMS.map(({ title, subItems }) => (
                <li key={title} className="burger-menu__navigation-item">
                  <Accordeon
                    key={title}
                    className="burger-menu__accordeon"
                    title={title}
                    onSelect={onSelect}
                    isOpen={selectedNavItem === title}
                  >
                    {!!subItems.length && (
                      <ul className="burger-menu__links">
                        {subItems.map(({ link, title }) => (
                          <li key={title} className="burger-menu__link-item">
                            <a className="burger-menu__link" href={link}>{title}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Accordeon>
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
