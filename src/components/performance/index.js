import React from "react";
import cn from "classnames";
import { PERFORMANCE_TITLE } from "../../helpers/promo-texts";
import { Logo } from "../shared/icons";
import { ADVANTAGES } from "../../helpers/config";
import AdvantageBlock from "./components/advantage-block";

const Performance = ({ className }) => {
  return (
    <section className={cn("performance", className)}>
      <div>
        <Logo />
        <h2>{PERFORMANCE_TITLE}</h2>
      </div>
      <div>
        {ADVANTAGES.map((block) => (
          <AdvantageBlock
            key={`advantage-${block.text}`}
            icon={block.icon}
            text={block.text}
          />
        ))}
      </div>
    </section>
  );
};

export default Performance;
