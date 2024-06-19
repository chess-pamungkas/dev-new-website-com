import { useContext } from "react";
import { isCySEC } from "./entity-resolver";
import LanguageContext from "../context/language-context";

// FSA docs
const FSA_DOCS_FOLDER = "https://docs.oqtima.com/legal";
const EU_DOCS_FOLDER = "https://docs.oqtima.eu/legal";

const bestExecutionPolicyFSA = {
  filename: "Best_Execution_Policy.pdf",
  languages: ["en"],
};
const complaintHandlingPolicyFSA = {
  filename: "Complaint_Handling_Policy.pdf",
  languages: ["en"],
};
const riskDisclosureNoticeFSA = {
  filename: "Risk_Disclosure_Notice.pdf",
  languages: ["en"],
};
const cookiePolicyFSA = {
  filename: "Cookie_Policy.pdf",
  languages: ["en"],
};
export const privacyPolicyFSA = {
  filename: "Privacy_Policy.pdf",
  languages: ["en"],
};
export const clientAgreementFSA = {
  filename: "Client_Agreement.pdf",
  languages: ["en"],
};

// EU docs
const clientCategorisationNotice = {
  filename: "Client_Categorisation_Notice_OQtima_EU.pdf",
  languages: ["en"],
};
const complaintHandlingPolicy = {
  filename: "Complaint_Handling_Policy_OQtima_EU.pdf",
  languages: ["en"],
};
const conflictOfInterestPolicy = {
  filename: "Conflict_of_Interest_Policy_OQtima_EU.pdf",
  languages: ["en"],
};
const investorCompensationFund = {
  filename: "Investor_Compensation_Fund_OQtima_EU.pdf",
  languages: ["en"],
};
const orderExecutionPolicy = {
  filename: "Order_Execution_Policy_OQtima_EU.pdf",
  languages: ["en"],
};
const riskDisclosure = {
  filename: "Risk_Disclosure_OQtima_EU.pdf",
  languages: ["en"],
};
const keyInformationFX = {
  filename: "Key_Information_Document_FX.pdf",
  languages: ["en", "de", "pt", "it"],
};
const keyInformationIndices = {
  filename: "Key_Information_Document_Indices.pdf",
  languages: ["en", "de", "pt", "it"],
};
const keyInformationCommodities = {
  filename: "Key_Information_commo.pdf",
  languages: ["en", "de", "pt", "it"],
};
const keyInformationETF = {
  filename: "Key_Information_Document_ETFs_Oqtima.pdf",
  languages: ["en", "de", "pt", "it"],
};
const keyInformationStocks = {
  filename: "Key_Information_Document_Stocks_Oqtima.pdf",
  languages: ["en", "de", "pt", "it"],
};
const summaryStatement = {
  filename: "Execution_Quality_Summary_Statement_2023_OQtima_EU.pdf",
  languages: ["en"],
};
const disciplineReport = {
  filename:
    "Disclosure_and_Market_Discipline_Report_Pillar_III_2024_OQtima_EU.pdf",
  languages: ["en"],
};
export const privacyPolicy = {
  filename: "Privacy_Policy_OQtima_EU.pdf",
  languages: ["en"],
};
export const termsAndConditions = {
  filename: "Terms_and_Conditions_OQtima_EU.pdf",
  languages: ["en"],
};
export const bestOrderAndExecPolicy = {
  filename: "Best_Order_and_Execution_Policy_OQtima_EU.pdf",
  languages: ["en"],
};

export const MT4_DOC = summaryStatement;
export const MT5_DOC = summaryStatement;
export const CTRADER_DOC = summaryStatement;
export const TRADING_VIEW_DOC = summaryStatement;

const generateFileLinkWithLang = (fileObj, langObj) => {
  const languagePart = fileObj.languages.includes(langObj.id)
    ? langObj.URIPart
    : "";
  const docsFolder = isCySEC ? EU_DOCS_FOLDER : FSA_DOCS_FOLDER;
  return `${docsFolder}${languagePart}/${fileObj.filename}`;
};

const LEGAL_DOCS = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return [
    {
      name: "document-client-categorisation-notice-name",
      file: generateFileLinkWithLang(
        clientCategorisationNotice,
        selectedLanguage
      ),
    },
    {
      name: "document-complaint-policy-name",
      file: generateFileLinkWithLang(complaintHandlingPolicy, selectedLanguage),
    },
    {
      name: "document-conflict-of-interest-name",
      file: generateFileLinkWithLang(
        conflictOfInterestPolicy,
        selectedLanguage
      ),
    },
    {
      name: "document-terms-and-cond-name",
      file: generateFileLinkWithLang(termsAndConditions, selectedLanguage),
    },
    {
      name: "document-investor-compensation-fund-name",
      file: generateFileLinkWithLang(
        investorCompensationFund,
        selectedLanguage
      ),
    },
    {
      name: "document-order-execution-name",
      file: generateFileLinkWithLang(orderExecutionPolicy, selectedLanguage),
    },
    {
      name: "document-best-order-execution-name",
      file: generateFileLinkWithLang(bestOrderAndExecPolicy, selectedLanguage),
    },
    {
      name: "document-privacy-policy-name",
      file: generateFileLinkWithLang(privacyPolicy, selectedLanguage),
    },
    {
      name: "document-risk-disclosure-name",
      file: generateFileLinkWithLang(riskDisclosure, selectedLanguage),
    },
    {
      name: "document-key-FX-name",
      file: generateFileLinkWithLang(keyInformationFX, selectedLanguage),
    },
    {
      name: "document-key-indices-name",
      file: generateFileLinkWithLang(keyInformationIndices, selectedLanguage),
    },
    {
      name: "document-key-commodities-name",
      file: generateFileLinkWithLang(
        keyInformationCommodities,
        selectedLanguage
      ),
    },
    {
      name: "document-key-etf-name",
      file: generateFileLinkWithLang(keyInformationETF, selectedLanguage),
    },
    {
      name: "document-key-stocks-name",
      file: generateFileLinkWithLang(keyInformationStocks, selectedLanguage),
    },
    {
      name: "document-summary-statement-name",
      file: generateFileLinkWithLang(summaryStatement, selectedLanguage),
    },
    {
      name: "document-discipline-report-name",
      file: generateFileLinkWithLang(disciplineReport, selectedLanguage),
    },
  ];
};

const LEGAL_DOCS_FSA = () => {
  const { selectedLanguage } = useContext(LanguageContext);

  return [
    {
      name: "document-best-execution-policy-fsa",
      file: generateFileLinkWithLang(bestExecutionPolicyFSA, selectedLanguage),
    },
    {
      name: "document-complaint-handling-policy-fsa",
      file: generateFileLinkWithLang(
        complaintHandlingPolicyFSA,
        selectedLanguage
      ),
    },
    {
      name: "document-privacy-policy-fsa",
      file: generateFileLinkWithLang(privacyPolicyFSA, selectedLanguage),
    },
    {
      name: "document-risk-disclosure-notice-fsa",
      file: generateFileLinkWithLang(riskDisclosureNoticeFSA, selectedLanguage),
    },
    {
      name: "document-cookie-policy-fsa",
      file: generateFileLinkWithLang(cookiePolicyFSA, selectedLanguage),
    },
    {
      name: "document-client-agreement-fsa",
      file: generateFileLinkWithLang(clientAgreementFSA, selectedLanguage),
    },
  ];
};

const RISK_DISCLOSURE_DOC_FSA = generateFileLinkWithLang(
  riskDisclosureNoticeFSA,
  "en"
);
export const RISK_DISCLOSURE_DOC = generateFileLinkWithLang(
  riskDisclosure,
  "en"
);

export const getLegalDocs = () => (isCySEC ? LEGAL_DOCS() : LEGAL_DOCS_FSA());
export const getRiskDisclosureDoc = () => {
  return isCySEC ? RISK_DISCLOSURE_DOC : RISK_DISCLOSURE_DOC_FSA;
};

export const termsAndConds = generateFileLinkWithLang(termsAndConditions, "en");
