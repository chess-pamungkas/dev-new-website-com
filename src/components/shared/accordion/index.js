import React from 'react';
import cn from 'classnames';

const Accordion = ({ children, className, title, isOpen, onSelect }) => {
  return (
    <section className={cn("accordeon", className)} >
      <button className="accordeon__title" onClick={() => onSelect(title)}>
        {title}
      </button>
      
      {isOpen && <div className="accordeon__expandable">{children}</div>}
    </section>     
  );
};

export default Accordion;
