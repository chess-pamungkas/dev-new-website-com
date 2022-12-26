import React from "react";
import cn from "classnames";
import { DIR_LTR, DIR_RTL } from "../../../helpers/constants";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import { ELIGIBILITY_LIST } from "../../../helpers/professional-qualification.config";

const EligibilityList = ({ className }) => {
  const isRTL = useRtlDirection();

  return (
    <div
      className={cn("pq-eligibility-list", className, {
        "pq-eligibility-list--rtl": isRTL,
      })}
      id="eligibilityCriteria"
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      {ELIGIBILITY_LIST.map((item) => (
        <span key={item.index} className="pq-eligibility-list__item">
          <HighlightedLocalizationText
            localizationText={item.text}
            wordsToHighlight={item.textAccent}
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </span>
      ))}
    </div>
  );
};

export default EligibilityList;
