import React from "react";
import cn from "classnames";
import { useRtlDirection } from "../../helpers/hooks/use-rtl-direction";
import { DIR_LTR, DIR_RTL } from "../../helpers/constants";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import { useTranslation } from "gatsby-plugin-react-i18next";
import HighlightedLocalizationText from "../shared/highlighted-localization-text";
import { CAREER_PROS } from "../../helpers/career.config";
import ProsBlock from "./components/pros-block";

const CareerPros = ({ className }) => {
  const isRTL = useRtlDirection();
  const { t } = useTranslation();

  return (
    <section
      className={cn("career-pros", className, {
        "career-pros--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <div className="career-pros__title-wrapper">
        <h2 className="career-pros__title">
          <HighlightedLocalizationText
            localizationText="career_pros-title"
            wordsToHighlight="career_pros-title-accent"
            primaryClassName="highlighted-in-black"
            accentClassName="highlighted-in-red"
          />
        </h2>
        <p className="career-pros__subtitle">{t("career_pros-subtitle")}</p>
      </div>
      <div className="career-pros__advantages">
        {CAREER_PROS.map((block) => (
          <ProsBlock
            key={`career-pros-${stringTransformToKebabCase(block.title)}`}
            icon={block.icon}
            title={block.title}
            text={block.text}
            description={block.description}
          />
        ))}
      </div>
    </section>
  );
};

export default CareerPros;
