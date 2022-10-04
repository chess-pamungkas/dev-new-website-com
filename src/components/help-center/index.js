import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import {
  FAQ_ALL,
  FAQ_BEGINNERS,
  FAQ_MARKET,
  FAQ_QUICK_ANSWER,
} from "../../helpers/faq";
import Faq from "../faq";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";

const HelpCenter = ({ className }) => {
  const { t } = useTranslation();

  const HelpCenterBlock = ({ title, subtitle, faq, classNames }) => (
    <div className="help-center__block">
      {title && <h4 className="help-center__block-title">{title}</h4>}
      {subtitle && <p className="help-center__block-subtitle">{subtitle}</p>}
      {faq.map((item) => (
        <Faq
          key={`faq-${stringTransformToKebabCase(item.title || title)}`}
          title={
            item.title ? (
              <>
                <img src={item.icon} alt="" className="help-center__title-icon" />
                <span>{t(item.title)}</span>
              </>
            ) : (
              ""
            )
          }
          faq={item.content}
          className={cn("faq--help-center", classNames)}
          isFaqBtnHidden
        />
      ))}
    </div>
  );

  return (
    <section className={cn("help-center", className)}>
      <div className="help-center__wrapper">
        <h2 className="help-center__title">{t("faq-title")}</h2>
        <HelpCenterBlock
          title={t("faq_quick-title")}
          subtitle={t("faq_quick-subtitle")}
          faq={FAQ_QUICK_ANSWER}
          classNames={["help-center--no-title", "help-center--quick-answer"]}
        />
        <HelpCenterBlock faq={FAQ_ALL} classNames={["help-center--all"]} />
        <HelpCenterBlock
          title={t("faq_market-title")}
          faq={FAQ_MARKET}
          classNames={["help-center--market"]}
        />
        <HelpCenterBlock
          title={t("faq_beginners-title")}
          faq={FAQ_BEGINNERS}
          classNames={["help-center--no-title", "help-center--beginners"]}
        />
      </div>
    </section>
  );
};

export default HelpCenter;
