import React, { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { useTranslation } from "gatsby-plugin-react-i18next";
import { AngleDownIcon } from "../icons";
import { sendClickEventToGA } from "../../../helpers/services/google-analytics-service";

const Accordion = ({
  children,
  className,
  title,
  isOpen,
  onSelect,
  icon: Icon,
  iconForActive: IconForActive,
}) => {
  const { t } = useTranslation();

  const [isActive, setIsActive] = useState(isOpen);

  const handleClick = (title) => {
    if (onSelect) {
      // in case handling is needed in the parent component
      onSelect(title);
    } else {
      // default handling
      setIsActive(!isActive);
    }
  };

  useEffect(() => {
    if (onSelect) {
      setIsActive(isOpen);
    }
  }, [isOpen, onSelect]);

  const getIcon = useCallback(() => {
    const clsA = { show: isActive, hide: !isActive };
    const clsB = { show: !isActive, hide: isActive };

    return (
      <span className="btn-area">
        {IconForActive ? (
          <IconForActive className={cn(clsA)} />
        ) : (
          <Icon className={cn(clsA)} />
        )}
        <Icon className={cn(clsB)} />
        <Icon className="hidden" />
      </span>
    );
  }, [isActive, IconForActive]);

  return (
    <section
      className={cn("accordion", { "accordion--open": isActive }, className)}
    >
      <button
        type="button"
        className="accordion__title"
        onClick={(e) => {
          handleClick(title);
          sendClickEventToGA(e);
        }}
      >
        <span>{t(title)}</span>
        {Icon ? getIcon() : <AngleDownIcon className="accordion__icon" />}
      </button>
      {
        <div className={cn("accordion__expandable", { show: isActive })}>
          {children}
        </div>
      }
    </section>
  );
};

export default Accordion;
