import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import CopyRightBlock from "./components/copy-right-block";
import { LogoTextMain } from "../shared/icons";
import { getFooterText } from "../../helpers/footer.config";
import Menu from "./components/menu";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";

const Footer = ({ className }) => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <footer
      className={cn("footer", className, {
        "footer--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="footer__wrapper">
        <div className="footer__logo-wrapper">
          <LogoTextMain />
          <p className="footer__text">{t(getFooterText())}</p>
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
