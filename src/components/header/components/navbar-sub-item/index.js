import React from "react";
import cn from "classnames";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const NavbarSubItem = ({ className, subItem = {}, onClick }) => {
  const { title, link, icon: Icon, description } = subItem;
  const { t } = useTranslation();
  const isItemHasSubtitles =
    subItem.isSubtitle && subItem.subtitles && !!subItem.subtitles.length;

  return (
    <li className={cn("dropdown-item", className)} onClick={onClick}>
      <Link className="dropdown-item__link" to={link}>
        {Icon && <Icon className="dropdown-item__icon" />}

        <div className="dropdown-item__content">
          <span className="dropdown-item__title">{t(title)}</span>

          {description && (
            <p className="dropdown-item__description">{t(description)}</p>
          )}
        </div>
      </Link>

      {isItemHasSubtitles && (
        <ul className="dropdown-item__subtitles">
          {subItem.subtitles.map((subtitle) => (
            <li
              className="menu-column__item"
              key={`footer-menu-${stringTransformToKebabCase(subtitle.title)}`}
            >
              <Link className="menu-column__link" to={subtitle.link}>
                <span className="dropdown-item__title">
                  {t(subtitle.title)}
                </span>

                {subtitle.description && (
                  <p className="dropdown-item__description">
                    {t(subtitle.description)}
                  </p>
                )}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default NavbarSubItem;
