import metaTrader4 from "../assets/images/icons/tools/metaTrader4.svg";
import metaTrader5 from "../assets/images/icons/tools/metaTrader5.svg";
import {
  MT4_PAGE_LINK,
  MT5_PAGE_LINK,
  MT5_WEB_TRADER_LINK,
  MT4_WEB_TRADER_LINK,
} from "./constants";

import { useTranslation } from "gatsby-plugin-react-i18next";
import { isIOS, isAndroid, isWindows, isMacOs } from "react-device-detect";
import { isCySEC } from "./entity-resolver";

export const CTRADER_DOWNLOAD_LINKS = {
  androidFSA: "https://play.google.com/store/apps/details?id=com.oqtima.app",
  androidEU: " https://play.google.com/store/apps/details?id=eu.oqtima.app  ",
  iosFSA: "https://apps.apple.com/cy/app/oqtima-ctrader/id1672522637",
  iosEU: "",
  windowsFSA: "https://getctrader.com/oqtima/ctrader-oqtima-setup.exe",
  windowsEU: "https://getctrader.com/oqtimaeu/ctrader-oqtimaeu-setup.exe",
  mac: null,
  webtraderFSA: "https://app.oqtima.com/",
  webtraderEU: "https://app.oqtima.eu/",
};

export const TRADING_VIEW_DOWNLOAD_LINKS = {
  android: "/",
  ios: "/",
  windows: "/",
  mac: "/",
  webtrader: "/",
};

export const MT4_DOWNLOAD_LINKS = {
  android:
    "https://download.mql5.com/cdn/mobile/mt4/android?server=OqtimaGlobal-Demo,OqtimaGlobal-Server",

  iosFSA:
    "https://download.mql5.com/cdn/mobile/mt4/ios?server=OqtimaGlobal-Demo,OqtimaGlobal-Server",

  windows:
    "https://download.mql5.com/cdn/web/oqtima.global.limited/mt4/oqtimaglobal4setup.exe",
  mac: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt4/MetaTrader4.dmg",
  webtrader: MT4_WEB_TRADER_LINK,
};

export const MT5_DOWNLOAD_LINKS = {
  androidEU:
    "https://download.mql5.com/cdn/mobile/mt5/android?server=OqtimaEU-Live",
  androidFSA: null,
  iosEU: "https://download.mql5.com/cdn/mobile/mt5/ios?server=OqtimaEU-Live",
  iosFSA: null,
  windowsEU:
    "https://download.mql5.com/cdn/web/nordskov.capital.ltd/mt5/oqtimaeu5setup.exe",
  windowsFSA: null,
  mac: "https://download.mql5.com/cdn/web/metaquotes.software.corp/mt5/MetaTrader5.dmg",
  webtrader: MT5_WEB_TRADER_LINK,
};

export const FSA_MT5_ADVANTAGES = [
  {
    key: "adv1",
    text: "mt5_market-items-list_adv1-fsa",
  },
  {
    key: "adv2",
    text: "mt5_market-items-list_adv2-fsa",
  },
  {
    key: "adv3",
    text: "mt5_market-items-list_adv3-fsa",
  },
  {
    key: "adv4",
    text: "mt5_market-items-list_adv4-fsa",
  },
  {
    key: "adv5",
    text: "mt5_market-items-list_adv5-fsa",
  },
  {
    key: "adv6",
    text: "mt5_market-items-list_adv6-fsa",
  },
  {
    key: "adv7",
    text: "mt5_market-items-list_adv7-fsa",
  },
  {
    key: "adv8",
    text: "mt5_market-items-list_adv8-fsa",
  },
  {
    key: "adv9",
    text: "mt5_market-items-list_adv9-fsa",
  },
  {
    key: "adv10",
    text: "mt5_market-items-list_adv10-fsa",
  },
  {
    key: "adv11",
    text: "mt5_market-items-list_adv11-fsa",
  },
  {
    key: "adv12",
    text: "mt5_market-items-list_adv12-fsa",
  },
  {
    key: "adv13",
    text: "mt5_market-items-list_adv13-fsa",
  },
  {
    key: "adv14",
    text: "mt5_market-items-list_adv14-fsa",
  },
];

export const CYSEC_MT5_ADVANTAGES = [
  {
    key: "adv1",
    text: "mt5_market-items-list_adv1",
  },
  {
    key: "adv2",
    text: "mt5_market-items-list_adv2",
  },
  {
    key: "adv3",
    text: "mt5_market-items-list_adv3",
  },
  {
    key: "adv4",
    text: "mt5_market-items-list_adv4",
  },
  {
    key: "adv5",
    text: "mt5_market-items-list_adv5",
  },
  {
    key: "adv6",
    text: "mt5_market-items-list_adv6",
  },
  {
    key: "adv7",
    text: "mt5_market-items-list_adv7",
  },
  {
    key: "adv8",
    text: "mt5_market-items-list_adv8",
  },
  {
    key: "adv9",
    text: "mt5_market-items-list_adv9",
  },
  {
    key: "adv10",
    text: "mt5_market-items-list_adv10",
  },
  {
    key: "adv11",
    text: "mt5_market-items-list_adv11",
  },
  {
    key: "adv12",
    text: "mt5_market-items-list_adv12",
  },
  {
    key: "adv13",
    text: "mt5_market-items-list_adv13",
  },
  {
    key: "adv14",
    text: "mt5_market-items-list_adv14",
  },
  {
    key: "adv15",
    text: "mt5_market-items-list_adv15",
  },
  {
    key: "adv16",
    text: "mt5_market-items-list_adv16",
  },
  // {
  //   key: "adv17",
  //   text: "mt5_market-items-list_adv17",
  // },
];

export const CYSEC_MT4_ADVANTAGES = [
  {
    key: "adv1",
    text: "mt4_market-items-list_adv1",
  },
  {
    key: "adv2",
    text: "mt4_market-items-list_adv2",
  },
  {
    key: "adv3",
    text: "mt4_market-items-list_adv3",
  },
  {
    key: "adv4",
    text: "mt4_market-items-list_adv4",
  },
  {
    key: "adv5",
    text: "mt4_market-items-list_adv5",
  },
  {
    key: "adv6",
    text: "mt4_market-items-list_adv6",
  },
  {
    key: "adv7",
    text: "mt4_market-items-list_adv7",
  },
  {
    key: "adv8",
    text: "mt4_market-items-list_adv8",
  },
  {
    key: "adv9",
    text: "mt4_market-items-list_adv9",
  },
  {
    key: "adv10",
    text: "mt4_market-items-list_adv10",
  },
];

export const FSA_MT4_ADVANTAGES = [
  {
    key: "adv1",
    text: "mt4_market-items-list_adv1_fsa",
  },
  {
    key: "adv2",
    text: "mt4_market-items-list_adv2_fsa",
  },
  {
    key: "adv3",
    text: "mt4_market-items-list_adv3_fsa",
  },
  {
    key: "adv4",
    text: "mt4_market-items-list_adv4_fsa",
  },
  {
    key: "adv5",
    text: "mt4_market-items-list_adv5_fsa",
  },
  {
    key: "adv6",
    text: "mt4_market-items-list_adv6_fsa",
  },
  {
    key: "adv7",
    text: "mt4_market-items-list_adv7_fsa",
  },
  {
    key: "adv8",
    text: "mt4_market-items-list_adv8_fsa",
  },
  {
    key: "adv9",
    text: "mt4_market-items-list_adv9_fsa",
  },
  {
    key: "adv10",
    text: "mt4_market-items-list_adv10_fsa",
  },
  {
    key: "adv11",
    text: "mt4_market-items-list_adv11_fsa",
  },
  {
    key: "adv12",
    text: "mt4_market-items-list_adv12_fsa",
  },
  {
    key: "adv11",
    text: "mt4_market-items-list_adv13_fsa",
  },
];
const MetaTrader4info = () => {
  const getOSDeviceMT4 = () => {
    switch (true) {
      case isIOS:
        return MT4_DOWNLOAD_LINKS.ios;
      case isAndroid:
        return MT4_DOWNLOAD_LINKS.android;
      case isWindows:
        return MT4_DOWNLOAD_LINKS.windows;
      case isMacOs:
        return MT4_DOWNLOAD_LINKS.mac;
      default:
        return MT4_DOWNLOAD_LINKS.windows;
    }
  };
  const META_TRADER_4 = {
    key: "mtTrader4",
    icon: metaTrader4,
    title: "platforms_meta-trader-4-title",
    text: ["platforms_meta-trader-4-text-1", "platforms_meta-trader-4-text-2"],
    isGrayBackground: false,
    learMoreLink: MT4_PAGE_LINK,
    downloadLink: getOSDeviceMT4(),
    learMoreLinkTitle: "platforms_meta-trader-4-more-link-title",
    downloadLinkTitle: "platforms_meta-trader-4-download-link-title",
    advantages: [
      {
        key: "mtTrader4-advantage-1",
        text: "platforms_meta-trader-4-advantage-1",
      },
      {
        key: "mtTrader4-advantage-2",
        text: "platforms_meta-trader-4-advantage-2",
      },
      {
        key: "mtTrader4-advantage-3",
        text: "platforms_meta-trader-4-advantage-3",
      },
      {
        key: "mtTrader4-advantage-4",
        text: "platforms_meta-trader-4-advantage-4",
      },
      {
        key: "mtTrader4-advantage-5",
        text: "platforms_meta-trader-4-advantage-5",
      },
      {
        key: "mtTrader4-advantage-6",
        text: "platforms_meta-trader-4-advantage-6",
      },
      {
        key: "mtTrader4-advantage-7",
        text: "platforms_meta-trader-4-advantage-7",
      },
      {
        key: "mtTrader4-advantage-8",
        text: "platforms_meta-trader-4-advantage-8",
      },
      {
        key: "mtTrader4-advantage-9",
        text: "platforms_meta-trader-4-advantage-9",
      },
      {
        key: "mtTrader4-advantage-10",
        text: "platforms_meta-trader-4-advantage-10",
      },
    ],
  };
  return META_TRADER_4;
};

const MetaTrader5info = () => {
  const getOSDeviceMT5 = () => {
    switch (true) {
      case isIOS:
        return isCySEC ? MT5_DOWNLOAD_LINKS.iosEU : MT5_DOWNLOAD_LINKS.iosFSA;
      case isAndroid:
        return isCySEC
          ? MT5_DOWNLOAD_LINKS.androidFSA
          : MT5_DOWNLOAD_LINKS.androidEU;
      case isWindows:
        return isCySEC
          ? MT5_DOWNLOAD_LINKS.windowsEU
          : MT5_DOWNLOAD_LINKS.windowsFSA;
      case isMacOs:
        return MT5_DOWNLOAD_LINKS.mac;
      default:
        return isCySEC
          ? MT5_DOWNLOAD_LINKS.windowsEU
          : MT5_DOWNLOAD_LINKS.windowsFSA;
    }
  };
  const META_TRADER_5 = {
    key: "mtTrader5",
    icon: metaTrader5,
    title: "platforms_meta-trader-5-title",
    text: ["platforms_meta-trader-5-text-1"],
    isGrayBackground: true,
    learMoreLink: MT5_PAGE_LINK,
    downloadLink: getOSDeviceMT5(),
    learMoreLinkTitle: "platforms_meta-trader-5-more-link-title",
    downloadLinkTitle: "platforms_meta-trader-5-download-link-title",
    advantages: [
      {
        key: "mtTrader5-advantage-1",
        text: "platforms_meta-trader-5-advantage-1",
      },
      {
        key: "mtTrader5-advantage-2",
        text: "platforms_meta-trader-5-advantage-2",
      },
      {
        key: "mtTrader5-advantage-3",
        text: "platforms_meta-trader-5-advantage-3",
      },
      {
        key: "mtTrader5-advantage-4",
        text: "platforms_meta-trader-5-advantage-4",
      },
      {
        key: "mtTrader5-advantage-5",
        text: "platforms_meta-trader-5-advantage-5",
      },
      {
        key: "mtTrader5-advantage-6",
        text: "platforms_meta-trader-5-advantage-6",
      },
      {
        key: "mtTrader5-advantage-7",
        text: "platforms_meta-trader-5-advantage-7",
      },
      {
        key: "mtTrader5-advantage-8",
        text: "platforms_meta-trader-5-advantage-8",
      },
      {
        key: "mtTrader5-advantage-9",
        text: "platforms_meta-trader-5-advantage-9",
      },
      {
        key: "mtTrader5-advantage-10",
        text: "platforms_meta-trader-5-advantage-10",
      },
      {
        key: "mtTrader5-advantage-11",
        text: "platforms_meta-trader-5-advantage-11",
      },
    ],
  };
  return META_TRADER_5;
};

export const CTRADER_ADVANTAGES = [
  {
    key: "adv1",
    text: "ctrader_market-items-list_adv1",
  },
  {
    key: "adv2",
    text: "ctrader_market-items-list_adv2",
  },
  {
    key: "adv3",
    text: "ctrader_market-items-list_adv3",
  },
  {
    key: "adv4",
    text: "ctrader_market-items-list_adv4",
  },
  {
    key: "adv5",
    text: "ctrader_market-items-list_adv5",
  },
  {
    key: "adv6",
    text: "ctrader_market-items-list_adv6",
  },
  {
    key: "adv7",
    text: "ctrader_market-items-list_adv7",
  },
  {
    key: "adv8",
    text: "ctrader_market-items-list_adv8",
  },
  {
    key: "adv9",
    text: "ctrader_market-items-list_adv9",
  },
  {
    key: "adv10",
    text: "ctrader_market-items-list_adv10",
  },
  {
    key: "adv11",
    text: "ctrader_market-items-list_adv11",
  },
  {
    key: "adv12",
    text: "ctrader_market-items-list_adv12",
  },
  {
    key: "adv13",
    text: "ctrader_market-items-list_adv13",
  },
];

export const TRADING_VIEW_ADVANTAGES = [
  {
    key: "adv1",
    text: "trading-view_market-items-list_adv1",
  },
  {
    key: "adv2",
    text: "trading-view_market-items-list_adv2",
  },
  {
    key: "adv3",
    text: "trading-view_market-items-list_adv3",
  },
  {
    key: "adv4",
    text: "trading-view_market-items-list_adv4",
  },
  {
    key: "adv5",
    text: "trading-view_market-items-list_adv5",
  },
  {
    key: "adv6",
    text: "trading-view_market-items-list_adv6",
  },
  {
    key: "adv7",
    text: "trading-view_market-items-list_adv7",
  },
  {
    key: "adv8",
    text: "trading-view_market-items-list_adv8",
  },
  {
    key: "adv9",
    text: "trading-view_market-items-list_adv9",
  },
  {
    key: "adv10",
    text: "trading-view_market-items-list_adv10",
  },
  {
    key: "adv11",
    text: "trading-view_market-items-list_adv11",
  },
  {
    key: "adv12",
    text: "trading-view_market-items-list_adv12",
  },
  {
    key: "adv13",
    text: "trading-view_market-items-list_adv13",
  },
  {
    key: "adv14",
    text: "trading-view_market-items-list_adv14",
  },
];

export { MetaTrader4info, MetaTrader5info };
