import bestExecutionPolicyFSA from "../assets/documents/fsa/Best_Execution_Policy_V1.pdf";
import complaintHandlingPolicyFSA from "../assets/documents/fsa/Complaint_Handling_Policy_V1.pdf";
import privacyPolicyFSA from "../assets/documents/fsa/Privacy_Policy_2.1.pdf";
import riskDisclosureNoticeFSA from "../assets/documents/fsa/Risk_Disclosure_Notice_V1.pdf";
import cookiePolicyFSA from "../assets/documents/fsa/Cookie_Policy_V1.pdf";
import clientAgreementFSA from "../assets/documents/fsa/Client_Agreement_1.1.pdf";

import privacyPolicy from "../assets/documents/eu/Privacy_Policy_OQtima_EU_V.1.2.pdf";
import clientCategorisationNotice from "../assets/documents/eu/Client_Categorisation_Notice_OQtima_EU_V.1.2.pdf";
import complaintHandlingPolicy from "../assets/documents/eu/Complaint_Handling_Policy_OQtima_EU_V.1.2.pdf";
import conflictOfInterestPolicy from "../assets/documents/eu/Conflict_of_Interest_Policy_OQtima_EU_V.1.2.pdf";
import termsAndConditions from "../assets/documents/eu/Terms_and_Conditions_OQtima_EU_V.1.2.pdf";
import investorCompensationFund from "../assets/documents/eu/Investor_Compensation_Fund_OQtima_EU_V.1.2.pdf";
import orderExecutionPolicy from "../assets/documents/eu/Order_Execution_Policy_OQtima_EU_V.1.2.pdf";
import riskDisclosure from "../assets/documents/eu/Risk_Disclosure_OQtima_EU_V.1.2.pdf";
import keyInformationFX from "../assets/documents/eu/Key_Information_Document_FX.pdf";
import keyInformationIndices from "../assets/documents/eu/Key_Information_Document_Indices.pdf";
import keyInformationCommodities from "../assets/documents/eu/Key_Information_commo.pdf";
import keyInformationETF from "../assets/documents/eu/Key_Information_Document_ETFs_Oqtima.pdf";
import keyInformationStocks from "../assets/documents/eu/Key_Information_Document_Stocks_Oqtima.pdf";
import summaryStatement from "../assets/documents/eu/Execution_Quality_Summary_Statement_2022_OQtima_EU_V.1.2.pdf";
import disciplineReport from "../assets/documents/eu/Disclosure_and_Market_Discipline_Report_Pillar_III_2022_OQtima_EU_V.1.2.pdf";
import { isCySEC } from "./entity-resolver";

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
