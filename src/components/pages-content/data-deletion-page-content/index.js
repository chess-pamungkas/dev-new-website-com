import React from "react";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { useRtlDirection } from "../../../helpers/hooks/use-rtl-direction";
import HighlightedLocalizationText from "../../shared/highlighted-localization-text";
import DataDeletionForm from "../../data-deletion/components/deletion-form";

const DataDeletionContent = () => {
  const { t } = useTranslation();
  const isRTL = useRtlDirection();

  return (
    <>
      <section className="data-deletion-top">
        <h2 className="data-deletion-top__title">
          <HighlightedLocalizationText
            localizationText="data-deletion_top-title"
            wordsToHighlight="data-deletion_top-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </h2>
      </section>
      <section className="data-deletion-form-container">
        <div className="data-deletion-form-container__wrapper">
          <p className="data-deletion-form-container__title">
            {t("data-deletion-form_intro-title")}
          </p>
          <p className="data-deletion-form-container__description">
            <HighlightedLocalizationText
              localizationText="data-deletion-form_intro-description"
              wordsToHighlight="data-deletion-form_intro-description-accent"
              primaryClassName="highlighted-in-black"
              accentClassName="highlighted-in-red"
            />
          </p>
          <p className="data-deletion-form-container__title">
            {t("data-deletion-form_form-title")}
          </p>
          <p className="data-deletion-form-container__description">
            {t("data-deletion-form_form-description")}
          </p>
          <DataDeletionForm />
        </div>
      </section>
    </>
  );
};

export default DataDeletionContent;
