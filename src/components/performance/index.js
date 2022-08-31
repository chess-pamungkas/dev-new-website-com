import React, { useContext, useEffect, useState } from "react";
import cn from "classnames";
import { Logo } from "../shared/icons";
import { CYSEC_ADVANTAGES, FSA_ADVANTAGES } from "../../helpers/config";
import AdvantageBlock from "./components/advantage-block";
import ClientResolverContext from "../../context/client-resolver-context";
import entities from "../../enums/entities";
import HighlightedLocalizationText from '../shared/highlighted-localization-text';

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
        <h2 className="performance__title">
          <HighlightedLocalizationText
            localizationText="index_performance-title1"
            wordsToHighlight="performance-title1-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          >
            <br />
            <HighlightedLocalizationText
              localizationText="index_performance-title2"
              wordsToHighlight="performance-title2-accent"
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          </HighlightedLocalizationText>
        </h2>
      </div>
      <div className="performance__advantages">
        {advantages.length > 0 &&
          advantages.map((block, i) => (
            <AdvantageBlock
              key={`advantage-${i}`}
              icon={block.icon}
              text={block.text}
              accent={block.accent}
            />
          ))}
      </div>
    </section>
  );
};

export default Performance;
