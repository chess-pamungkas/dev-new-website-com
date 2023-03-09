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
import { LANG_CONFIG, FSA_LANG_CONFIG, CYSEC_LANG_CONFIG } from "./lang.config";

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

export const CYSEC_LANG_SELECT_OPTIONS = CYSEC_LANG_CONFIG.map(
  (languageItem) => {
    languageItem.icon = IconComponents[languageItem.icon];

    return languageItem;
  }
);

export const SHOULD_BE_SMALLER_LANGUAGES = ["Русский", "Ελληνικά"];

export const FXBO_LANG_COOKIE_KEYS_MAP = {
  en: "en",
  es: "es",
  tw: "zh_Hant",
  fr: "ft",
  it: "it",
  pt: "pt",
  cn: "zh",
  vn: "vi",
  th: "th",
};

export const FXBO_LANG_URL_KEYS_MAP = {
  en: "",
  es: "/es",
  tw: "/zh_Hant",
  fr: "/ft",
  it: "/it",
  pt: "/pt",
  cn: "/zh",
  vn: "/vi",
  th: "/th",
};
