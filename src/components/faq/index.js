import React from "react";
import cn from "classnames";
import Accordion from "../shared/accordion";
import { AccordionActiveIcon, AccordionIcon } from "../shared/icons";
import { stringTransformToKebabCase } from "../../helpers/services/string-service";
import ButtonLink from "../shared/button-link";
import { FAQ_LINK } from "../../helpers/constants";

const FAQ = ({ className, title, faq }) => {
  return (
    <section className={cn("faq", className)}>
      <div className="faq__wrapper">
        <div className="faq__delimiter" />
        <h2 className="faq__title">
          {title || "Frequently Asked Questions (FAQ)"}
        </h2>
        <div className="faq__accordion-wrapper">
          {faq.length > 0 &&
            faq.map((item) => (
              <Accordion
                key={`${stringTransformToKebabCase(item.title)}-faq`}
                className="faq__accordion"
                icon={AccordionIcon}
                iconForActive={AccordionActiveIcon}
                title={item.title}
              >
                {item.content}
              </Accordion>
            ))}
        </div>
        <ButtonLink link={FAQ_LINK} className="button-link--with-red-border">
          See more FAQ
        </ButtonLink>
      </div>
    </section>
  );
};

export default FAQ;
