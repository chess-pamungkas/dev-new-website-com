import React, { useState, useContext, useEffect } from "react";
import cn from "classnames";
import {
  CYSEC_ALL_MARKETS,
  FSA_ALL_MARKETS,
} from "../../../../helpers/all-markets.config";
import ClientResolverContext from "../../../../context/client-resolver-context";
import entities from "../../../../enums/entities";
import MarketItem from "../market-item";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../../../helpers/constants";

const MarketItemsList = ({ className }) => {
  const [markets, setMarkets] = useState([]);
  const { currentEntity } = useContext(ClientResolverContext);
  const isRTL = useRtlDirection();

  useEffect(() => {
    setMarkets(
      currentEntity === entities.CYSEC ? CYSEC_ALL_MARKETS : FSA_ALL_MARKETS
    );
  }, [currentEntity]);

  return (
    <section
      className={cn("market-items-list", className, {
        "market-items-list--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      {markets.map((item) => (
        <MarketItem key={`market-item-${item.title}`} {...item} />
      ))}
    </section>
  );
};

export default MarketItemsList;
