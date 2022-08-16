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
