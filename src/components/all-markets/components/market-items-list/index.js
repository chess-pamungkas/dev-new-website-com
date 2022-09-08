import React, { useState, useContext, useEffect } from "react";
import cn from "classnames";
import {
  CYSEC_ALL_MARKETS,
  FSA_ALL_MARKETS,
} from "../../../../helpers/all-markets.config";
import ClientResolverContext from "../../../../context/client-resolver-context";
import entities from "../../../../enums/entities";
import MarketItem from "../market-item";

const MarketItemsList = ({ className }) => {
  const [markets, setMarkets] = useState([]);
  const { currentEntity } = useContext(ClientResolverContext);

  useEffect(() => {
    setMarkets(
      currentEntity === entities.CYSEC ? CYSEC_ALL_MARKETS : FSA_ALL_MARKETS
    );
  }, [currentEntity]);

  return (
    <section className={cn("market-items-list", className)}>
      {markets.map((item) => (
        <MarketItem {...item} />
      ))}
    </section>
  );
};

export default MarketItemsList;
