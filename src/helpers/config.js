import React from "react";
import webTraderIcon from "../assets/images/icons/tools/webTrader.svg";
import iosIcon from "../assets/images/icons/tools/ios.svg";
import androidIcon from "../assets/images/icons/tools/android.svg";
import metaTrader4Icon from "../assets/images/icons/tools/metaTrader4.svg";
import metaTrader5Icon from "../assets/images/icons/tools/metaTrader5.svg";
import { ADVANTAGE_TEXTS } from "./promo-texts";
import {
  AdvantageIcon1,
  AdvantageIcon2,
  AdvantageIcon3,
  AdvantageIcon4,
  AdvantageIcon5,
  AdvantageIcon6,
  AdvantageIcon7,
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

export const ADVANTAGES = [
  {
    icon: <AdvantageIcon1 className="advantage-block__icon" />,
    text: ADVANTAGE_TEXTS.block1,
  },
  {
    icon: <AdvantageIcon2 className="advantage-block__icon" />,
    text: ADVANTAGE_TEXTS.block2,
  },
  {
    icon: <AdvantageIcon3 className="advantage-block__icon" />,
    text: ADVANTAGE_TEXTS.block3,
  },
  {
    icon: <AdvantageIcon4 className="advantage-block__icon" />,
    text: ADVANTAGE_TEXTS.block4,
  },
  {
    icon: <AdvantageIcon5 className="advantage-block__icon" />,
    text: ADVANTAGE_TEXTS.block5,
  },
  {
    icon: <AdvantageIcon6 className="advantage-block__icon" />,
    text: ADVANTAGE_TEXTS.block6,
  },
  {
    icon: <AdvantageIcon7 className="advantage-block__icon" />,
    text: ADVANTAGE_TEXTS.block7,
  },
];

export const PLATFORMS = {
  webTrader: {
    icon: webTraderIcon,
    title: "WebTrader",
  },
  ios: {
    icon: iosIcon,
    title: "iOS",
  },
  android: {
    icon: androidIcon,
    title: "Android",
  },
  metaTrader4: {
    icon: metaTrader4Icon,
    title: "MetaTrader4",
  },
  metaTrader5: {
    icon: metaTrader5Icon,
    title: "MetaTrader5",
  },
};

export const LANG_SELECT_OPTIONS = [
  {
    id: 'en',
    icon: EnFlagIcon,
    name: 'English (UK)'
  },
  {
    id: 'de',
    icon: DeFlagIcon,
    name: 'Deutsch'
  },
  {
    id: 'fr',
    icon: FrFlagIcon,
    name: 'Français'
  },
  {
    id: 'pl',
    icon: PlFlagIcon,
    name: 'Polski'
  },
  {
    id: 'pt',
    icon: PtFlagIcon,
    name: 'Português'
  },
  {
    id: 'da',
    icon: DaFlagIcon,
    name: 'Dansk'
  },
  {
    id: 'fi',
    icon: FiFlagIcon,
    name: 'Suomi'
  },
  {
    id: 'es',
    icon: EsFlagIcon,
    name: 'Español'
  },
  {
    id: 'ru',
    icon: RuFlagIcon,
    name: 'Русский'
  },
  {
    id: 'ar',
    icon: ArFlagIcon,
    name: 'عربي'
  },
  {
    id: 'nl',
    icon: NlFlagIcon,
    name: 'Nederlands'
  },
  {
    id: 'sw',
    icon: SwFlagIcon,
    name: 'Svenska'
  },
  {
    id: 'ro',
    icon: RoFlagIcon,
    name: 'Română'
  },
  {
    id: 'it',
    icon: ItFlagIcon,
    name: 'italiano'
  },
  {
    id: 'cn',
    icon: CnFlagIcon,
    name: '简体中文'
  },
  {
    id: 'tw',
    icon: CnFlagIcon,
    name: '繁體中文'
  },
  {
    id: 'no',
    icon: NoFlagIcon,
    name: 'Norsk'
  },
  {
    id: 'cz',
    icon: CzFlagIcon,
    name: 'čeština'
  },
  {
    id: 'vn',
    icon: VnFlagIcon,
    name: 'Tiếng Việt'
  },
  {
    id: 'th',
    icon: ThFlagIcon,
    name: 'แบบไทย'
  },
  {
    id: 'my',
    icon: MyFlagIcon,
    name: 'Melayu'
  },
  {
    id: 'id',
    icon: IdFlagIcon,
    name: 'bahasa Indonesia'
  },
  {
    id: 'kr',
    icon: KrFlagIcon,
    name: '한국인'
  },
  {
    id: 'jp',
    icon: JpFlagIcon,
    name: '日本'
  },
  {
    id: 'in',
    icon: InFlagIcon,
    name: 'नहीं'
  },
  {
    id: 'bd',
    icon: BdFlagIcon,
    name: 'বাংলা'
  },
  {
    id: 'gr',
    icon: GrFlagIcon,
    name: 'Ελληνικά'
  },
  {
    id: 'ph',
    icon: PhFlagIcon,
    name: 'Filipino'
  }
];
