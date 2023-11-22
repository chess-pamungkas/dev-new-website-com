import React, { useRef, useState, useEffect } from "react";
import TradingSymbol from "../trading-symbol";
import cn from "classnames";
import scrollArrow from "../../../../assets/images/trading-ticker/scroll-arrow.svg";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";

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
  const isRTL = useRtlDirection();

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

  const isEndOfScrollRTL = () => {
    if (
      Math.floor(
        symbolsRef.current.scrollWidth + symbolsRef.current.scrollLeft
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
    setScrollEnd(isRTL ? isEndOfScrollRTL() : isEndOfScroll());
  };

  const scrollCheck = () => {
    setScrollX(symbolsRef.current.scrollLeft);
    setScrollEnd(isRTL ? isEndOfScrollRTL() : isEndOfScroll());
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
      className={cn(
        "trading-symbols-wrapper",
        className,
        {
          "trading-symbols-wrapper--infinite-auto-scroll": isInfiniteAutoScroll,
        },
        {
          "trading-symbols-wrapper--rtl": isRTL,
        }
      )}
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
            (symbol, key) => (
              <TradingSymbol
                key={`TradingSymbol${symbol.symbol}-${key}`}
                {...symbol}
              />
            )
          )}
        {((scrollX > 0 && !isRTL) || (!scrollEnd && isRTL)) && (
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
        {(!scrollEnd & !isRTL || (scrollX < 0 && isRTL)) && (
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
