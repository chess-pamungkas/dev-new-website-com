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
  title: "header-nav-tab-top-markets",
  subItems: [
    {
      title: "header-nav-tab-top-markets-indices-title",
      link: "/indices",
      icon: IndicesIcon,
      description: "header-nav-tab-top-markets-indices-desc",
    },
    {
      title: "header-nav-tab-top-markets-forex-title",
      link: "/forex",
      icon: ForexIcon,
      description: "header-nav-tab-top-markets-forex-desc",
    },
    {
      title: "header-nav-tab-top-markets-commodities-title",
      link: "/commodities",
      icon: CommoditiesIcon,
      description: "header-nav-tab-top-markets-commodities-desc",
    },
    {
      title: "header-nav-tab-top-markets-shares-title",
      link: "/shares",
      icon: SharesIcon,
      description: "header-nav-tab-top-markets-shares-desc",
    },
    {
      title: "header-nav-tab-top-markets-energies-title",
      link: "/energies",
      icon: EnergiesIcon,
      description: "header-nav-tab-top-markets-energies-desc",
    },
    {
      title: "header-nav-tab-top-markets-allmarkets-title",
      link: "/all-markets",
      icon: AllMarketsOverviewIcon,
      description: "header-nav-tab-top-markets-allmarkets-desc",
    },
  ],
};

const FSA_TOP_MARKETS_TAB = {
  title: "header-nav-tab-top-markets",
  subItems: [
    {
      title: "header-nav-tab-top-markets-crypto-title",
      link: "/crypto",
      icon: CryptoIcon,
      description: "header-nav-tab-top-markets-crypto-desc",
    },
    ...CYSEC_TOP_MARKETS_TAB.subItems,
  ],
};

const TRADING_TAB_PLATFORMS_ITEM = {
  title: "header-nav-tab-trading-platforms-title",
  link: "",
  isSubtitle: true,
  icon: PlatformsIcon,
  description: "header-nav-tab-trading-platforms-desc",
  subtitles: [
    {
      title: "header-nav-tab-trading-platforms-mt4-title",
      link: "",
      description: "header-nav-tab-trading-platforms-mt4-desc",
    },
    {
      title: "header-nav-tab-trading-platforms-mt5-title",
      link: "",
      description: "header-nav-tab-trading-platforms-mt5-desc",
    },
  ],
};

const CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM = {
  title: "header-nav-tab-trading-funding-withdrawals-title",
  link: "",
  isSubtitle: true,
  icon: FundingWithdrawalsIcon,
  description: "header-nav-tab-trading-funding-withdrawals-desc",
  subtitles: [
    {
      title: "header-nav-tab-trading-funding-withdrawals-spreads-title",
      link: "",
      description: "header-nav-tab-trading-funding-withdrawals-spreads-desc",
    },
    {
      title: "header-nav-tab-trading-funding-withdrawals-accounts-title",
      link: "",
      description: "header-nav-tab-trading-funding-withdrawals-accounts-desc",
    },
  ],
};

const FSA_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM = {
  title: "header-nav-tab-funding-withdrawals",
  link: "",
  isSubtitle: true,
  icon: FundingWithdrawalsIcon,
  description: "",
  subtitles: [
    ...CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM.subtitles,
    {
      title: "header-nav-tab-trading-funding-withdrawals-trading-title",
      link: "",
      description: "header-nav-tab-trading-funding-withdrawals-trading-desc",
    },
  ],
};

const TRADING_TAB_COPY_TRADING_ITEM = {
  title: "header-nav-tab-trading-copy-trading-title",
  link: "",
  isSubtitle: true,
  icon: CopyTradingIcon,
  description: "header-nav-tab-trading-copy-trading-desc",
};

const TRADING_TAB_PRO_QUALIFICATION_ITEM = {
  title: "header-nav-tab-trading-professional-qualification-title",
  link: "",
  isSubtitle: true,
  icon: ProfessionalQualificationIcon,
  description: "header-nav-tab-trading-professional-qualification-desc",
};

const TRADING_TAB_WHY_TRADE_ITEM = {
  title: "header-nav-tab-trading-why-trade-with-title",
  link: "",
  isSubtitle: true,
  icon: Logo,
  description: "header-nav-tab-trading-why-trade-with-desc",
};

const TRADING_TAB_TRADING_TOOLS_ITEM = {
  title: "header-nav-tab-trading-trading-tools-title",
  link: "",
  isSubtitle: true,
  icon: TradingToolsIcon,
  description: "header-nav-tab-trading-trading-tools-desc",
  subtitles: [
    {
      title: "header-nav-tab-trading-trading-tools-tradeview-title",
      link: "",
      description: "header-nav-tab-trading-trading-tools-tradeview-desc",
    },
    {
      title: "header-nav-tab-trading-trading-tools-economic-calendar-title",
      link: "",
      description: "header-nav-tab-trading-trading-tools-economic-calendar-desc",
    },
    {
      title: "header-nav-tab-trading-trading-tools-market-sentiment-tools-title",
      link: "",
      description: "header-nav-tab-trading-trading-tools-market-sentiment-tools-desc",
    },
  ],
};

const TRADING_TAB_EDUCATION_ITEM = {
  title: "header-nav-tab-trading-education-title",
  link: "",
  isSubtitle: true,
  icon: EducationIcon,
  description: "header-nav-tab-trading-education-desc",
  subtitles: [
    {
      title: "header-nav-tab-trading-education-how-to-videos-title",
      link: "",
      description: "header-nav-tab-trading-education-how-to-videos-desc",
    },
  ],
};

const CYSEC_TRADING_TAB = {
  title: "header-nav-tab-trading",
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
  title: "header-nav-tab-trading",
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
  title: "header-nav-tab-company",
  subItems: [
    {
      title: "header-nav-tab-company-about-title",
      link: "",
      icon: AboutIcon,
      description: "header-nav-tab-company-about-desc",
    },
    {
      title: "header-nav-tab-company-contact-title",
      link: "",
      icon: ContactIcon,
      description: "header-nav-tab-company-contact-desc",
    },
    {
      title: "header-nav-tab-company-legal-title",
      link: "",
      icon: LegalIcon,
      description: "header-nav-tab-company-legal-desc",
    },
    {
      title: "header-nav-tab-company-career-title",
      link: "",
      icon: CareerIcon,
      description: "header-nav-tab-company-career-desc",
    },
    {
      title: "header-nav-tab-company-press-and-news-title",
      link: "",
      icon: PressAndNewsIcon,
      description: "header-nav-tab-company-press-and-news-desc",
    },
    {
      title: "header-nav-tab-company-help-center-title",
      link: "",
      icon: HelpCenterIcon,
      description: "header-nav-tab-company-help-center-desc",
    },
  ],
};

const CYSEC_PARTNERS_TAB = {
  title: "header-nav-tab-partners",
  subItems: [
    {
      title: "header-nav-tab-partners-collaboration-partnership-title",
      link: "",
      icon: CollaborationPartnershipIcon,
      description: "header-nav-tab-partners-collaboration-partnership-desc",
    },
  ],
};

const FSA_PARTNERS_TAB = {
  title: "header-nav-tab-partners",
  subItems: [
    ...CYSEC_PARTNERS_TAB.subItems,
    {
      title: "header-nav-tab-partners-affiliate-partnership-title",
      link: "",
      icon: AffiliatePartnershipIcon,
      description: "header-nav-tab-partners-affiliate-partnership-desc",
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
