import React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import LegalRegulatorItem from "../legal-regulator-item";

const LegalRegulators = ({ className, regulators }) => {
  const isRTL = useRtlDirection();

  return (
    <section
      className={cn("legal-regulators", className, {
        "legal-regulators--rtl": isRTL,
      })}
    >
      <div className={cn("legal-regulators__wrapper")}>
        <div className="legal-regulators__items">
          {regulators.length > 0 &&
            regulators.map((item) => (
              <LegalRegulatorItem
                key={`regulator-${item.title}`}
                icon={item.icon}
                title={item.title}
                titleAccent={item.titleAccent}
                text={item.text}
                anchorLink={item.anchorLink}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default LegalRegulators;
