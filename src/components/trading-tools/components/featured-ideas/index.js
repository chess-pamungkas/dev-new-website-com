import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import {
  DIR_LTR,
  DIR_RTL,
  GetRegistrationLink,
} from "../../../../helpers/constants";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import FeaturedIdeasTabs from "../featured-ideas-tabs";
import ButtonLink from "../../../shared/button-link";

const FeaturedIdeas = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslationWithVariables();

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
        <ButtonLink
          link={GetRegistrationLink()}
          className="button-link button-link--red trading-tools-btn"
        >
          {t("trading-tools_top-market-promo-btn3")}
        </ButtonLink>
      </div>
    </section>
  );
};

FeaturedIdeas.propTypes = {
  className: PropTypes.string,
};
export default FeaturedIdeas;
