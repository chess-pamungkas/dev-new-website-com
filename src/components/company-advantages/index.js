import React from "react";
import cn from "classnames";
import CompanyAdvantageBlock from "./components/company-advantage-block";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import {
  COMPANY_ADVANTAGES,
  CYSEC_COMPANY_ADVANTAGES,
} from "../../helpers/config";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";
import { isCySEC } from "../../helpers/entity-resolver";

const getCompanyAdvantagesBlock = (isCySEC) =>
  isCySEC ? CYSEC_COMPANY_ADVANTAGES : COMPANY_ADVANTAGES;

const CompanyAdvantages = ({ className }) => {
  const isRTL = useRtlDirection();
  return (
    <section
      className={cn("company-advantages", className, {
        "company-advantages--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="company-advantages__wrapper">
        {getCompanyAdvantagesBlock(isCySEC).map((block) => (
          <CompanyAdvantageBlock
            key={`company-advantage-${stringTransformToKebabCase(block.title)}`}
            icon={block.icon}
            title={block.title}
            textArray={block.textArray}
          />
        ))}
      </div>
    </section>
  );
};

export default CompanyAdvantages;
