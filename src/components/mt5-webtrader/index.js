import React from "react";
import {
  HEADER_BIG_HEIGHT,
  HEADER_SMALL_HEIGHT,
} from "../../helpers/constants";
import { useWindowSize } from "../../helpers/hooks/use-window-size";

const WebTraderLink = () => {
  const { isDesktop } = useWindowSize();

  return (
    <div
      style={{
        paddingTop: isDesktop ? HEADER_BIG_HEIGHT : HEADER_SMALL_HEIGHT,
      }}
    >
      <iframe
        src="https://webtrader.oqtima.eu/terminal?mode=connect&lang=en&theme=light"
        width="100%"
        height="900px"
      ></iframe>
    </div>
  );
};

export default WebTraderLink;
