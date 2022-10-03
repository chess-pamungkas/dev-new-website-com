import React from "react";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import HowToStartItem from "../how-to-start-item";
import { START_STEPS } from "../../../../helpers/partners.config";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ButtonLink from "../../../shared/button-link";
import { REGISTRATION_LINK } from "../../../../helpers/constants";

const HowToStart = ({ className }) => {
  const { t } = useTranslation();

  return (
    <section className={cn("partners-start", className)}>
      <h2 className="partners-start__title">{t("partners_start-title")}</h2>
      <div className="partners-start__items">
        {START_STEPS.length > 0 &&
          START_STEPS.map((block) => (
            <HowToStartItem
              key={`start-item-${stringTransformToKebabCase(block.text)}`}
              icon={block.icon}
              text={block.text}
              accent={block.accent}
            />
          ))}
      </div>
      <ButtonLink
        link={REGISTRATION_LINK}
        className={cn("partners-start__btn")}
      >
        {t("partners_start-btn")}
      </ButtonLink>
    </section>
  );
};

export default HowToStart;
