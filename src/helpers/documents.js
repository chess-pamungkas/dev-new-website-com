import privacyPolicy from "../assets/documents/Privacy_Policy.pdf";
import clientCategorisationNotice from "../assets/documents/Client_Categorisation_Notice.pdf";
import complaintHandlingPolicy from "../assets/documents/Complaint_Handling_Policy.pdf";
import conflictOfInterestPolicy from "../assets/documents/Conflict_of_Interest_Policy.pdf";
import termsAndConditions from "../assets/documents/Terms_and_Conditions.pdf";
import investorCompensationFund from "../assets/documents/Investor_Compensation_Fund-1.pdf";
import orderExecutionPolicy from "../assets/documents/Order_Execution_Policy.pdf";
import riskDisclosure from "../assets/documents/Risk_Disclosure.pdf";
import keyInformationFX from "../assets/documents/Key_Information_Document_FX.pdf";
import keyInformationIndices from "../assets/documents/Key_Information_Document_Indices.pdf";
import keyInformationCommodities from "../assets/documents/Key_Information_commo.pdf";
import summaryStatement from "../assets/documents/Summary Statement.pdf";
import disciplineReport from "../assets/documents/Disclosure_and_Market_Discipline_Report_Pillar_III_2021.pdf";

// TODO replace with the real doc
export const MT4_DOC = summaryStatement;
export const MT5_DOC = summaryStatement;

export const LEGAL_DOCS = [
  {
    name: "document-client-categorisation-notice-name",
    file: clientCategorisationNotice,
    // TODO replace with the real data
    date: "09/05/2022",
  },
  {
    name: "document-complaint-policy-name",
    file: complaintHandlingPolicy,
    date: "09/05/2022",
  },
  {
    name: "document-conflict-of-interest-name",
    file: conflictOfInterestPolicy,
    date: "09/05/2022",
  },
  {
    name: "document-terms-and-cond-name",
    file: termsAndConditions,
    date: "09/05/2022",
  },
  {
    name: "document-investor-compensation-fund-name",
    file: investorCompensationFund,
    date: "09/05/2022",
  },
  {
    name: "document-order-execution-name",
    file: orderExecutionPolicy,
    date: "09/05/2022",
  },
  {
    name: "document-privacy-policy-name",
    file: privacyPolicy,
    date: "09/05/2022",
  },
  {
    name: "document-risk-disclosure-name",
    file: riskDisclosure,
    date: "09/05/2022",
  },
  {
    name: "document-key-FX-name",
    file: keyInformationFX,
    date: "09/05/2022",
  },
  {
    name: "document-key-indices-name",
    file: keyInformationIndices,
    date: "09/05/2022",
  },
  {
    name: "document-key-commodities-name",
    file: keyInformationCommodities,
    date: "09/05/2022",
  },
  {
    name: "document-summary-statement-name",
    file: summaryStatement,
    date: "09/05/2022",
  },
  {
    name: "document-discipline-report-name",
    file: disciplineReport,
    date: "09/05/2022",
  },
];
