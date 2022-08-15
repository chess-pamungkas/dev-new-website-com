import webTraderIcon from "../assets/images/icons/tools/webTrader.svg";
import iosIcon from "../assets/images/icons/tools/ios.svg";
import androidIcon from "../assets/images/icons/tools/android.svg";
import metaTrader4Icon from "../assets/images/icons/tools/metaTrader4.svg";
import metaTrader5Icon from "../assets/images/icons/tools/metaTrader5.svg";
import advantageIcon1 from "../assets/images/icons/advantages/1.svg";
import advantageIcon2 from "../assets/images/icons/advantages/2.svg";
import advantageIcon3 from "../assets/images/icons/advantages/3.svg";
import advantageIcon4 from "../assets/images/icons/advantages/4.svg";
import advantageIcon5 from "../assets/images/icons/advantages/5.svg";
import advantageIcon6 from "../assets/images/icons/advantages/6.svg";
import advantageIcon7 from "../assets/images/icons/advantages/7.svg";
import { ADVANTAGE_TEXTS } from "./promo-texts";

export const ADVANTAGES = [
  {
    icon: advantageIcon1,
    text: ADVANTAGE_TEXTS.block1,
  },
  {
    icon: advantageIcon2,
    text: ADVANTAGE_TEXTS.block2,
  },
  {
    icon: advantageIcon3,
    text: ADVANTAGE_TEXTS.block3,
  },
  {
    icon: advantageIcon4,
    text: ADVANTAGE_TEXTS.block4,
  },
  {
    icon: advantageIcon5,
    text: ADVANTAGE_TEXTS.block5,
  },
  {
    icon: advantageIcon6,
    text: ADVANTAGE_TEXTS.block6,
  },
  {
    icon: advantageIcon7,
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
