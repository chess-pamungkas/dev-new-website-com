import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import { useTranslationWithVariables } from "../../../helpers/hooks/use-translation-with-vars";

const ArrowIcon = () => (
  <svg
    width="11"
    height="11"
    viewBox="0 0 11 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 5H9M9 5L5 1M9 5L5 9"
      stroke="black"
      strokeWidth="1.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const Document = ({ className, document }) => {
  const { t } = useTranslationWithVariables();

  return (
    <div className={cn("document", className)}>
      {/* Background Images */}
      <div className="document__background">
        <div className="document__background--desktop">
          <StaticImage
            src="../../../assets/images/legal/legal-download-card-desktop.svg"
            alt="Document Card Background Desktop"
            className="document__bg-image"
          />
        </div>
        <div className="document__background--mobile">
          <StaticImage
            src="../../../assets/images/legal/legal-download-card-mobile.svg"
            alt="Document Card Background Mobile"
            className="document__bg-image"
          />
        </div>
      </div>

      {/* Content */}
      <div className="document__content">
        {/* Top-Left Icon */}
        <div className="document__icon">
          <StaticImage
            src="../../../assets/images/legal/download-document.svg"
            alt="Document Icon"
            className="document__icon-img"
          />
        </div>

        {/* Document Name */}
        <h3 className="document__name">{t(document.name)}</h3>

        {/* View PDF Button */}
        <a
          className="document__view-pdf-btn"
          href={document.file}
          target="_blank"
          rel="noreferrer"
        >
          <span className="document__view-pdf-text">View PDF</span>
          <div className="document__view-pdf-icon">
            <ArrowIcon />
          </div>
        </a>
      </div>
    </div>
  );
};

Document.propTypes = {
  className: PropTypes.string,
  document: PropTypes.shape({
    file: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

export default Document;
