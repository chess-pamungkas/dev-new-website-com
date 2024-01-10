import {
  privacyPolicy,
  privacyPolicyFSA,
  termsAndConditions,
  clientAgreementFSA,
} from "./documents";
import { isCySEC } from "./entity-resolver";

export const DATA_DELETION_POLICY_BLOCK = {
  p1: "data-deletion-form_form-privacy-p1",
  p2: "data-deletion-form_form-privacy-p2",
  privacyLink: isCySEC ? privacyPolicy : privacyPolicyFSA,
  privacyText: "data-deletion-form_form-privacy-privacy-text",
  p3: "data-deletion-form_form-privacy-p3",
  termsLink: isCySEC ? termsAndConditions : clientAgreementFSA,
  termsText: "data-deletion-form_form-privacy-terms-text",
  p4: "data-deletion-form_form-privacy-p4",
};
