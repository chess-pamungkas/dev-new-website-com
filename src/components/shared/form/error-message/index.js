import React from "react";
import { useTranslationWithVariables } from "../../../../helpers/hooks/use-translation-with-vars";

const ErrorMessage = ({ text }) => {
  const { t } = useTranslationWithVariables();

  return <span className="error-message">{t(text)}</span>;
};

export default ErrorMessage;
