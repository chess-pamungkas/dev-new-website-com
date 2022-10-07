import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CopyRightBlock from "./components/copy-right-block";
import { LogoTextMain } from "../shared/icons";
import { FOOTER_TEXT, FOOTER_TEXT_FSA } from "../../helpers/footer.config";
import Menu from "./components/menu";
import { useEntityPostfix } from "../../helpers/use-entity-postfix";

const Footer = ({ className }) => {
  const { t } = useTranslation();
  const { isCySEC } = useEntityPostfix();

  return (
    <footer className={cn("footer", className)}>
      <div className="footer__wrapper">
        <div className="footer__logo-wrapper">
          <LogoTextMain />
          <p className="footer__text">
            {t(isCySEC ? FOOTER_TEXT : FOOTER_TEXT_FSA)}
          </p>
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
