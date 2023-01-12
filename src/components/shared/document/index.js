import React from "react";
import cn from "classnames";
import { DownloadIcon } from "../icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

const Document = ({ className, document }) => {
  const { t } = useTranslation();

  return (
    <div className={cn("document", className)}>
      <a
        className="document__link"
        href={document.file}
        target="_blank"
        rel="noreferrer"
      >
        <DownloadIcon className="document__icon" />
        <span className="document__name">{t(document.name)}</span>
        <span
          className={cn(
            "button-link",
            "button-link--with-red-border",
            "document__mock-btn"
          )}
        >
          {t("legal_documents-btn")}
        </span>
      </a>
    </div>
  );
};

export default Document;
