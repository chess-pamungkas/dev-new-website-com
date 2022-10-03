import React from "react";
import cn from "classnames";
import { stringTransformToKebabCase } from "../../../../helpers/services/string-service";
import HowToStartItem from "../how-to-start-item";
import { START_STEPS } from "../../../../helpers/partners.config";
import { useTranslation } from "gatsby-plugin-react-i18next";
import ButtonLink from "../../../shared/button-link";
import { REGISTRATION_LINK } from "../../../../helpers/constants";
import arrowLg from "../../../../assets/images/partners/arrow-lg.svg";
import arrowXl from "../../../../assets/images/partners/arrow-xl.svg";
import arrowSm1 from "../../../../assets/images/partners/arrow1-sm.svg";
import arrowSm2 from "../../../../assets/images/partners/arrow2-sm.svg";
import arrowMd1 from "../../../../assets/images/partners/arrow1-md.svg";
import arrowMd2 from "../../../../assets/images/partners/arrow2-md.svg";
import { useWindowSize } from "../../../../helpers/hooks/use-window-size";

const HowToStart = ({ className }) => {
  const { t } = useTranslation();
  const { isMobile, isTablet, isLG } = useWindowSize();

  let arrow1,
    arrow2 = "";
  if (isMobile) {
    arrow1 = arrowSm1;
    arrow2 = arrowSm2;
  } else if (isTablet) {
    arrow1 = arrowMd1;
    arrow2 = arrowMd2;
  } else if (isLG) {
    arrow1 = arrowLg;
  } else {
    arrow1 = arrowXl;
  }

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
      <img src={arrow1} alt="" className="partners-start__arrow1"></img>
      <img src={arrow2} alt="" className="partners-start__arrow2"></img>
    </section>
  );
};

export default HowToStart;
