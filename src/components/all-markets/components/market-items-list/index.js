import React, { useState, useEffect } from "react";
import cn from "classnames";
import {
  CYSEC_ALL_MARKETS,
  FSA_ALL_MARKETS,
} from "../../../../helpers/all-markets.config";
import MarketItem from "../market-item";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../../../helpers/constants";
import { useEntityPostfix } from "../../../../helpers/use-entity-postfix";

const MarketItemsList = ({ className }) => {
  const [markets, setMarkets] = useState([]);
  const isRTL = useRtlDirection();
  const { isCySEC } = useEntityPostfix();

  useEffect(() => {
    setMarkets(isCySEC ? CYSEC_ALL_MARKETS : FSA_ALL_MARKETS);
  }, [isCySEC]);

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
