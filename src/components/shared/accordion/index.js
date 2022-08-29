import React from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { AngleDownIcon } from "../icons";

const Accordion = ({ children, className, title, isOpen, onSelect }) => {
  const { t } = useTranslation();

  return (
    <section
      className={cn("accordeon", { "accordeon--open": isOpen }, className)}
    >
      <button className="accordeon__title" onClick={() => onSelect(title)}>
        {t(title)}

        <AngleDownIcon className="accordeon__icon" />
      </button>

      {isOpen && <div className="accordeon__expandable">{children}</div>}
    </section>
  );
};

export default Accordion;
