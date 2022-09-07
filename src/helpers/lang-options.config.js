import {
  EnFlagIcon,
  DeFlagIcon,
  FrFlagIcon,
  PlFlagIcon,
  PtFlagIcon,
  DaFlagIcon,
  FiFlagIcon,
  EsFlagIcon,
  RuFlagIcon,
  ArFlagIcon,
  NlFlagIcon,
  SwFlagIcon,
  RoFlagIcon,
  ItFlagIcon,
  CnFlagIcon,
  NoFlagIcon,
  CzFlagIcon,
  VnFlagIcon,
  ThFlagIcon,
  MyFlagIcon,
  IdFlagIcon,
  KrFlagIcon,
  JpFlagIcon,
  InFlagIcon,
  BdFlagIcon,
  GrFlagIcon,
  PhFlagIcon,
} from "../components/shared/icons";
import { LANG_CONFIG } from "./lang.config";

const IconComponents = {
  "EnFlagIcon": EnFlagIcon,
  "DeFlagIcon": DeFlagIcon,
  "FrFlagIcon": FrFlagIcon,
  "PlFlagIcon": PlFlagIcon,
  "PtFlagIcon": PtFlagIcon,
  "DaFlagIcon": DaFlagIcon,
  "FiFlagIcon": FiFlagIcon,
  "EsFlagIcon": EsFlagIcon,
  "RuFlagIcon": RuFlagIcon,
  "ArFlagIcon": ArFlagIcon,
  "NlFlagIcon": NlFlagIcon,
  "SwFlagIcon": SwFlagIcon,
  "RoFlagIcon": RoFlagIcon,
  "ItFlagIcon": ItFlagIcon,
  "CnFlagIcon": CnFlagIcon,
  "NoFlagIcon": NoFlagIcon,
  "CzFlagIcon": CzFlagIcon,
  "VnFlagIcon": VnFlagIcon,
  "ThFlagIcon": ThFlagIcon,
  "MyFlagIcon": MyFlagIcon,
  "IdFlagIcon": IdFlagIcon,
  "KrFlagIcon": KrFlagIcon,
  "JpFlagIcon": JpFlagIcon,
  "InFlagIcon": InFlagIcon,
  "BdFlagIcon": BdFlagIcon,
  "GrFlagIcon": GrFlagIcon,
  "PhFlagIcon": PhFlagIcon,
};

export const LANG_SELECT_OPTIONS = LANG_CONFIG.map(languageItem => {
  const IconComponent = IconComponents[languageItem.icon];
  languageItem.icon = IconComponent;

  return languageItem;
});

export const SHOULD_BE_SMALLER_LANGUAGES = ["Русский", "Ελληνικά"];
