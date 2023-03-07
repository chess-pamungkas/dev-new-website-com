const LANG_CONFIG = [
  // English
  {
    id: "en",
    icon: "EnFlagIcon",
    name: "English (UK)",
    isDefault: true,
  },
  // French
  {
    id: "fr",
    icon: "FrFlagIcon",
    name: "Français",
  },
  // Portuguese
  {
    id: "pt",
    icon: "BrFlagIcon",
    name: "Português",
  },
  // Vietnamese
  {
    id: "vn",
    icon: "VnFlagIcon",
    name: "Tiếng Việt",
  },
  // Thai
  {
    id: "th",
    icon: "ThFlagIcon",
    name: "ภาษาไทย",
  },
  /* // German
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
  },*/
  // Spanish
  {
    id: "es",
    icon: "EsFlagIcon",
    name: "Español",
  },
  /* // Russian
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
  },*/
  // Italian
  {
    id: "it",
    icon: "ItFlagIcon",
    name: "Italiano",
  },
  // Chinese
  {
    id: "cn",
    icon: "CnFlagIcon",
    name: "简体中文",
  },
  // Taiwan
  {
    id: "tw",
    icon: "CnFlagIcon",
    name: "繁體中文",
  },
  /*// Norwegian
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
 // Malay (Malaysia)
 {
   id: "my",
   icon: "MyFlagIcon",
   name: "Melayu",
 },
 // Indonesian
 {
   id: "id",
   icon: "IdFlagIcon",
   name: "Bahasa Indonesia",
 },
 // Korean
 {
   id: "kr",
   icon: "KrFlagIcon",
   name: "한국인",
 },
 // Japanese
 {
   id: "jp",
   icon: "JpFlagIcon",
   name: "日本",
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
  },
  // French
  {
    id: "fr",
    icon: "FrFlagIcon",
    name: "Français",
  },
  // Portuguese
  {
    id: "pt",
    icon: "BrFlagIcon",
    name: "Português",
  },
  // Spanish
  {
    id: "es",
    icon: "EsFlagIcon",
    name: "Español",
  },
  // Italian
  {
    id: "it",
    icon: "ItFlagIcon",
    name: "Italiano",
  },
  // Chinese
  {
    id: "cn",
    icon: "CnFlagIcon",
    name: "简体中文",
  },
  // Taiwan
  {
    id: "tw",
    icon: "CnFlagIcon",
    name: "繁體中文",
  },
];

const ARABIC_LANG_ID = "ar";

module.exports = {
  LANG_CONFIG,
  CYSEC_LANG_CONFIG,
  ARABIC_LANG_ID,
  list: LANG_CONFIG.map(({ id }) => id),
  defaultLangKey: LANG_CONFIG.find(({ isDefault }) => isDefault).id,
};
