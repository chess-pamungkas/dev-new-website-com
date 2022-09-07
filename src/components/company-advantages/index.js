import React from "react";
import cn from "classnames";
import CompanyAdvantageBlock from "./components/company-advantage-block";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import { COMPANY_ADVANTAGES } from "../../helpers/config";

const CompanyAdvantages = ({ className }) => {
  return (
    <section className={cn("company-advantages", className)}>
      <div className="company-advantages__wrapper">
        {COMPANY_ADVANTAGES.map((block) => (
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
