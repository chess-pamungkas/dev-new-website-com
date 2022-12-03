import React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";

const JobOpenings = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <section
      className={cn("job-openings", className, {
        "job-openings--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="job-openings__wrapper">
        <h2 className="job-openings__title">
          {t("career_job-openings_title")}
        </h2>
        <div className="job-openings__vacancy-wrapper">

        </div>
      </div>
    </section>
  );
};

export default JobOpenings;
