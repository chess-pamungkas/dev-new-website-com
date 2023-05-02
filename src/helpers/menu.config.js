import {
  AboutIcon,
  AllMarketsOverviewIcon,
  //  No used vars for the 2nd release, please, don't remove them
  CareerIcon,
  CollaborationPartnershipIcon,
  CommoditiesIcon,
  ContactIcon,
  CopyTradingIcon,
  CryptoIcon,
  EducationIcon,
  EnergiesIcon,
  ForexIcon,
  FundingWithdrawalsIcon,
  HelpCenterIcon,
  IndicesIcon,
  LegalIcon,
  Logo,
  PlatformsIcon,
  PressAndNewsIcon,
  ProfessionalQualificationIcon,
  SharesIcon,
  TradingToolsIcon,
  ETFIcon,
} from "../components/shared/icons";
import {
  ACCOUNTS_TYPE_PAGE_LINK,
  ALL_MARKETS_PAGE_LINK,
  COMING_SOON_PAGE_LINK,
  METALS_PAGE_LINK,
  COMPANY_PAGE_LINK,
  CONTACT_US_PAGE_LINK,
  CRYPTO_PAGE_LINK,
  ENERGIES_PAGE_LINK,
  FAQ_PAGE_LINK,
  FOREX_PAGE_LINK,
  INDICES_PAGE_LINK,
  LEGAL_PAGE_LINK,
  MT4_PAGE_LINK,
  MT5_PAGE_LINK,
  CTRADER_PAGE_LINK,
  PARTNERS_PAGE_LINK,
  PLATFORMS_LINK,
  PROFESSIONAL_QUALIFICATION_PAGE_LINK,
  SHARES_PAGE_LINK,
  SPREADS_AND_FEES_PAGE_LINK,
  WITHDRAWAL_PAGE_LINK,
  TRADING_VIEW_PAGE_LINK,
  ETF_PAGE_LINK,
} from "./constants";

const CYSEC_TOP_MARKETS_TAB = {
  title: "header-nav-tab-top-markets",
  subItems: [
    {
      title: "header-nav-tab-top-markets-indices-title",
      link: INDICES_PAGE_LINK,
      icon: IndicesIcon,
      description: "header-nav-tab-top-markets-indices-desc",
    },
    {
      title: "header-nav-tab-top-markets-forex-title",
      link: FOREX_PAGE_LINK,
      icon: ForexIcon,
      description: "header-nav-tab-top-markets-forex-desc",
    },
    {
      title: "header-nav-tab-top-markets-commodities-title",
      link: METALS_PAGE_LINK,
      icon: CommoditiesIcon,
      description: "header-nav-tab-top-markets-commodities-desc",
    },
    {
      title: "header-nav-tab-top-markets-shares-title",
      link: SHARES_PAGE_LINK,
      icon: SharesIcon,
      description: "header-nav-tab-top-markets-shares-desc",
    },
    {
      title: "header-nav-tab-top-markets-energies-title",
      link: ENERGIES_PAGE_LINK,
      icon: EnergiesIcon,
      description: "header-nav-tab-top-markets-energies-desc",
    },
    {
      title: "header-nav-tab-top-markets-etf-title",
      link: ETF_PAGE_LINK,
      icon: ETFIcon,
      description: "header-nav-tab-top-markets-etf-desc",
    },
    {
      title: "header-nav-tab-top-markets-allmarkets-title",
      link: ALL_MARKETS_PAGE_LINK,
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
      link: CRYPTO_PAGE_LINK,
      icon: CryptoIcon,
      description: "header-nav-tab-top-markets-crypto-desc",
    },
    ...CYSEC_TOP_MARKETS_TAB.subItems,
  ],
};

const CYSEC_TRADING_TAB_PLATFORMS_ITEM = {
  title: "header-nav-tab-trading-platforms-title",
  link: PLATFORMS_LINK,
  isSubtitle: true,
  icon: PlatformsIcon,
  description: "header-nav-tab-trading-platforms-desc",
  subtitles: [
    // Temporarily removed for the EU because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-166
    // {
    //   title: "header-nav-tab-trading-platforms-mt4-title",
    //   link: MT4_PAGE_LINK,
    //   description: "header-nav-tab-trading-platforms-mt4-desc",
    // },
    {
      title: "header-nav-tab-trading-platforms-mt5-title",
      link: MT5_PAGE_LINK,
      description: "header-nav-tab-trading-platforms-mt5-desc",
    },
  ],
};

const FSA_TRADING_TAB_PLATFORMS_ITEM = {
  title: "header-nav-tab-trading-platforms-title",
  link: PLATFORMS_LINK,
  isSubtitle: true,
  icon: PlatformsIcon,
  description: "header-nav-tab-trading-platforms-desc",
  subtitles: [
    {
      title: "header-nav-tab-trading-platforms-mt4-title",
      link: MT4_PAGE_LINK,
      description: "header-nav-tab-trading-platforms-mt4-desc",
    },
    // Temporarily removed for the COM because of https://oqtima-website.atlassian.net/jira/software/projects/OW/boards/1?selectedIssue=OW-316
    // {
    //   title: "header-nav-tab-trading-platforms-mt5-title",
    //   link: MT5_PAGE_LINK,
    //   description: "header-nav-tab-trading-platforms-mt5-desc",
    // },
    //TODO CTRADER SERVER IS NOT READY YET. REMOVED
    // {
    //   title: "header-nav-tab-trading-platforms-ctrader-title",
    //   link: CTRADER_PAGE_LINK,
    //   description: "header-nav-tab-trading-platforms-ctrader-desc",
    // },
  ],
};

const CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM = {
  title: "header-nav-tab-trading-funding-withdrawals-title",
  link: WITHDRAWAL_PAGE_LINK,
  isSubtitle: true,
  icon: FundingWithdrawalsIcon,
  description: "header-nav-tab-trading-funding-withdrawals-desc",
  subtitles: [
    {
      title: "header-nav-tab-trading-funding-withdrawals-spreads-title",
      link: SPREADS_AND_FEES_PAGE_LINK,
      description: "header-nav-tab-trading-funding-withdrawals-spreads-desc",
    },
    {
      title: "header-nav-tab-trading-funding-withdrawals-accounts-title",
      link: ACCOUNTS_TYPE_PAGE_LINK,
      description: "header-nav-tab-trading-funding-withdrawals-accounts-desc",
    },
  ],
};

const FSA_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM = {
  title: "header-nav-tab-trading-funding-withdrawals-title",
  link: WITHDRAWAL_PAGE_LINK,
  isSubtitle: true,
  icon: FundingWithdrawalsIcon,
  description: "",
  subtitles: CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM.subtitles,
};

const TRADING_TAB_COPY_TRADING_ITEM = {
  title: "header-nav-tab-trading-copy-trading-title",
  link: CTRADER_PAGE_LINK,
  isSubtitle: true,
  icon: CopyTradingIcon,
  description: "header-nav-tab-trading-copy-trading-desc",
};

const TRADING_TAB_PRO_QUALIFICATION_ITEM = {
  title: "header-nav-tab-trading-professional-qualification-title",
  link: PROFESSIONAL_QUALIFICATION_PAGE_LINK,
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
      link: TRADING_VIEW_PAGE_LINK,
      description: "header-nav-tab-trading-trading-tools-tradeview-desc",
    },
    {
      title: "header-nav-tab-trading-trading-tools-economic-calendar-title",
      link: "",
      description:
        "header-nav-tab-trading-trading-tools-economic-calendar-desc",
    },
    {
      title:
        "header-nav-tab-trading-trading-tools-market-sentiment-tools-title",
      link: "",
      description:
        "header-nav-tab-trading-trading-tools-market-sentiment-tools-desc",
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
    CYSEC_TRADING_TAB_PLATFORMS_ITEM,
    CYSEC_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM,
    TRADING_TAB_PRO_QUALIFICATION_ITEM,
  ],
};

const FSA_TRADING_TAB = {
  title: "header-nav-tab-trading",
  isNested: true,
  subItems: [
    FSA_TRADING_TAB_PLATFORMS_ITEM,
    FSA_TRADING_TAB_FUNDING_WITHDRAWALS_ITEM,
  ],
};

const CYSEC_COMPANY_TAB = {
  title: "header-nav-tab-company",
  subItems: [
    {
      title: "header-nav-tab-company-about-title",
      link: COMPANY_PAGE_LINK,
      icon: AboutIcon,
      description: "header-nav-tab-company-about-desc",
    },
    {
      title: "header-nav-tab-company-contact-title",
      link: CONTACT_US_PAGE_LINK,
      icon: ContactIcon,
      description: "header-nav-tab-company-contact-desc",
    },
    {
      title: "header-nav-tab-company-legal-title",
      link: LEGAL_PAGE_LINK,
      icon: LegalIcon,
      description: "header-nav-tab-company-legal-desc",
    },
    {
      title: "header-nav-tab-company-help-center-title",
      link: FAQ_PAGE_LINK,
      icon: HelpCenterIcon,
      description: "header-nav-tab-company-help-center-desc",
    },
  ],
};

const FSA_COMPANY_TAB = {
  title: "header-nav-tab-company",
  subItems: [
    {
      title: "header-nav-tab-company-about-title",
      link: COMPANY_PAGE_LINK,
      icon: AboutIcon,
      description: "header-nav-tab-company-about-desc",
    },
    {
      title: "header-nav-tab-company-contact-title",
      link: CONTACT_US_PAGE_LINK,
      icon: ContactIcon,
      description: "header-nav-tab-company-contact-desc",
    },
    {
      title: "header-nav-tab-company-legal-title",
      link: LEGAL_PAGE_LINK,
      icon: LegalIcon,
      description: "header-nav-tab-company-legal-desc",
    },
    {
      title: "header-nav-tab-company-help-center-title",
      link: FAQ_PAGE_LINK,
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
      link: PARTNERS_PAGE_LINK,
      icon: CollaborationPartnershipIcon,
      description: "header-nav-tab-partners-collaboration-partnership-desc",
    },
  ],
};

const FSA_PARTNERS_TAB = {
  title: "header-nav-tab-partners",
  subItems: [
    ...CYSEC_PARTNERS_TAB.subItems,
    // Disabled for now (https://oqtima-website.atlassian.net/browse/OW-4?focusedCommentId=10334)
    // {
    //   title: "header-nav-tab-partners-affiliate-partnership-title",
    //   link: "",
    //   icon: AffiliatePartnershipIcon,
    //   description: "header-nav-tab-partners-affiliate-partnership-desc",
    // },
  ],
};

export const FSA_MENU_ITEMS = [
  FSA_TOP_MARKETS_TAB,
  FSA_TRADING_TAB,
  FSA_COMPANY_TAB,
  FSA_PARTNERS_TAB,
];

export const CYSEC_MENU_ITEMS = [
  CYSEC_TOP_MARKETS_TAB,
  CYSEC_TRADING_TAB,
  CYSEC_COMPANY_TAB,
];
