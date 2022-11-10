import React from "react";
import cn from "classnames";
import image from "../../assets/images/all-markets/markets-image.svg";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";

const AllMarkets = ({ className }) => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <section
      className={cn("all-markets", className, {
        "all-markets--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="all-markets__wrapper">
        <div className="all-markets__block">
          <h2 className="all-markets__title">
            {t("all-markets_all-markets-title")}
          </h2>
          <div className="all-markets__text">
            {t("all-markets_all-markets-text")}
          </div>
        </div>
        <div className={cn("all-markets__block", "all-markets__block--flexed")}>
          <img src={image} alt="" className="all-markets__img" />
        </div>
      </div>
    </section>
  );
};

export default AllMarkets;
