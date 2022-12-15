import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import cn from "classnames";
import { DIR_LTR, DIR_RTL } from "../../../../helpers/constants";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import FeaturedIdeasTabs from "../featured-ideas-tabs";

const FeaturedIdeas = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <section
      id="featuredIdeas"
      className={cn("featured-ideas", className, {
        "featured-ideas--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="featured-ideas__wrapper">
        <div className="featured-ideas__title-wrapper">
          <h2 className="featured-ideas__title">
            {t("trading-tools_featured-ideas_title")}
          </h2>
          <p className="featured-ideas__subtitle">
            {t("trading-tools_featured-ideas_subtitle")}
          </p>
          <p className="featured-ideas__description">
            {t("trading-tools_featured-ideas_description")}
          </p>
        </div>
        <FeaturedIdeasTabs />
      </div>
    </section>
  );
};

export default FeaturedIdeas;
