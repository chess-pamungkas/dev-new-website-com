import React from "react";
import cn from "classnames";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import { useEntityPostfix } from "../../../../helpers/use-entity-postfix";

const MenuColumn = ({ className, items }) => {
  const { t } = useTranslation();
  const { isCySEC } = useEntityPostfix();

  return (
    <ul className={cn("menu-column", className)}>
      {items.map((item) => {
        const isItemHasSubtitles =
          item.isSubtitle && item.subtitles && !!item.subtitles.length;

        return (
          <li
            className="menu-column__item"
            key={`footer-menu-${stringTransformToKebabCase(item.title)}`}
          >
            <Link
              className={cn("menu-column__link", {
                "menu-column__link--bold": item.isSubtitle && !isCySEC,
              })}
              to={item.link}
            >
              {t(item.title)}
            </Link>

            {isItemHasSubtitles && (
              <ul className="menu-column__subtitles">
                {item.subtitles.map((subitem) => (
                  <li
                    className="menu-column__item"
                    key={`footer-menu-${stringTransformToKebabCase(
                      subitem.title
                    )}`}
                  >
                    <Link className="menu-column__link" to={subitem.link}>
                      {t(subitem.title)}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default MenuColumn;
