import React from "react";
import {
  HEADER_BIG_HEIGHT,
  HEADER_SMALL_HEIGHT,
} from "../../helpers/constants";
import { useWindowSize } from "../../helpers/hooks/use-window-size";

const Mt4WebTraderLink = () => {
  const { isDesktop } = useWindowSize();

  return (
    <div
      style={{
        paddingTop: isDesktop ? HEADER_BIG_HEIGHT : HEADER_SMALL_HEIGHT,
      }}
    >
      <iframe src="/mt4-webtrader.html" width="100%" height="650px"></iframe>
    </div>
  );
};

export default Mt4WebTraderLink;
