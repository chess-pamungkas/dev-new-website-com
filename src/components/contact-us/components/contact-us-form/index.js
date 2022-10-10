import React, { useContext, useState } from "react";
import { Formik } from "formik";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Input from "../../../shared/form/input";
import Textarea from "../../../shared/form/textarea";
import cn from "classnames";
import { ContactUsSchema } from "../../../../validations/contact-us";
import axios from "axios";
import ClientResolverContext from "../../../../context/client-resolver-context";

const ContactUsForm = () => {
  const { t } = useTranslation();
  const [isSentSuccessful, setIsSentSuccessful] = useState(null);
  const API_URL = process.env.GATSBY_OQTIMA_API_URL;
  const { currentEntity } = useContext(ClientResolverContext);

  const handleContactForm = (values) => {
    console.log(values);
    axios
      .post(`${API_URL}mail`, {
        ...values,
        currentEntity,
      })
      .then((response) => {
        setIsSentSuccessful(response.ok);
      })
      .catch((response) => console.log(response));
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validationSchema={ContactUsSchema}
      onSubmit={(values) => {
        handleContactForm(values);
      }}
      enableReinitialize
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit} className="contact-us-form">
          <Input
            type="text"
            name="name"
            title={t("contact-us_form_name")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            isError={errors.name && touched.name}
            errorMessage={errors.name}
            isHalfWidth
          />
          <Input
            type="email"
            name="email"
            title={t("contact-us_form_email")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            isError={errors.email && touched.email}
            errorMessage={errors.email}
            isHalfWidth
          />
          <Input
            type="text"
            name="subject"
            title={t("contact-us_form_subject")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.subject}
            isError={errors.subject && touched.subject}
            errorMessage={errors.subject}
          />
          <Textarea
            type="text"
            name="message"
            title={t("contact-us_form_message")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
            isError={errors.message && touched.message}
            errorMessage={errors.message}
            placeholder={t("contact-us_form_placeholder")}
          />
          <button
            type="submit"
            className={cn(
              "button-link",
              "button-link--with-red-border",
              "contact-us-form__btn",
              {
                "button-link--disabled":
                  Object.values(errors).length > 0 ||
                  (Object.values(errors).length === 0 &&
                    Object.values(touched).length > 0) ||
                  Object.values(touched).length === 0,
              }
            )}
          >
            {t("contact-us_form_btn")}
          </button>

          {isSentSuccessful !== null && (
            <p
              className={cn("contact-us-form__message", {
                "contact-us-form__message--failure": !isSentSuccessful,
              })}
            >
              {t(
                isSentSuccessful
                  ? "contact-us_form_success_message"
                  : "contact-us_form_failure_message"
              )}
            </p>
          )}
        </form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
