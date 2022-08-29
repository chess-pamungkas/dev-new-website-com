import {
  Logo,
  CryptoIcon,
  IndicesIcon,
  ForexIcon,
  CommoditiesIcon,
  SharesIcon,
  EnergiesIcon,
  AllMarketsOverviewIcon,
  PlatformsIcon,
  FundingWithdrawalsIcon,
  CopyTradingIcon,
  ProfessionalQualificationIcon,
  TradingToolsIcon,
  EducationIcon,
  AboutIcon,
  ContactIcon,
  LegalIcon,
  CareerIcon,
  PressAndNewsIcon,
  HelpCenterIcon,
  CollaborationPartnershipIcon,
  AffiliatePartnershipIcon,
} from "../components/shared/icons";

const CYSEC_TOP_MARKETS_TAB = {
  title: "Top Markets",
  subItems: [
    {
      title: "Indices",
      link: "/indices",
      icon: IndicesIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Forex",
      link: "/forex",
      icon: ForexIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Commodities",
      link: "/commodities",
      icon: CommoditiesIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Shares",
      link: "/shares",
      icon: SharesIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Energies",
      link: "/energies",
      icon: EnergiesIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "All Markets Overview",
      link: "/all-markets",
      icon: AllMarketsOverviewIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const FSA_TOP_MARKETS_TAB = {
  title: "Top Markets",
  subItems: [
    {
      title: "Crypto",
      link: "/crypto",
      icon: CryptoIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    ...CYSEC_TOP_MARKETS_TAB.subItems,
  ],
};

const TRADING_TAB_PLATFORMS_ITEM = {
  title: "Platforms",
  link: "",
  isSubtitle: true,
  icon: PlatformsIcon,
  description: "",
  subtitles: [
    {
      title: "MT4",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "MT5",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM = {
  title: "Funding Withdrawals",
  link: "",
  isSubtitle: true,
  icon: FundingWithdrawalsIcon,
  description: "",
  subtitles: [
    {
      title: "Spreads and Fees",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Accounts Type",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const FSA_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM = {
  title: "Funding Withdrawals",
  link: "",
  isSubtitle: true,
  icon: FundingWithdrawalsIcon,
  description: "",
  subtitles: [
    ...CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM.subtitles,
    {
      title: "Trading With Leverage",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const TRADING_TAB_COPY_TRADING_ITEM = {
  title: "Copy Trading",
  link: "",
  isSubtitle: true,
  icon: CopyTradingIcon,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const TRADING_TAB_PRO_QUALIFICATION_ITEM = {
  title: "Professional Qualification",
  link: "",
  isSubtitle: true,
  icon: ProfessionalQualificationIcon,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const TRADING_TAB_WHY_TRADE_ITEM = {
  title: "Why Trade With Oqtima",
  link: "",
  isSubtitle: true,
  icon: Logo,
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
};

const TRADING_TAB_TRADING_TOOLS_ITEM = {
  title: "Trading Tools",
  link: "",
  isSubtitle: true,
  icon: TradingToolsIcon,
  description: "",
  subtitles: [
    {
      title: "Tradeview",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Economic Calendar",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Market Sentiment Tools",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const TRADING_TAB_EDUCATION_ITEM = {
  title: "Education",
  link: "",
  isSubtitle: true,
  icon: EducationIcon,
  description: "",
  subtitles: [
    {
      title: "How To Videos",
      link: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const CYSEC_TRADING_TAB = {
  title: "Trading",
  isNested: true,
  subItems: [
    TRADING_TAB_PLATFORMS_ITEM,
    CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM,
    TRADING_TAB_COPY_TRADING_ITEM,
    TRADING_TAB_PRO_QUALIFICATION_ITEM,
    TRADING_TAB_WHY_TRADE_ITEM,
    TRADING_TAB_TRADING_TOOLS_ITEM,
    TRADING_TAB_EDUCATION_ITEM,
  ],
};

const FSA_TRADING_TAB = {
  title: "Trading",
  isNested: true,
  subItems: [
    TRADING_TAB_PLATFORMS_ITEM,
    FSA_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM,
    TRADING_TAB_COPY_TRADING_ITEM,
    TRADING_TAB_PRO_QUALIFICATION_ITEM,
    TRADING_TAB_WHY_TRADE_ITEM,
    TRADING_TAB_TRADING_TOOLS_ITEM,
    TRADING_TAB_EDUCATION_ITEM,
  ],
};

const COMPANY_TAB = {
  title: "Company",
  subItems: [
    {
      title: "About",
      link: "",
      icon: AboutIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Contact",
      link: "",
      icon: ContactIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Legal",
      link: "",
      icon: LegalIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Career",
      link: "",
      icon: CareerIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Press and News",
      link: "",
      icon: PressAndNewsIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      title: "Help Center (F.A.Q)",
      link: "",
      icon: HelpCenterIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const CYSEC_PARTNERS_TAB = {
  title: "Partners",
  subItems: [
    {
      title: "Collaboration Partnership",
      link: "",
      icon: CollaborationPartnershipIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

const FSA_PARTNERS_TAB = {
  title: "Partners",
  subItems: [
    ...CYSEC_PARTNERS_TAB.subItems,
    {
      title: "Affiliate Partnership",
      link: "",
      icon: AffiliatePartnershipIcon,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ],
};

export const FSA_MENU_ITEMS = [
  FSA_TOP_MARKETS_TAB,
  FSA_TRADING_TAB,
  COMPANY_TAB,
  FSA_PARTNERS_TAB,
];

export const CYSEC_MENU_ITEMS = [
  CYSEC_TOP_MARKETS_TAB,
  CYSEC_TRADING_TAB,
  COMPANY_TAB,
  CYSEC_PARTNERS_TAB,
];
