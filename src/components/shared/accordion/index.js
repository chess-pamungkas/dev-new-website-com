import React, { useState, useEffect, useCallback } from "react";
import cn from "classnames";
import { AngleDownIcon } from "../icons";

const Accordion = ({
  children,
  className,
  title,
  isOpen,
  onSelect,
  icon: Icon,
  iconForActive: IconForActive,
}) => {
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
  }, [isOpen]);

  const getIcon = useCallback(() => {
    if (isActive) {
      return IconForActive ? <IconForActive /> : <Icon />;
    } else {
      return <Icon />;
    }
  }, [isActive]);

  return (
    <section
      className={cn("accordion", { "accordion--open": isActive }, className)}
    >
      <button
        type="button"
        className="accordion__title"
        onClick={() => handleClick(title)}
      >
        <span>{title}</span>
        {Icon ? getIcon() : <AngleDownIcon className="accordion__icon" />}
      </button>
      {isActive && <div className="accordion__expandable">{children}</div>}
    </section>
  );
};

export default Accordion;
