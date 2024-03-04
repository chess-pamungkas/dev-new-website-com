import React, { useState } from "react";
import { Formik } from "formik";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";
import Input from "../../../shared/form/input";
import cn from "classnames";
import axios from "axios";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { currentEntity } from "../../../../helpers/entity-resolver";
import { DataDeletionSchema } from "../../../../validations/data-deletion";
import Checkbox from "../../../shared/form/checkbox";
import HighlightedLocalizationText from "../../../shared/highlighted-localization-text";
import { DATA_DELETION_POLICY_BLOCK } from "../../../../helpers/data-deletion.config";
import { sendLog } from "../../../../helpers/services/log-service";

const DataDeletionForm = () => {
  const { t } = useTranslationWithVariables();
  const [isSentSuccessful, setIsSentSuccessful] = useState(null);
  const API_URL = process.env.GATSBY_OQTIMA_API_URL;
  const [completeDeletion, setCompleteDeletion] = useState(false);
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleApiResponse = (isSuccessful) => {
    setIsSentSuccessful(isSuccessful);
    setTimeout(() => {
      setIsSentSuccessful(null);
    }, 6000);
  };

  const handleForm = async (values) => {
    const token = await executeRecaptcha("data_deletion");
    axios
      .post(`${API_URL}data-deletion-mail`, {
        ...values,
        entity: currentEntity,
        token,
      })
      .then(() => {
        handleApiResponse(true);
      })
      .catch((response) => {
        console.log(response);
        sendLog(response);
        handleApiResponse(false);
      });
  };

  return (
    <Formik
      initialValues={{ email: "", accountNumber: "" }}
      validationSchema={DataDeletionSchema}
      onSubmit={(values, { resetForm }) => {
        handleForm(values);
        resetForm();
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
        <form onSubmit={handleSubmit} className="data-deletion-form">
          <Input
            type="email"
            name="email"
            title={t("data-deletion-form_form-email-field")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            isError={errors.email && touched.email}
            errorMessage={errors.email}
          />
          <Input
            type="text"
            name="accountNumber"
            title={t("data-deletion-form_form-account-field")}
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.accountNumber}
            isError={errors.accountNumber && touched.accountNumber}
            errorMessage={errors.accountNumber}
          />
          <Checkbox
            name="completeDeletion"
            title={t("data-deletion-form_form-complete-field-title")}
            note={t("data-deletion-form_form-complete-field-note")}
            text={
              <HighlightedLocalizationText
                localizationText="data-deletion-form_form-complete-field-text"
                wordsToHighlight="data-deletion-form_form-complete-field-text-accent"
                primaryClassName="highlighted-in-black"
                accentClassName="highlighted-in-red"
              />
            }
            checked={completeDeletion}
            onChange={() => setCompleteDeletion(!completeDeletion)}
          />
          <p className="data-deletion-form__privacy-text">
            <span className="data-deletion-form__privacy-text--bold">
              {t(DATA_DELETION_POLICY_BLOCK.p1)}
            </span>
            &nbsp;
            {t(DATA_DELETION_POLICY_BLOCK.p2)}&nbsp;
            <a
              href={DATA_DELETION_POLICY_BLOCK.privacyLink}
              target="_blank"
              rel="noreferrer"
            >
              {t(DATA_DELETION_POLICY_BLOCK.privacyText)}
            </a>
            &nbsp;
            {t(DATA_DELETION_POLICY_BLOCK.p3)}&nbsp;
            <a
              href={DATA_DELETION_POLICY_BLOCK.termsLink}
              target="_blank"
              rel="noreferrer"
            >
              {t(DATA_DELETION_POLICY_BLOCK.termsText)}
            </a>
            &nbsp;
            {t(DATA_DELETION_POLICY_BLOCK.p4)}
          </p>
          <button
            type="submit"
            className={cn(
              "button-link",
              "button-link--with-red-border",
              "data-deletion-form__btn",
              {
                "data-deletion-form__btn--disabled":
                  Object.values(errors).length > 0 ||
                  Object.values(touched).length === 0 ||
                  !completeDeletion,
              }
            )}
          >
            {t("contact-us_form_btn")}
          </button>

          {isSentSuccessful !== null && (
            <p
              className={cn("data-deletion-form__message", {
                "data-deletion-form__message--failure": !isSentSuccessful,
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

export default DataDeletionForm;
