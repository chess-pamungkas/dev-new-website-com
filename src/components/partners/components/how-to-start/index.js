import React from "react";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import HowToStartItem from "../how-to-start-item";
import { START_STEPS } from "../../../../helpers/partners.config";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ButtonLink from "../../../shared/button-link";
import {
  DIR_LTR,
  DIR_RTL,
  GetLoginLink,
} from "../../../../helpers/constants";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";
import { getArrows } from "./get-arrows";
import { useRtlDirection } from "../../../../helpers/hooks/use-rtl-direction";
import { sitePostfix } from "../../../../helpers/entity-resolver";

const HowToStart = ({ className }) => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLG, isXL } = useWindowSize();
  const isRTL = useRtlDirection();
  const { arrow1, arrow2 } = getArrows(isMobile, isTablet, isLG, isXL);

  return (
    <section
      className={cn("partners-start", className, {
        "partners-start--rtl": isRTL,
      })}
      dir={isRTL ? DIR_RTL : DIR_LTR}
    >
      <h2 className="partners-start__title">{t(`partners_start-title${sitePostfix}`)}</h2>
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
        link={GetLoginLink()}
        className={cn("partners-start__btn")}
      >
        {t(`partners_start-btn${sitePostfix}`)}
      </ButtonLink>
      <img src={arrow1} alt="" className="partners-start__arrow1" />
      <img src={arrow2} alt="" className="partners-start__arrow2" />
    </section>
  );
};

export default HowToStart;
