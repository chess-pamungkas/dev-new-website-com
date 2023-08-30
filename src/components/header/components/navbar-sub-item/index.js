import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import InternalLink from "../../../shared/internal-link";

const NavbarSubItem = ({ className, subItem = {}, onClick }) => {
  const { title, link, icon: Icon, description } = subItem;
  const { t } = useTranslation();

  return (
    <li className={cn("dropdown-item", className)} onClick={onClick}>
      <InternalLink className="dropdown-item__link" to={link}>
        {Icon && <Icon className="dropdown-item__icon" />}

        <div className="dropdown-item__content">
          <span className="dropdown-item__title">{t(title)}</span>

          {description && (
            <p className="dropdown-item__description">{t(description)}</p>
          )}
        </div>
      </InternalLink>
    </li>
  );
};

export default NavbarSubItem;
