import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import { PERFORMANCE_TITLE } from "../../helpers/promo-texts";
import { Logo } from "../shared/icons";
import { CYSEC_ADVANTAGES, FSA_ADVANTAGES } from "../../helpers/config";
import AdvantageBlock from "./components/advantage-block";
import ClientResolverContext from "../../context/client-resolver-context";
import entities from "../../enums/entities";

const Performance = ({ className }) => {
  const { currentEntity } = useContext(ClientResolverContext);
  const [advantages, setAdvantages] = useState([]);

  useEffect(() => {
    setAdvantages(
      currentEntity === entities.CYSEC ? CYSEC_ADVANTAGES : FSA_ADVANTAGES
    );
  }, [currentEntity]);

  return (
    <section className={cn("performance", className)}>
      <div className="performance__title-wrapper">
        <Logo className="performance__icon" />
        <h2 className="performance__title">{PERFORMANCE_TITLE}</h2>
      </div>
      <div className="performance__advantages">
        {advantages.length > 0 &&
          advantages.map((block, i) => (
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
