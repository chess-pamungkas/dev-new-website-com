import { MT_LANGUAGES_MAP } from "../../helpers/lang-options.config";
import { isCySEC } from "../../helpers/entity-resolver";
export const getWebTraderUrl = (selectedLanguage) => {
  const languageCode = MT_LANGUAGES_MAP[selectedLanguage.id];
  const domain = isCySEC ? `.eu` : `.com`;

  return `https://webtrader.oqtima${domain}/terminal?mode=connect&lang=${languageCode}&theme=light`;
};
