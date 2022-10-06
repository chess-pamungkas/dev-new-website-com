import React, { useContext, useEffect, useState } from "react";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import Performance from "../../performance";
import entities from "../../../enums/entities";
import { CYSEC_ADVANTAGES, FSA_ADVANTAGES } from "../../../helpers/config";
import ClientResolverContext from "../../../context/client-resolver-context";

const PerformanceContent = () => {
  const { currentEntity } = useContext(ClientResolverContext);
  const [advantages, setAdvantages] = useState([]);

  useEffect(() => {
    setAdvantages(
      currentEntity === entities.CYSEC ? CYSEC_ADVANTAGES : FSA_ADVANTAGES
    );
  }, [currentEntity]);

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
      advantages={advantages}
    />
  );
};

export default PerformanceContent;
