import privacyPolicyFSA from "../assets/documents/fsa/Privacy_Policy_2.1.pdf";
import clientAgreementFSA from "../assets/documents/fsa/Client_Agreement_1.1.pdf";
import privacyPolicy from "../assets/documents/eu/Privacy_Policy_OQtima_EU_V.1.2.pdf";
import termsAndConditions from "../assets/documents/eu/Terms_and_Conditions_OQtima_EU_V.1.2.pdf";
import { isCySEC } from "./entity-resolver";

export const DATA_DELETION_POLICY_BLOCK = {
  p1: "data-deletion-form_form-privacy-p1",
  p2: "data-deletion-form_form-privacy-p2",
  privacyLink: isCySEC ? privacyPolicy: privacyPolicyFSA,
  privacyText: "data-deletion-form_form-privacy-privacy-text",
  p3: "data-deletion-form_form-privacy-p3",
  termsLink: isCySEC? termsAndConditions: clientAgreementFSA,
  termsText: "data-deletion-form_form-privacy-terms-text",
  p4: "data-deletion-form_form-privacy-p4",
};
