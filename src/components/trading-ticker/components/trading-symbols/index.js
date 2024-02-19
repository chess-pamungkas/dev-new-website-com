import React, { useRef, useState, useEffect } from "react";
import TradingSymbol from "../trading-symbol";
import cn from "classnames";
import scrollArrow from "../../../../assets/images/trading-ticker/scroll-arrow.svg";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";

const TradingSymbols = ({
  className,
  symbols,
}) => {
  const symbolsRef = useRef();
  const { width } = useWindowSize();
  const isRTL = useRtlDirection();

  useEffect(() => {
    const isMiddleOfScroll = (width, offset) => offset > (width / 2);

    const performScroll = () => {
      const symbolsContainer = document.getElementById('trading-symbols');
      const first = document.querySelector('#trading-symbols .trading-symbol');
      // console.log(first.offsetWidth, first)
  
      if(isMiddleOfScroll(symbolsContainer.scrollWidth, symbolsContainer.scrollLeft)){
          console.log(first.getBoundingClientRect())
          symbolsContainer.appendChild(first);
          symbolsContainer.scrollTo(symbolsContainer.scrollLeft - first.offsetWidth, 0);
        }
        if (symbolsContainer.scrollLeft !== symbolsContainer.scrollWidth) {
          symbolsContainer.scrollTo(symbolsContainer.scrollLeft + 1, 0);
        }
    }

    const intervalId = setInterval(performScroll, 20);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div
      className={cn("trading-symbols-wrapper", className, {
        "trading-symbols-wrapper--rtl": isRTL,
      })}
    >
      <div className="scroll-disabler"></div>
      <div
        id="trading-symbols"
        className={"trading-symbols"}
        ref={symbolsRef}
      >
        {symbols &&
          symbols.map(
            (symbol, key) => (
              <TradingSymbol
                key={`TradingSymbol${symbol.symbol}-${key}`}
                {...symbol}
              />
            )
          )}
      </div>
    </div>
  );
};

export default TradingSymbols;