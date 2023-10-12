import React, { useContext } from "react";
import {
  HEADER_BIG_HEIGHT,
  HEADER_SMALL_HEIGHT,
} from "../../helpers/constants";
import { useWindowSize } from "../../helpers/hooks/use-window-size";
import LanguageContext from "../../context/language-context";
import { MT_LANGUAGES_MAP } from "../../helpers/lang-options.config";

const WebTraderLink = () => {
  const { isDesktop } = useWindowSize();
  const { selectedLanguage } = useContext(LanguageContext);

  return (
    <div
      style={{
        paddingTop: isDesktop ? HEADER_BIG_HEIGHT : HEADER_SMALL_HEIGHT,
      }}
    >
      <iframe
        src={`https://webtrader.oqtima.eu/terminal?mode=connect&lang=${
          MT_LANGUAGES_MAP[selectedLanguage.id]
        }&theme=light`}
        width="100%"
        height="900px"
      ></iframe>
    </div>
  );
};

export default WebTraderLink;
