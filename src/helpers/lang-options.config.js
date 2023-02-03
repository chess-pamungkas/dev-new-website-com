import {
  ArFlagIcon,
  BdFlagIcon,
  CnFlagIcon,
  CzFlagIcon,
  DaFlagIcon,
  DeFlagIcon,
  EnFlagIcon,
  EsFlagIcon,
  FiFlagIcon,
  FrFlagIcon,
  GrFlagIcon,
  IdFlagIcon,
  InFlagIcon,
  ItFlagIcon,
  JpFlagIcon,
  KrFlagIcon,
  MyFlagIcon,
  NlFlagIcon,
  NoFlagIcon,
  PhFlagIcon,
  PlFlagIcon,
  PtFlagIcon,
  RoFlagIcon,
  RuFlagIcon,
  SwFlagIcon,
  ThFlagIcon,
  VnFlagIcon,
  BrFlagIcon,
} from "../components/shared/icons";
import { LANG_CONFIG } from "./lang.config";

const IconComponents = {
  EnFlagIcon: EnFlagIcon,
  DeFlagIcon: DeFlagIcon,
  FrFlagIcon: FrFlagIcon,
  PlFlagIcon: PlFlagIcon,
  PtFlagIcon: PtFlagIcon,
  DaFlagIcon: DaFlagIcon,
  FiFlagIcon: FiFlagIcon,
  EsFlagIcon: EsFlagIcon,
  RuFlagIcon: RuFlagIcon,
  ArFlagIcon: ArFlagIcon,
  NlFlagIcon: NlFlagIcon,
  SwFlagIcon: SwFlagIcon,
  RoFlagIcon: RoFlagIcon,
  ItFlagIcon: ItFlagIcon,
  CnFlagIcon: CnFlagIcon,
  NoFlagIcon: NoFlagIcon,
  CzFlagIcon: CzFlagIcon,
  VnFlagIcon: VnFlagIcon,
  ThFlagIcon: ThFlagIcon,
  MyFlagIcon: MyFlagIcon,
  IdFlagIcon: IdFlagIcon,
  KrFlagIcon: KrFlagIcon,
  JpFlagIcon: JpFlagIcon,
  InFlagIcon: InFlagIcon,
  BdFlagIcon: BdFlagIcon,
  GrFlagIcon: GrFlagIcon,
  PhFlagIcon: PhFlagIcon,
  BrFlagIcon: BrFlagIcon,
};

export const LANG_SELECT_OPTIONS = LANG_CONFIG.map((languageItem) => {
  languageItem.icon = IconComponents[languageItem.icon];

  return languageItem;
});

export const SHOULD_BE_SMALLER_LANGUAGES = ["Русский", "Ελληνικά"];
