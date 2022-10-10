import React from "react";
import { Formik } from "formik";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Input from "../../../shared/form/input";

const ContactUsForm = () => {
  const { t } = useTranslation();

  const handleContactForm = (values) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", subject: "", message: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        return errors;
      }}
      onSubmit={(values) => {
        handleContactForm(values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            title={t("contact-us_form_name")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            isError={errors.name && touched.name}
            errorMessage={errors.name}
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
          <Input
            type="text"
            name="message"
            title={t("contact-us_form_message")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.message}
          />
          <button
            type="submit"
            className="button-link button-link--with-red-border"
          >
            {t("contact-us_form_btn")}
          </button>
        </form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
