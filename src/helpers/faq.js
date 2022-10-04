import forexIcon from "../assets/images/all-markets/forex.svg";
import indicesIcon from "../assets/images/all-markets/indices.svg";
import sharesIcon from "../assets/images/all-markets/shares.svg";
import commoditiesIcon from "../assets/images/all-markets/commodities.svg";
import energiesIcon from "../assets/images/all-markets/energies.svg";
import cryptoIcon from "../assets/images/all-markets/crypto.svg";
import accountIcon from "../assets/images/icons/account.svg";
import fundingIcon from "../assets/images/icons/funding.svg";
import tradingIcon from "../assets/images/icons/trading.svg";

export const FAQ_FOREX = [
  {
    question: "forex_faq-title1",
    answer: ["forex_faq-content1"],
  },
  {
    question: "forex_faq-title2",
    answer: ["forex_faq-content2"],
  },
  {
    question: "forex_faq-title3",
    answer: [
      "forex_faq-content3-1",
      "forex_faq-content3-2",
      "forex_faq-content3-3",
      "forex_faq-content3-4",
      "forex_faq-content3-5",
      "forex_faq-content3-6",
    ],
  },
];

export const FAQ_CRYPTO = [
  {
    question: "crypto_faq-title1",
    answer: ["crypto_faq-content1"],
  },
  {
    question: "crypto_faq-title2",
    answer: ["crypto_faq-content2"],
  },
  {
    question: "crypto_faq-title3",
    answer: ["crypto_faq-content3"],
  },
];

export const FAQ_COMMODITIES = [
  {
    question: "commodities_faq-title1",
    answer: ["commodities_faq-content1"],
  },
  {
    question: "commodities_faq-title2",
    answer: [
      "commodities_faq-content2-1",
      "commodities_faq-content2-2",
      "commodities_faq-content2-3",
      "commodities_faq-content2-4",
      "commodities_faq-content2-5",
    ],
  },
];

export const FAQ_SHARES = [
  {
    question: "shares_faq-title1",
    answer: ["shares_faq-content1"],
  },
  {
    question: "shares_faq-title2",
    answer: [
      "shares_faq-content2-1",
      "shares_faq-content2-2",
      "shares_faq-content2-3",
      "shares_faq-content2-4",
      "shares_faq-content2-5",
    ],
    // specify array of content indexes which should be bold, e.g. "shares_faq-content2-4" and "shares_faq-content2-5" will be bold
    bold: [3, 4],
  },
];

export const FAQ_INDICES = [
  {
    question: "indices_faq-title1",
    answer: ["indices_faq-content1"],
  },
  {
    question: "indices_faq-title2",
    answer: ["indices_faq-content2"],
  },
  {
    question: "indices_faq-title3",
    answer: ["indices_faq-content3"],
  },
];

export const FAQ_ENERGIES = [
  {
    question: "energies_faq-title1",
    answer: ["energies_faq-content1"],
  },
  {
    question: "energies_faq-title2",
    answer: ["energies_faq-content2-1", "energies_faq-content2-2"],
  },
];

export const FAQ_SPREADS_AND_FEES = [
  {
    question: "spreads_faq-title1",
    answer: ["spreads_faq-content1"],
  },
  {
    question: "spreads_faq-title2",
    answer: ["spreads_faq-content2"],
  },
  {
    question: "spreads_faq-title3",
    answer: ["spreads_faq-content3"],
  },
];

export const FAQ_QUICK_ANSWER = [
  {
    title: null,
    icon: null,
    content: [
      {
        question: "faq_quick-q1",
        answer: ["faq_quick-a1"],
      },
      {
        question: "faq_quick-q2",
        answer: ["faq_quick-a2"],
      },
      {
        question: "faq_quick-q3",
        answer: ["faq_quick-a3"],
      },
      {
        question: "faq_quick-q4",
        answer: ["faq_quick-a4"],
      },
      {
        question: "faq_quick-q5",
        answer: ["faq_quick-a5"],
      },
    ],
  },
];

export const FAQ_ALL = [
  {
    title: "faq_account-title",
    icon: accountIcon,
    content: [
      {
        question: "faq_account-q1",
        answer: ["faq_account-a1"],
      },
      {
        question: "faq_account-q2",
        answer: ["faq_account-a2"],
      },
      {
        question: "faq_account-q3",
        answer: ["faq_account-a3"],
      },
      {
        question: "faq_account-q4",
        answer: ["faq_account-a4"],
      },
      {
        question: "faq_account-q5",
        answer: ["faq_account-a5"],
      },
    ],
  },
  {
    title: "faq_funding-title",
    icon: fundingIcon,
    content: [
      {
        question: "faq_funding-q1",
        answer: ["faq_funding-a1"],
      },
      {
        question: "faq_funding-q2",
        answer: ["faq_funding-a2"],
      },
      {
        question: "faq_funding-q3",
        answer: ["faq_funding-a3"],
      },
      {
        question: "faq_funding-q4",
        answer: ["faq_funding-a4"],
      },
      {
        question: "faq_funding-q5",
        answer: ["faq_funding-a5"],
      },
    ],
  },
  {
    title: "faq_trading-title",
    icon: tradingIcon,
    content: [
      {
        question: "faq_trading-q1",
        answer: ["faq_trading-a1"],
      },
      {
        question: "faq_trading-q2",
        answer: ["faq_trading-a2"],
      },
      {
        question: "faq_trading-q3",
        answer: ["faq_trading-a3"],
      },
      {
        question: "faq_trading-q4",
        answer: ["faq_trading-a4"],
      },
      {
        question: "faq_trading-q5",
        answer: ["faq_trading-a5"],
      },
    ],
  },
];

export const FAQ_MARKET = [
  {
    title: "faq_forex-title",
    icon: forexIcon,
    content: [
      {
        question: "faq_forex-q1",
        answer: ["faq_forex-a1"],
      },
      {
        question: "faq_forex-q2",
        answer: ["faq_forex-a2"],
      },
      {
        question: "faq_forex-q3",
        answer: ["faq_forex-a3"],
      },
      {
        question: "faq_forex-q4",
        answer: ["faq_forex-a4"],
      },
    ],
  },
  {
    title: "faq_cryptocurrencies-title",
    icon: cryptoIcon,
    content: [
      {
        question: "faq_cryptocurrencies-q1",
        answer: ["faq_cryptocurrencies-a1"],
      },
      {
        question: "faq_cryptocurrencies-q2",
        answer: ["faq_cryptocurrencies-a2"],
      },
      {
        question: "faq_cryptocurrencies-q3",
        answer: ["faq_cryptocurrencies-a3"],
      },
    ],
  },
  {
    title: "faq_metals-title",
    icon: commoditiesIcon,
    content: [
      {
        question: "faq_metals-q1",
        answer: ["faq_metals-a1"],
      },
      {
        question: "faq_metals-q2",
        answer: ["faq_metals-a2"],
      },
    ],
  },
  {
    title: "faq_energies-title",
    icon: energiesIcon,
    content: [
      {
        question: "faq_energies-q1",
        answer: ["faq_energies-a1"],
      },
      {
        question: "faq_energies-q2",
        answer: ["faq_energies-a2"],
      },
    ],
  },
  {
    title: "faq_shares-title",
    icon: sharesIcon,
    content: [
      {
        question: "faq_shares-q1",
        answer: ["faq_shares-a1"],
      },
      {
        question: "faq_shares-q2",
        answer: ["faq_shares-a2"],
      },
    ],
  },
  {
    title: "faq_indices-title",
    icon: indicesIcon,
    content: [
      {
        question: "faq_indices-q1",
        answer: ["faq_indices-a1"],
      },
      {
        question: "faq_indices-q2",
        answer: ["faq_indices-a2"],
      },
    ],
  },
];

export const FAQ_BEGINNERS = [
  {
    title: null,
    icon: null,
    content: [
      {
        question: "faq_beginners-q1",
        answer: ["faq_beginners-a1"],
      },
      {
        question: "faq_beginners-q2",
        answer: ["faq_beginners-a2"],
      },
      {
        question: "faq_beginners-q3",
        answer: ["faq_beginners-a3"],
      },
      {
        question: "faq_beginners-q4",
        answer: ["faq_beginners-a4"],
      },
      {
        question: "faq_beginners-q5",
        answer: ["faq_beginners-a5"],
      },
      {
        question: "faq_beginners-q6",
        answer: ["faq_beginners-a6"],
      },
      {
        question: "faq_beginners-q7",
        answer: ["faq_beginners-a7"],
      },
    ],
  },
];
