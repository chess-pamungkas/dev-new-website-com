import { isCySEC } from "./entity-resolver";
// FSA docs
const bestExecutionPolicyFSA =
  "https://docs.oqtima.com/legal/Best_Execution_Policy.pdf";
const complaintHandlingPolicyFSA =
  "https://docs.oqtima.com/legal/Complaint_Handling_Policy.pdf";
const riskDisclosureNoticeFSA =
  "https://docs.oqtima.com/legal/Risk_Disclosure_Notice.pdf";
const cookiePolicyFSA = "https://docs.oqtima.com/legal/Cookie_Policy.pdf";
export const privacyPolicyFSA =
  "https://docs.oqtima.com/legal/Privacy_Policy.pdf";
export const clientAgreementFSA =
  "https://docs.oqtima.com/legal/Client_Agreement.pdf";
// EU docs
const clientCategorisationNotice =
  "https://docs.oqtima.eu/legal/Client_Categorisation_Notice_OQtima_EU.pdf";
const complaintHandlingPolicy =
  "https://docs.oqtima.eu/legal/Complaint_Handling_Policy_OQtima_EU.pdf";
const conflictOfInterestPolicy =
  "https://docs.oqtima.eu/legal/Conflict_of_Interest_Policy_OQtima_EU.pdf";
const investorCompensationFund =
  "https://docs.oqtima.eu/legal/Investor_Compensation_Fund_OQtima_EU.pdf";
const orderExecutionPolicy =
  "https://docs.oqtima.eu/legal/Order_Execution_Policy_OQtima_EU.pdf";
const riskDisclosure =
  "https://docs.oqtima.eu/legal/Risk_Disclosure_OQtima_EU.pdf";
const keyInformationFX =
  "https://docs.oqtima.eu/legal/Key_Information_Document_FX.pdf";
const keyInformationIndices =
  "https://docs.oqtima.eu/legal/Key_Information_Document_Indices.pdf";
const keyInformationCommodities =
  "https://docs.oqtima.eu/legal/Key_Information_commo.pdf";
const keyInformationETF =
  "https://docs.oqtima.eu/legal/Key_Information_Document_ETFs_Oqtima.pdf";
const keyInformationStocks =
  "https://docs.oqtima.eu/legal/Key_Information_Document_Stocks_Oqtima.pdf";
const summaryStatement =
  "https://docs.oqtima.eu/legal/Execution_Quality_Summary_Statement_2022_OQtima_EU.pdf";
const disciplineReport =
  "https://docs.oqtima.eu/legal/Disclosure_and_Market_Discipline_Report_Pillar_III_2022_OQtima_EU.pdf";
export const privacyPolicy =
  "https://docs.oqtima.eu/legal/Privacy_Policy_OQtima_EU.pdf";
export const termsAndConditions =
  "https://docs.oqtima.eu/legal/Terms_and_Conditions_OQtima_EU.pdf";
export const bestOrderAndExecPolicy =
  "https://docs.oqtima.eu/legal/Best_Order_and_Execution_Policy_OQtima_EU.pdf";

export const MT4_DOC = summaryStatement;
export const MT5_DOC = summaryStatement;
export const CTRADER_DOC = summaryStatement;
export const TRADING_VIEW_DOC = summaryStatement;

const LEGAL_DOCS = [
  {
    name: "document-client-categorisation-notice-name",
    file: clientCategorisationNotice,
  },
  {
    name: "document-complaint-policy-name",
    file: complaintHandlingPolicy,
  },
  {
    name: "document-conflict-of-interest-name",
    file: conflictOfInterestPolicy,
  },
  {
    name: "document-terms-and-cond-name",
    file: termsAndConditions,
  },
  {
    name: "document-investor-compensation-fund-name",
    file: investorCompensationFund,
  },
  {
    name: "document-order-execution-name",
    file: orderExecutionPolicy,
  },
  {
    name: "document-best-order-execution-name",
    file: bestOrderAndExecPolicy,
  },
  {
    name: "document-privacy-policy-name",
    file: privacyPolicy,
  },
  {
    name: "document-risk-disclosure-name",
    file: riskDisclosure,
  },
  {
    name: "document-key-FX-name",
    file: keyInformationFX,
  },
  {
    name: "document-key-indices-name",
    file: keyInformationIndices,
  },
  {
    name: "document-key-commodities-name",
    file: keyInformationCommodities,
  },
  {
    name: "document-key-etf-name",
    file: keyInformationETF,
  },
  {
    name: "document-key-stocks-name",
    file: keyInformationStocks,
  },
  {
    name: "document-summary-statement-name",
    file: summaryStatement,
  },
  {
    name: "document-discipline-report-name",
    file: disciplineReport,
  },
];

const LEGAL_DOCS_FSA = [
  {
    name: "document-best-execution-policy-fsa",
    file: bestExecutionPolicyFSA,
  },
  {
    name: "document-complaint-handling-policy-fsa",
    file: complaintHandlingPolicyFSA,
  },
  {
    name: "document-privacy-policy-fsa",
    file: privacyPolicyFSA,
  },
  {
    name: "document-risk-disclosure-notice-fsa",
    file: riskDisclosureNoticeFSA,
  },
  {
    name: "document-cookie-policy-fsa",
    file: cookiePolicyFSA,
  },
  {
    name: "document-client-agreement-fsa",
    file: clientAgreementFSA,
  },
];

const RISK_DISCLOSURE_DOC_FSA = riskDisclosureNoticeFSA;
export const RISK_DISCLOSURE_DOC = riskDisclosure;

export const getLegalDocs = () => (isCySEC ? LEGAL_DOCS : LEGAL_DOCS_FSA);
export const getRiskDisclosureDoc = () =>
  isCySEC ? RISK_DISCLOSURE_DOC : RISK_DISCLOSURE_DOC_FSA;
