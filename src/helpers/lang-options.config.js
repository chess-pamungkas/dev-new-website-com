import {
  CnFlagIcon,
  DeFlagIcon,
  EnFlagIcon,
  EsFlagIcon,
  FrFlagIcon,
  IdFlagIcon,
  ItFlagIcon,
  JpFlagIcon,
  PtFlagIcon,
  ThFlagIcon,
  VnFlagIcon,
  BrFlagIcon,
} from "../components/shared/icons";
import { ENTITY_LANGUAGES } from "./lang.config";

const IconComponents = {
  EnFlagIcon: EnFlagIcon,
  DeFlagIcon: DeFlagIcon,
  FrFlagIcon: FrFlagIcon,
  PtFlagIcon: PtFlagIcon,
  EsFlagIcon: EsFlagIcon,
  ItFlagIcon: ItFlagIcon,
  CnFlagIcon: CnFlagIcon,
  VnFlagIcon: VnFlagIcon,
  ThFlagIcon: ThFlagIcon,
  IdFlagIcon: IdFlagIcon,
  JpFlagIcon: JpFlagIcon,
  BrFlagIcon: BrFlagIcon,
};

export const LANG_SELECT_OPTIONS = ENTITY_LANGUAGES.map((languageItem) => {
  languageItem.icon = IconComponents[languageItem.icon];

  return languageItem;
});

export const SHOULD_BE_SMALLER_LANGUAGES = ["Русский", "Ελληνικά"];
