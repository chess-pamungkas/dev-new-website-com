import React from "react";
import cn from "classnames";
import AdvantageBlock from "../../../performance/components/advantage-block";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";

const PartnersAdvantages = ({ className, title, advantages }) => {
  return (
    <section className={cn("partners-advantages", className)}>
      <h2 className="partners-advantages__title">{title}</h2>
      <div className="partners-advantages__advantages">
        {advantages.length > 0 &&
          advantages.map((block) => (
            <AdvantageBlock
              key={`advantage-${stringTransformToKebabCase(block.text)}`}
              icon={block.icon}
              text={block.text}
              accent={block.accent}
            />
          ))}
      </div>
    </section>
  );
};

export default PartnersAdvantages;
