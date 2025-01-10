import { object, string, boolean } from "yup";
import { emailRegex, textRegex } from "./regex";

export const PopupRegistrationSchema = object().shape({
  first_name: string()
    .matches(textRegex, "First name is not valid")
    .required("First name is required"),
  last_name: string()
    .matches(textRegex, "Last name is not valid")
    .required("Last name is required"),
  email: string()
    .matches(emailRegex, "Email is not valid")
    .required("Email is required"),
  country: string().required("Country is required"),
  country_code: string().required("Country code is required"),
  mobile: string()
    .matches(/^\d+$/, "Mobile Number is not valid")
    .required("Mobile Number is required"),
  agreement: boolean()
    .oneOf([true], "You must accept the Privacy and Cookie Policy")
    .required("You must accept the Privacy and Cookie Policy"),
});
