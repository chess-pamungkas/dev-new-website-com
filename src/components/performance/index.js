import React from "react";
import cn from "classnames";
import { PERFORMANCE_TITLE } from "../../helpers/promo-texts";
import { Logo } from "../shared/icons";
import { ADVANTAGES } from "../../helpers/config";
import AdvantageBlock from "./components/advantage-block";

const Performance = ({ className }) => {
  return (
    <section className={cn("performance", className)}>
      <div className="performance__title-wrapper">
        <Logo className="performance__icon" />
        <h2 className="performance__title">{PERFORMANCE_TITLE}</h2>
      </div>
      <div className="performance__advantages">
        {ADVANTAGES.map((block, i) => (
          <AdvantageBlock
            key={`advantage-${i}`}
            icon={block.icon}
            text={block.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Performance;
