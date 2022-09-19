import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import Accordion from "../shared/accordion";
import { AccordionActiveIcon, AccordionIcon } from "../shared/icons";
import ButtonLink from "../shared/button-link";
import { FAQ_LINK } from "../../helpers/constants";

const Faq = ({ className, title, faq }) => {
  const { t } = useTranslation();

  return (
    <section className={cn("faq", className)}>
      <div className="faq__wrapper">
        <div className="faq__delimiter" />
        <h2 className="faq__title">{title || t("faq-title")}</h2>
        <div className="faq__accordion-wrapper">
          {faq.length > 0 &&
            faq.map((item, i) => (
              <Accordion
                key={`faq-accordion-${i}`}
                className="faq__accordion"
                icon={AccordionIcon}
                iconForActive={AccordionActiveIcon}
                title={item.title}
              >
                {item.content.map((content, i) => (
                  <span
                    className={cn("faq__text", {
                      "faq__text--bold": item.bold?.includes(i),
                    })}
                  >
                    {t(content)}
                  </span>
                ))}
              </Accordion>
            ))}
        </div>
        <ButtonLink link={FAQ_LINK} className="button-link--with-red-border">
          {t("faq-btn-text")}
        </ButtonLink>
      </div>
    </section>
  );
};

export default Faq;
