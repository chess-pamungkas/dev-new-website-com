import React, { useRef, useState, useEffect } from "react";
import TradingSymbol from "../trading-symbol";
import cn from "classnames";
import scrollArrow from "../../../../assets/images/trading-ticker/scroll-arrow.svg";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";

const TradingSymbols = ({
  className,
  symbols,
  isInfiniteAutoScroll,
  animationDuration,
}) => {
  const symbolsRef = useRef();
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);
  const { width } = useWindowSize();
  const defaultScrollOffset = width * 0.8;

  const isEndOfScroll = () => {
    if (
      Math.floor(
        symbolsRef.current.scrollWidth - symbolsRef.current.scrollLeft
      ) <= symbolsRef.current.offsetWidth
    ) {
      return true;
    } else {
      return false;
    }
  };

  const scrollLeft = (scrollOffset) => {
    symbolsRef.current.scrollLeft += scrollOffset;
    setScrollX(scrollX + scrollOffset);
    setScrollEnd(isEndOfScroll());
  };

  const scrollCheck = () => {
    setScrollX(symbolsRef.current.scrollLeft);
    setScrollEnd(isEndOfScroll());
  };

  useEffect(() => {
    if (
      symbolsRef.current &&
      symbolsRef?.current?.scrollWidth === symbolsRef?.current?.offsetWidth
    ) {
      setScrollEnd(true);
    } else {
      setScrollEnd(false);
    }
    return () => {};
  }, [symbolsRef?.current?.scrollWidth, symbolsRef?.current?.offsetWidth]);

  return (
    <div
      className={cn("trading-symbols-wrapper", className, {
        "trading-symbols-wrapper--infinite-auto-scroll": isInfiniteAutoScroll,
      })}
    >
      <div
        className={cn("trading-symbols", {
          "trading-symbols--infinite-auto-scroll": isInfiniteAutoScroll,
        })}
        ref={symbolsRef}
        onScroll={scrollCheck}
        style={
          animationDuration ? { animationDuration: animationDuration } : {}
        }
      >
        {symbols &&
          (isInfiniteAutoScroll ? symbols.concat(symbols) : symbols).map(
            (symbol) => (
              <TradingSymbol
                key={`TradingSymbol${symbol.symbol}`}
                {...symbol}
              />
            )
          )}
        {scrollX > 0 && (
          <img
            src={scrollArrow}
            alt=""
            className={cn("trading-symbols__arrow-left", {
              "trading-symbols__arrow-left--disabled": isInfiniteAutoScroll,
            })}
            onClick={() => {
              scrollLeft(-defaultScrollOffset);
            }}
          />
        )}
        {!scrollEnd && (
          <img
            src={scrollArrow}
            alt=""
            className={cn("trading-symbols__arrow-right", {
              "trading-symbols__arrow-right--disabled": isInfiniteAutoScroll,
            })}
            onClick={() => {
              scrollLeft(defaultScrollOffset);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default TradingSymbols;
