import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CopyRightBlock from "./components/copy-right-block";
import { LogoTextMain } from "../shared/icons";
import { FOOTER_TEXT } from "../../helpers/footer.config";
import Menu from "./components/menu";

const Footer = ({ className }) => {
  const { t } = useTranslation();

  return (
    <footer className={cn("footer", className)}>
      <div className="footer__wrapper">
        <div className="footer__logo-wrapper">
          <LogoTextMain />
          <p className="footer__text">{t(FOOTER_TEXT)}</p>
        </div>
        <div className="footer__menu-wrapper">
          <Menu />
        </div>
      </div>
      <CopyRightBlock />
    </footer>
  );
};

export default Footer;
