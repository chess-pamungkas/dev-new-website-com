import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import MenuColumn from "../menu-column";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import {
  CYSEC_MENU_ITEMS,
  FSA_MENU_ITEMS,
} from "../../../../helpers/menu.config";
import ClientResolverContext from "../../../../context/client-resolver-context";
import entities from "../../../../enums/entities";

const Menu = ({ className }) => {
  const { t } = useTranslation();
  const { currentEntity } = useContext(ClientResolverContext);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    setMenu(
      currentEntity === entities.CYSEC ? CYSEC_MENU_ITEMS : FSA_MENU_ITEMS
    );
  }, [currentEntity]);

  return (
    <div className={cn("menu", className)}>
      {menu.length > 0 &&
        menu.map((item) => (
          <div
            key={`footer-menu-${stringTransformToKebabCase(item.title)}`}
            className="menu__wrapper"
          >
            <h4 className="menu__column-title">{t(item.title)}</h4>
            <MenuColumn items={item.subItems} />
          </div>
        ))}
    </div>
  );
};

export default Menu;
