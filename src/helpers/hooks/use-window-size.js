import { useEffect, useState, useCallback } from "react";
import { WINDOW_SIZE_MD, WINDOW_SIZE_LG, WINDOW_SIZE_XL } from "../constants";

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" && window.innerWidth,
    height: typeof window !== "undefined" && window.innerHeight,
  });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  return {
    ...windowSize,
    isMobile: windowSize.width < WINDOW_SIZE_MD,
    isMD:
      windowSize.width >= WINDOW_SIZE_MD && windowSize.width < WINDOW_SIZE_LG,
    isTablet: windowSize.width < WINDOW_SIZE_LG,
    isDesktop: windowSize.width >= WINDOW_SIZE_LG,
    isLG:
      windowSize.width >= WINDOW_SIZE_LG && windowSize.width < WINDOW_SIZE_XL,
    isXL: windowSize.width >= WINDOW_SIZE_XL,
  };
};
