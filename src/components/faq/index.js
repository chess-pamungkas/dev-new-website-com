import React from "react";
import cn from "classnames";
import Accordion from "../shared/accordion";
import { PlatformsIcon } from "../shared/icons";

const FAQ = ({ className, title }) => {
  return (
    <section className={cn("faq", className)}>
      <div className="faq__wrapper">
        <div className="faq__delimiter" />
        <h2 className="faq__title">
          {title || "Frequently Asked Questions (FAQ)"}
        </h2>
        <div>
          <Accordion
            className="faq__accordion"
            icon={PlatformsIcon}
            title="Consectetur Forex elit sed do eiusmod tempor incididunt?"
          >
            Апврвр
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
