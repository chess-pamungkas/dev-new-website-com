const LANG_CONFIG = [
  // English
  {
    id: "en",
    icon: "EnFlagIcon",
    name: "English (UK)",
    isDefault: true,
    URIPart: "",
  },
  // French
  {
    id: "fr",
    icon: "FrFlagIcon",
    name: "Français",
    URIPart: "/fr",
  },
  // Brazilian
  {
    id: "br",
    icon: "BrFlagIcon",
    name: "Português",
    URIPart: "/br",
  },
  // Vietnamese
  {
    id: "vn",
    icon: "VnFlagIcon",
    name: "Tiếng Việt",
    URIPart: "/vn",
  },
  // Thai
  {
    id: "th",
    icon: "ThFlagIcon",
    name: "ภาษาไทย",
    URIPart: "/th",
  },
  // Spanish
  {
    id: "es",
    icon: "EsFlagIcon",
    name: "Español",
    URIPart: "/es",
  },
  // Italian
  {
    id: "it",
    icon: "ItFlagIcon",
    name: "Italiano",
    URIPart: "/it",
  },
  // Chinese
  {
    id: "cn",
    icon: "CnFlagIcon",
    name: "简体中文",
    URIPart: "/cn",
  },
  // Taiwan
  {
    id: "tw",
    icon: "CnFlagIcon",
    name: "繁體中文",
    URIPart: "/tw",
  },
  // Indonesian
  {
    id: "id",
    icon: "IdFlagIcon",
    name: "Bahasa Indonesia",
    URIPart: "/id",
  },
  // Japanese
  {
    id: "jp",
    icon: "JpFlagIcon",
    name: "日本語",
    URIPart: "/jp",
  },
  // Malay (Malaysia)
  {
    id: "my",
    icon: "MyFlagIcon",
    name: "Bahasa Malaysia",
    URIPart: "/my",
  },
  // Arabic
  {
    id: "ar",
    icon: "ArFlagIcon",
    name: "عربي",
    URIPart: "/ar",
  },
  /*// German
  {
    id: "de",
    icon: "DeFlagIcon",
    name: "Deutsch",
  },
  // Polish
  {
    id: "pl",
    icon: "PlFlagIcon",
    name: "Polski",
  },
  // Danish
  {
    id: "da",
    icon: "DaFlagIcon",
    name: "Dansk",
  },
  // Finnish
  {
    id: "fi",
    icon: "FiFlagIcon",
    name: "Suomi",
  },
  // Russian
  {
    id: "ru",
    icon: "RuFlagIcon",
    name: "Русский",
  },
  // Arabic
  {
    id: "ar",
    icon: "ArFlagIcon",
    name: "عربي",
  },
  // Dutch (Netherlands)
  {
    id: "nl",
    icon: "NlFlagIcon",
    name: "Nederlands",
  },
  // Swedish
  {
    id: "sw",
    icon: "SwFlagIcon",
    name: "Svenska",
  },
  // Romanian
  {
    id: "ro",
    icon: "RoFlagIcon",
    name: "Română",
  },
  // Norwegian
 {
   id: "no",
   icon: "NoFlagIcon",
   name: "Norsk",
 },
 // Czech
 {
   id: "cz",
   icon: "CzFlagIcon",
   name: "Čeština",
 },
 // Korean
 {
   id: "kr",
   icon: "KrFlagIcon",
   name: "한국인",
 },
 // Hindi (India)
 {
   id: "in",
   icon: "InFlagIcon",
   name: "नहीं",
 },
 // Bengali (Bangladesh)
 {
   id: "bd",
   icon: "BdFlagIcon",
   name: "বাংলা",
 },
 // Greek
 {
   id: "gr",
   icon: "GrFlagIcon",
   name: "Ελληνικά",
 },
 // Filipino
 {
   id: "ph",
   icon: "PhFlagIcon",
   name: "Filipino",
 },*/
];

const CYSEC_LANG_CONFIG = [
  // English
  {
    id: "en",
    icon: "EnFlagIcon",
    name: "English (UK)",
    isDefault: true,
    URIPart: "",
  },
  // French
  {
    id: "fr",
    icon: "FrFlagIcon",
    name: "Français",
    URIPart: "/fr",
  },
  // Spanish
  {
    id: "es",
    icon: "EsFlagIcon",
    name: "Español",
    URIPart: "/es",
  },
  // Italian
  {
    id: "it",
    icon: "ItFlagIcon",
    name: "Italiano",
    URIPart: "/it",
  },
  // Chinese
  {
    id: "cn",
    icon: "CnFlagIcon",
    name: "简体中文",
    URIPart: "/cn",
  },
  // Portuguese
  {
    id: "pt",
    icon: "PtFlagIcon",
    name: "Português",
    URIPart: "/pt",
  },
  // German
  {
    id: "de",
    icon: "DeFlagIcon",
    name: "Deutsch",
    URIPart: "/de",
  },
];

const ARABIC_LANG_ID = "ar";
const allUniqueLanguages = [...CYSEC_LANG_CONFIG, ...LANG_CONFIG].filter(
  (obj, index, self) => {
    return index === self.findIndex((lang) => lang.id === obj.id);
  }
);

const CURRENT_ENTITY = process.env.GATSBY_ENTITY;

const ENTITY_LANGUAGES =
  CURRENT_ENTITY == "FSA" ? LANG_CONFIG : CYSEC_LANG_CONFIG;

module.exports = {
  LANG_CONFIG,
  CYSEC_LANG_CONFIG,
  ENTITY_LANGUAGES,
  ARABIC_LANG_ID,
  uniqueList: allUniqueLanguages.map(({ id }) => id),
  list: ENTITY_LANGUAGES.map(({ id }) => id),
  defaultLangKey: ENTITY_LANGUAGES.find(({ isDefault }) => isDefault).id,
};
