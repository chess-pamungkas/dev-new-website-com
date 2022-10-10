import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";

const ErrorMessage = ({ text }) => {
  const { t } = useTranslation();

  return <span className="error-message">{t(text)}</span>;
};

export default ErrorMessage;
