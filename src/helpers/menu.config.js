import { useContext } from "react";
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
  MT4Icon,
  MT5Icon,
  AccountsIcon,
  SpreadAndFeesIcon,
  CTraderIcon,
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
  GetRegistrationLink,
} from "./constants";
import { isCySEC } from "./entity-resolver";
import ClientResolverContext from "../context/client-resolver-context";

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
      title: "header-nav-tab-top-markets-crypto-title-fsa",
      link: CRYPTO_PAGE_LINK,
      icon: CryptoIcon,
      description: "header-nav-tab-top-markets-crypto-desc-fsa",
    },
    ...CYSEC_TOP_MARKETS_TAB.subItems,
  ],
};

const CYSEC_PLATFORMS_TAB = {
  title: "header-nav-tab-platforms-title",
  subItems: [
    // {
    //   title: "header-nav-tab-platforms-general-title",
    //   link: PLATFORMS_LINK,
    //   icon: PlatformsIcon,
    //   description: "header-nav-tab-platforms-general-desc",
    // },
    {
      title: "header-nav-tab-platforms-ctrader-title",
      link: CTRADER_PAGE_LINK,
      icon: CTraderIcon,
      description: "header-nav-tab-platforms-ctrader-desc",
    },
    {
      title: "header-nav-tab-platforms-mt5-title",
      link: MT5_PAGE_LINK,
      icon: MT5Icon,
      description: "header-nav-tab-platforms-mt5-desc",
    },
  ],
};

const FSA_PLATFORMS_TAB = {
  title: "header-nav-tab-platforms-title",
  subItems: [
    // {
    //   title: "header-nav-tab-platforms-general-title",
    //   link: PLATFORMS_LINK,
    //   icon: PlatformsIcon,
    //   description: "header-nav-tab-platforms-general-desc",
    // },
    {
      title: "header-nav-tab-platforms-ctrader-title",
      link: CTRADER_PAGE_LINK,
      icon: CTraderIcon,
      description: "header-nav-tab-platforms-ctrader-desc",
    },

    {
      title: "header-nav-tab-platforms-mt4-title",
      link: MT4_PAGE_LINK,
      icon: MT4Icon,
      description: "header-nav-tab-platforms-mt4-desc",
    },
  ],
};

const FSA_TRADING_TAB = {
  title: "header-nav-tab-trading",
  subItems: [
    {
      title: "header-nav-tab-trading-funding-withdrawals-accounts-title",
      link: ACCOUNTS_TYPE_PAGE_LINK,
      icon: AccountsIcon,
      description: "header-nav-tab-trading-funding-withdrawals-accounts-desc",
    },
    {
      title: "header-nav-tab-trading-funding-withdrawals-title",
      link: WITHDRAWAL_PAGE_LINK,
      icon: FundingWithdrawalsIcon,
      description: "header-nav-tab-trading-funding-withdrawals-desc",
    },
    {
      title: "header-nav-tab-trading-funding-withdrawals-spreads-title",
      link: SPREADS_AND_FEES_PAGE_LINK,
      icon: SpreadAndFeesIcon,
      description: "header-nav-tab-trading-funding-withdrawals-spreads-desc",
    },
    // Probably we will need these items later
    // {
    //   title: "header-nav-tab-trading-copy-trading-title",
    //   link: "",
    //   icon: CopyTradingIcon,
    //   description: "header-nav-tab-trading-copy-trading-desc",
    // },
    // {
    //   title: "header-nav-tab-trading-why-trade-with-title",
    //   link: "",
    //   icon: Logo,
    //   description: "header-nav-tab-trading-why-trade-with-desc",
    // },
    // {
    //   title: "header-nav-tab-trading-trading-tools-title",
    //   link: "",
    //   icon: Logo,
    //   description: "header-nav-tab-trading-trading-tools-desc",
    // },
    // {
    //   title: "header-nav-tab-trading-trading-tools-tradeview-title",
    //   link: TRADING_VIEW_PAGE_LINK,
    //   icon: Logo,
    //   description: "header-nav-tab-trading-trading-tools-tradeview-desc",
    // },
    // {
    //   title: "header-nav-tab-trading-trading-tools-economic-calendar-title",
    //   link: "",
    //   icon: Logo,
    //   description: "header-nav-tab-trading-trading-tools-economic-calendar-desc",
    // },
    // {
    //   title: "header-nav-tab-trading-trading-tools-market-sentiment-tools-title",
    //   link: "",
    //   icon: Logo,
    //   description: "header-nav-tab-trading-trading-tools-market-sentiment-tools-desc",
    // },
    // {
    //   title: "header-nav-tab-trading-education-how-to-videos-title",
    //   link: "",
    //   icon: Logo,
    //   description: "header-nav-tab-trading-education-how-to-videos-desc",
    // },
  ],
};

const CYSEC_TRADING_TAB = {
  title: "header-nav-tab-trading",
  subItems: [
    ...FSA_TRADING_TAB.subItems,
    {
      title: "header-nav-tab-trading-professional-qualification-title-cysec",
      link: PROFESSIONAL_QUALIFICATION_PAGE_LINK,
      icon: ProfessionalQualificationIcon,
      description:
        "header-nav-tab-trading-professional-qualification-desc-cysec",
    },
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
    ...CYSEC_COMPANY_TAB.subItems,
    {
      desktopOnly: true,
      title: "header-nav-tab-partners-collaboration-partnership-title-fsa",
      link: PARTNERS_PAGE_LINK,
      icon: CollaborationPartnershipIcon,
      description: "header-nav-tab-partners-collaboration-partnership-desc-fsa",
    },
  ],
};

const FSA_PARTNERS_TAB = {
  mobileOnly: true,
  title: "header-nav-tab-partners-fsa",
  subItems: [
    {
      title: "header-nav-tab-partners-collaboration-partnership-title-fsa",
      link: PARTNERS_PAGE_LINK,
      icon: CollaborationPartnershipIcon,
      description: "header-nav-tab-partners-collaboration-partnership-desc-fsa",
    },
  ],
};

const FSA_MENU_ITEMS = [
  FSA_TOP_MARKETS_TAB,
  FSA_TRADING_TAB,
  FSA_PLATFORMS_TAB,
  FSA_COMPANY_TAB,
  FSA_PARTNERS_TAB,
];

const CYSEC_MENU_ITEMS = [
  CYSEC_TOP_MARKETS_TAB,
  CYSEC_TRADING_TAB,
  CYSEC_PLATFORMS_TAB,
  CYSEC_COMPANY_TAB,
];

export const getMenuItems = () => (isCySEC ? CYSEC_MENU_ITEMS : FSA_MENU_ITEMS);

export const getCornerItems = () => {
  const { clientConfig } = useContext(ClientResolverContext);

  return [
    ...(clientConfig?.banned
      ? []
      : [
          {
            link: GetRegistrationLink(),
            title: "button-get-started",
          },
        ]),
    {
      link: isCySEC ? PROFESSIONAL_QUALIFICATION_PAGE_LINK : PARTNERS_PAGE_LINK,
      title: isCySEC
        ? "header-nav-tab-corner-pro-title-cysec"
        : "header-nav-tab-partners-fsa",
    },
    {
      link: CONTACT_US_PAGE_LINK,
      title: "header-nav-tab-company-contact-title",
    },
  ];
};
