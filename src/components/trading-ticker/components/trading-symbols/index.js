import React, { useRef, useState, useEffect } from "react";
import TradingSymbol from "../trading-symbol";
import cn from "classnames";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";

const TradingSymbols = ({ className, symbols }) => {
  const symbolsRef = useRef();
  const isRTL = useRtlDirection();
  const [isTouched, setIsTouched] = useState(false);
  const [isInfiniteAutoScroll, setIsInfiniteAutoScroll] = useState(true);

  // check is scroll passed center of scroll width
  const isMiddleOfScroll = (width, offset) => Math.abs(offset) > width / 2;
  // check is scroll passed center of scroll width in reversed direction, used for check when manual scroll is active
  const isMiddleOfScrollReversed = (width, offset) =>
    Math.abs(offset) < width / 2;

  const performScroll = () => {
    const symbolsContainer = document.getElementById("trading-symbols");
    const scrollWidth = symbolsContainer.scrollWidth;
    const scrollLeft = symbolsContainer.scrollLeft;

    if (isMiddleOfScroll(scrollWidth, scrollLeft)) {
      // move first child to the end when center of scroll width passed
      const first = document.querySelector("#trading-symbols .trading-symbol");
      symbolsContainer.appendChild(first);
      symbolsContainer.scrollTo(scrollLeft - first.offsetWidth, 0);
    }
    if (isMiddleOfScrollReversed(scrollWidth, scrollLeft) && isTouched) {
      // move last child to the start when center of scroll width passed in reversed direction while manual scroll is active
      const lastchild = symbolsContainer.lastChild;
      symbolsContainer.prepend(lastchild);
      symbolsContainer.scrollTo(scrollLeft + lastchild.offsetWidth, 0);
    }
    // perform auto scroll when not touched
    if (scrollLeft !== scrollWidth && !isTouched) {
      symbolsContainer.scrollTo(scrollLeft + 1, 0);
    }
  };

  const performScrollRTL = () => {
    const symbolsContainer = document.getElementById("trading-symbols");
    const scrollWidth = symbolsContainer.scrollWidth;
    const scrollLeft = symbolsContainer.scrollLeft;

    if (isMiddleOfScroll(scrollWidth, scrollLeft)) {
      const first = document.querySelector("#trading-symbols .trading-symbol");
      symbolsContainer.appendChild(first);
      symbolsContainer.scrollTo(scrollLeft - -first.offsetWidth, 0);
    }
    if (isMiddleOfScrollReversed(scrollWidth, scrollLeft) && isTouched) {
      const lastchild = symbolsContainer.lastChild;
      symbolsContainer.prepend(lastchild);
      symbolsContainer.scrollTo(scrollLeft + -lastchild.offsetWidth, 0);
    }
    if (scrollLeft !== scrollWidth && !isTouched) {
      symbolsContainer.scrollTo(scrollLeft - 1, 0);
    }
  };

  useEffect(() => {
    if (isInfiniteAutoScroll) {
      const intervalId = setInterval(
        isRTL ? performScrollRTL : performScroll,
        20
      );

      return () => {
        clearInterval(intervalId);
        // const symbolsContainer = document.getElementById("trading-symbols");
        // scrollLeft = 0;
      };
    }
  }, [isTouched, isRTL, isInfiniteAutoScroll]);

  return (
    <div
      className={cn("trading-symbols-wrapper", className, {
        "trading-symbols-wrapper--rtl": isRTL,
      })}
    >
      <div className="scroll-disabler"></div>
      <div
        id="trading-symbols"
        className={cn("trading-symbols", {
          "trading-symbols--centered": !isInfiniteAutoScroll,
        })}
        ref={symbolsRef}
        onTouchStart={() => setIsTouched(true)}
        onTouchEnd={() => setIsTouched(false)}
      >
        {symbols &&
          symbols.map((symbol, key) => (
            <TradingSymbol
              key={`TradingSymbol${symbol.symbol}-${key}`}
              {...symbol}
            />
          ))}
      </div>
    </div>
  );
};

export default TradingSymbols;
