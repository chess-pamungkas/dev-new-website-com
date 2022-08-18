import React from 'react';
import cn from 'classnames';
import { AngleDownIcon } from '../icons';

const Accordion = ({ children, className, title, isOpen, onSelect }) => {
  return (
    <section className={cn("accordeon", {"accordeon--open": isOpen}, className)} >
      <button className="accordeon__title" onClick={() => onSelect(title)}>
        {title}

        <AngleDownIcon
          className="accordeon__icon"
        />
      </button>
      
      {isOpen && <div className="accordeon__expandable">{children}</div>}
    </section>     
  );
};

export default Accordion;
