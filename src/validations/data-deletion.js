import { object, string } from "yup";
import { emailRegex } from "./regex";

export const DataDeletionSchema = object().shape({
  accountNumber: string()
    .required("contact-us_form_error_message_required")
    .trim(),
  email: string()
    .required("contact-us_form_error_message_required")
    .matches(emailRegex, {
      message: "contact-us_form_error_message_invalid",
    })
    .trim(),
});
