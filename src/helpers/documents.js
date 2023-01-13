import bestExecutionPolicyFSA from "../assets/documents/fsa/Best_Execution_Policy_V1.pdf";
import complaintHandlingPolicyFSA from "../assets/documents/fsa/Complaint_Handling_Policy_V1.pdf";
import privacyPolicyFSA from "../assets/documents/fsa/Privacy_Policy_V1.pdf";
import riskDisclosureNoticeFSA from "../assets/documents/fsa/Risk_Disclosure_Notice_V1.pdf";
import cookiePolicyFSA from "../assets/documents/fsa/Cookie_Policy_V1.pdf";

import privacyPolicy from "../assets/documents/eu/Privacy_Policy-.pdf";
import clientCategorisationNotice from "../assets/documents/eu/Client_Categorisation_Notice.pdf";
import complaintHandlingPolicy from "../assets/documents/eu/Complaint-Handling-Policy.pdf";
import conflictOfInterestPolicy from "../assets/documents/eu/Conflict_of_Interest_Policy-.pdf";
import termsAndConditions from "../assets/documents/eu/Terms-and-Conditions-OQTIMA_SEPT-2022-v1.1.pdf";
import investorCompensationFund from "../assets/documents/eu/Investor_Compensation_Fund-1.pdf";
import orderExecutionPolicy from "../assets/documents/eu/Order_Execution_Policy-.pdf";
import riskDisclosure from "../assets/documents/eu/Risk_Disclosure.pdf";
import keyInformationFX from "../assets/documents/eu/Key_Information_Document_FX.pdf";
import keyInformationIndices from "../assets/documents/eu/Key_Information_Document_Indices.pdf";
import keyInformationCommodities from "../assets/documents/eu/Key_Information_commo.pdf";
import summaryStatement from "../assets/documents/eu/Execution_Quality_Summary_Statement_-_2021-1.pdf";
import disciplineReport from "../assets/documents/eu/Disclosure_and_Market_Discipline_Report_Pillar_III_2021.pdf";

// TODO replace with the real doc
export const MT4_DOC = summaryStatement;
export const MT5_DOC = summaryStatement;
export const CTRADER_DOC = summaryStatement;
export const TRADING_VIEW_DOC = summaryStatement;

export const LEGAL_DOCS = [
  {
    name: "document-client-categorisation-notice-name",
    file: clientCategorisationNotice,
    // TODO replace with the real data
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
    name: "document-summary-statement-name",
    file: summaryStatement,
  },
  {
    name: "document-discipline-report-name",
    file: disciplineReport,
  },
];

export const LEGAL_DOCS_FSA = [
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
];

export const RISK_DISCLOSURE_DOC_FSA = riskDisclosureNoticeFSA;
export const RISK_DISCLOSURE_DOC = riskDisclosure;
