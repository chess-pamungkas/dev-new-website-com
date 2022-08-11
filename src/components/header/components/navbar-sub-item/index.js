import React from 'react';
import cn from 'classnames';

const NavbarSubItem = ({className, subItem = {}}) => {
  const {title, link, icon, description} = subItem;

  return (
    <li className={cn("dropdown-item", className)}>
      <a className="dropdown-item__link" href={link}>
        {icon ? icon : null}

        <div className="dropdown-item__content">
          <span className="dropdown-item__title">
            {title}
          </span>
          {description && (
            <p className="dropdown-item__description">
              {description}
            </p>
          )}
        </div>
      </a>
    </li>
  );
};

export default NavbarSubItem;
