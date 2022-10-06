import React from "react";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import Performance from "../../performance";
import { CYSEC_ADVANTAGES, FSA_ADVANTAGES } from "../../../helpers/config";
import { useEntityPostfix } from "../../../helpers/use-entity-postfix";

const PerformanceContent = () => {
  const { isCySEC } = useEntityPostfix();

  return (
    <Performance
      title={
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
      }
      advantages={isCySEC ? CYSEC_ADVANTAGES : FSA_ADVANTAGES}
    />
  );
};

export default PerformanceContent;
